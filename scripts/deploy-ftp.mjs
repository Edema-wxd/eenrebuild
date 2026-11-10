#!/usr/bin/env node
// Upload the static export (out/) to the FTP host from your own machine.
//
//   npm run deploy            build, then upload out/
//   npm run deploy:upload     upload the existing out/ without rebuilding
//   npm run deploy:check      only test the FTP login and list the target folder
//
// Settings come from .env.local (or the shell environment):
//   FTP_SERVER       e.g. ftp.eenconsult.com.ng
//   FTP_USERNAME     often the full form on cPanel, e.g. deploy@eenconsult.com.ng
//   FTP_PASSWORD
//   FTP_PROTOCOL     "ftp" (default) or "ftps"
//   FTP_PORT         default 21
//   FTP_SERVER_DIR   remote folder, default "public_html/"
//
// Files are uploaded over the top of what is there; nothing on the server is
// deleted, so pages removed from the site stay online until deleted by hand.

import { existsSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { Client } from "basic-ftp";

const checkOnly = process.argv.includes("--check");

for (const file of [".env.local", ".env"]) {
  if (existsSync(file)) {
    try {
      process.loadEnvFile(file);
    } catch {
      // ignore unreadable env files; missing values are reported below
    }
  }
}

const {
  FTP_SERVER,
  FTP_USERNAME,
  FTP_PASSWORD,
  FTP_PROTOCOL = "ftp",
  FTP_PORT = "21",
  FTP_SERVER_DIR = "public_html/",
} = process.env;

const missing = Object.entries({ FTP_SERVER, FTP_USERNAME, FTP_PASSWORD })
  .filter(([, value]) => !value)
  .map(([name]) => name);

if (missing.length) {
  console.error(`Missing ${missing.join(", ")}. Add them to .env.local.`);
  process.exit(1);
}

const localDir = path.resolve("out");
if (!checkOnly && !(existsSync(localDir) && statSync(localDir).isDirectory())) {
  console.error("No out/ folder found. Run `npm run deploy` to build first.");
  process.exit(1);
}

const client = new Client(30_000);

try {
  console.log(`Connecting to ${FTP_SERVER} as ${FTP_USERNAME} (${FTP_PROTOCOL})…`);
  await client.access({
    host: FTP_SERVER,
    port: Number(FTP_PORT),
    user: FTP_USERNAME,
    password: FTP_PASSWORD,
    secure: FTP_PROTOCOL === "ftps",
  });
  console.log("Logged in.");

  if (checkOnly) {
    const entries = await client.list(FTP_SERVER_DIR);
    console.log(`${FTP_SERVER_DIR} has ${entries.length} entries:`);
    for (const entry of entries.slice(0, 20)) {
      console.log(`  ${entry.isDirectory ? "dir " : "file"}  ${entry.name}`);
    }
    if (entries.length > 20) console.log(`  …and ${entries.length - 20} more`);
  } else {
    const files = readdirSync(localDir, { recursive: true, withFileTypes: true })
      .filter((entry) => entry.isFile()).length;

    console.log(`Uploading ${files} files from out/ to ${FTP_SERVER_DIR}…`);
    const started = Date.now();
    await client.ensureDir(FTP_SERVER_DIR);
    await client.uploadFromDir(localDir);

    const seconds = ((Date.now() - started) / 1000).toFixed(0);
    console.log(`Done: uploaded ${files} files to ${FTP_SERVER_DIR} in ${seconds}s.`);
  }
} catch (error) {
  const code = error?.code;
  console.error(`\nFTP error: ${error?.message ?? error}`);
  if (code === 530) {
    console.error(
      "The server rejected the username or password. On cPanel hosts the FTP " +
        "username is usually the full form (name@domain). Check for stray " +
        "spaces in FTP_PASSWORD."
    );
  } else if (code === "ECONNREFUSED" || code === "ETIMEDOUT" || code === "ENOTFOUND") {
    console.error(
      "Could not reach the server. Check FTP_SERVER, or whether the host only allows SFTP."
    );
  }
  process.exitCode = 1;
} finally {
  client.close();
}
