# Blog Deployment Guide - EEN Consulting

Complete guide for building and deploying the blog to your FTP server.

---

## Prerequisites

Before deploying, ensure you have:

1. ✅ Completed Contentful setup ([CONTENTFUL_SETUP.md](CONTENTFUL_SETUP.md))
2. ✅ Created `.env.local` with Contentful API keys
3. ✅ Added at least one blog post in Contentful (and published it)
4. ✅ FTP credentials for your hosting server

---

## Build & Deployment Workflow

### Step 1: Create Content in Contentful

1. Log in to [Contentful](https://app.contentful.com)
2. Go to **Content** → **Add entry** → **Blog Post**
3. Fill in all required fields:
   - Title
   - Slug (URL-friendly, e.g., "solar-energy-benefits")
   - Excerpt (for SEO and previews)
   - Hero Image (upload image, recommended 1200x630px)
   - Content (write your article using the rich text editor)
   - Author (select from dropdown)
   - Categories (select 1-3 categories)
   - Published Date (set to today or desired publish date)
   - Featured (toggle on if you want it highlighted)
4. Click **Publish** (not just Save - must be published to appear on site)

### Step 2: Build the Static Site Locally

```bash
# Navigate to project directory
cd /Users/mac/Documents/GitHub/eenrebuild

# Install dependencies (if not already installed)
npm install

# Build the static site
npm run build
```

**What happens during build:**
- ✅ Fetches all blog posts from Contentful API
- ✅ Generates static HTML pages for each blog post
- ✅ Generates category pages
- ✅ Creates pagination pages
- ✅ Generates RSS feed (`/rss.xml`)
- ✅ Generates sitemap (`/sitemap.xml`)
- ✅ Optimizes assets
- ✅ Outputs everything to `/out` directory

**Expected output:**
```
Route (app)                                Size     First Load JS
┌ ○ /                                      1.5 kB         100 kB
├ ○ /about                                 2.1 kB         102 kB
├ ○ /blog                                  3.2 kB         105 kB
├ ○ /blog/[slug]                           5.8 kB         108 kB
├   ├ /blog/solar-energy-benefits
├   └ /blog/water-conservation-tips
├ ○ /blog/category/[category]              2.5 kB         103 kB
├ ○ /contact-us                            4.1 kB         106 kB
...
```

### Step 3: Verify Build Output

Before uploading, check the `/out` directory:

```bash
# List blog pages
ls out/blog/

# Check if your blog post exists
ls out/blog/your-post-slug/
```

You should see:
```
/out/
  /blog/
    index.html              # Blog listing page
    /your-post-slug/
      index.html            # Individual post page
    /category/
      /solar-energy/
        index.html          # Category page
  rss.xml                   # RSS feed
  sitemap.xml               # Sitemap
```

### Step 4: Upload to FTP Server

#### Option A: Using FileZilla (GUI)

1. **Download FileZilla** (if not installed): [filezilla-project.org](https://filezilla-project.org)

2. **Connect to your server**:
   - Host: `ftp.yourdomain.com` (or IP address)
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21 (or 22 for SFTP)

3. **Navigate to your web root**:
   - Common paths: `/public_html/`, `/htdocs/`, `/www/`, or `/`

4. **Upload the `/out` folder contents**:
   - **Important**: Upload the *contents* of `/out`, not the folder itself
   - Select all files/folders inside `/out`
   - Drag and drop to the server's web root
   - Wait for upload to complete (can take 5-15 minutes depending on size)

5. **Verify upload**:
   - Check that `blog/` folder exists on server
   - Check that `sitemap.xml` and `rss.xml` are uploaded

#### Option B: Using Command Line FTP

```bash
# Connect via FTP
ftp ftp.yourdomain.com

# Login (enter username and password when prompted)
# user: yourusername
# pass: yourpassword

# Navigate to web root
cd /public_html

# Upload everything (recursive)
put -r out/*

# Disconnect
bye
```

#### Option C: Using LFTP (Recommended for faster uploads)

```bash
# Install lftp (macOS)
brew install lftp

# Upload with lftp
lftp -u username,password ftp.yourdomain.com <<EOF
cd /public_html
mirror -R out/ ./
bye
EOF
```

#### Option D: Using rsync (if server supports SSH/SFTP)

```bash
# Upload via rsync (faster, only uploads changed files)
rsync -avz --delete out/ username@yourdomain.com:/path/to/web/root/
```

### Step 5: Verify Deployment

1. **Visit your blog**: `https://yourdomain.com/blog`
2. **Check individual post**: `https://yourdomain.com/blog/your-post-slug`
3. **Check RSS feed**: `https://yourdomain.com/rss.xml`
4. **Check sitemap**: `https://yourdomain.com/sitemap.xml`
5. **Test categories**: `https://yourdomain.com/blog/category/solar-energy`
6. **Test search**: Use search bar on blog page

---

## Updating the Blog

### When You Add/Edit a Blog Post

1. **Edit in Contentful**:
   - Make changes to existing post or create new post
   - Click **Publish** (changes won't appear until published)

2. **Rebuild locally**:
   ```bash
   npm run build
   ```

3. **Upload only changed files** (recommended):
   - New post: Upload `/out/blog/new-post-slug/` folder
   - Edited post: Re-upload `/out/blog/edited-post-slug/` folder
   - Always re-upload: `/out/blog/index.html`, `/out/sitemap.xml`, `/out/rss.xml`

4. **Or upload everything** (simpler but slower):
   - Upload all contents of `/out` folder again

### When You Add a New Category

1. **Create in Contentful**: Add new category
2. **Rebuild**: `npm run build`
3. **Upload**: New category page will be at `/out/blog/category/new-category/`

---

## Automated Deployment (Optional)

### Option 1: GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Build and Deploy to FTP

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build site
        env:
          CONTENTFUL_SPACE_ID: ${{ secrets.CONTENTFUL_SPACE_ID }}
          CONTENTFUL_ACCESS_TOKEN: ${{ secrets.CONTENTFUL_ACCESS_TOKEN }}
          NEXT_PUBLIC_SITE_URL: ${{ secrets.SITE_URL }}
        run: npm run build

      - name: Deploy to FTP
        uses: SamKirkland/FTP-Deploy-Action@4.3.0
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          local-dir: ./out/
          server-dir: /public_html/
```

**Setup**:
1. Go to GitHub repo → Settings → Secrets and variables → Actions
2. Add these secrets:
   - `CONTENTFUL_SPACE_ID`
   - `CONTENTFUL_ACCESS_TOKEN`
   - `SITE_URL`
   - `FTP_SERVER`
   - `FTP_USERNAME`
   - `FTP_PASSWORD`
3. Push to `main` branch to trigger deploy

**Benefits**:
- ✅ Automatic deployment on push
- ✅ No manual FTP upload needed
- ✅ Build logs for debugging
- ✅ Can trigger manually from GitHub UI

### Option 2: Contentful Webhooks

Set up webhooks to trigger builds when content is published:

1. In Contentful: **Settings** → **Webhooks** → **Add webhook**
2. URL: Your GitHub Actions webhook URL or deploy service
3. Triggers: Select "Publish" and "Unpublish"
4. Content types: Select "Blog Post"

---

## File Structure on Server

After deployment, your server should have:

```
/public_html/                 (or /htdocs, /www)
├── index.html               # Homepage
├── about/
│   └── index.html
├── services/
│   └── index.html
├── blog/
│   ├── index.html           # Blog listing
│   ├── your-post-slug/
│   │   └── index.html       # Individual post
│   └── category/
│       └── solar-energy/
│           └── index.html   # Category page
├── sitemap.xml
├── rss.xml
├── robots.txt
├── _next/                   # Next.js assets
├── images/                  # Public images
└── logos/                   # Logos
```

---

## Troubleshooting

### Issue: "Build failed - Cannot connect to Contentful"

**Solution**:
- Check `.env.local` has correct API keys
- Verify keys in Contentful dashboard (Settings → API keys)
- Ensure you're using Content Delivery API token (not Preview)

### Issue: "Blog posts not showing up"

**Solution**:
- Ensure posts are **Published** (not just saved as drafts)
- Check `publishedDate` is not in the future
- Rebuild the site: `npm run build`

### Issue: "Images not loading"

**Solution**:
- Images are hosted on Contentful's CDN, not your server
- Check image URLs start with `//images.ctfassets.net/`
- Verify images are published in Contentful

### Issue: "FTP upload very slow"

**Solution**:
- Use LFTP or rsync instead of FileZilla
- Compress files before upload (not recommended - breaks Next.js)
- Use incremental uploads (only changed files)
- Consider upgrading to faster hosting

### Issue: "404 errors on blog pages"

**Solution**:
- Ensure `.htaccess` or server config handles trailing slashes
- Check `next.config.ts` has `trailingSlash: true`
- Verify folders uploaded correctly (not just HTML files)

### Issue: "Search not working"

**Solution**:
- Search is client-side, requires JavaScript
- Check browser console for errors
- Ensure FlexSearch library loaded correctly

---

## Performance Optimization

### Enable Gzip Compression (if not already enabled)

Add to `.htaccess` (Apache) in web root:

```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>
```

### Enable Browser Caching

Add to `.htaccess`:

```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

## SEO Checklist

After deployment, verify:

- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] RSS feed accessible at `/rss.xml`
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Test blog post URLs in [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Verify Open Graph tags with [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Check meta descriptions and titles
- [ ] Verify canonical URLs

---

## Backup Strategy

### Before Each Deployment

1. **Backup current site**:
   ```bash
   # Download current site via FTP
   lftp -u username,password ftp.yourdomain.com -e "mirror /public_html backup-$(date +%Y%m%d); bye"
   ```

2. **Keep build artifacts**:
   ```bash
   # Archive the build
   tar -czf build-backup-$(date +%Y%m%d).tar.gz out/
   ```

### Contentful Backup

Contentful automatically versions all content. To export:

1. **Settings** → **Import/Export**
2. Click **Export**
3. Download JSON file (includes all content)

---

## Cost Breakdown

### Free Tier (Current Setup)

- **Contentful**: Free tier (25k API calls/month)
- **Hosting**: Your existing FTP server
- **Images**: Contentful CDN (included in free tier)
- **Total**: $0/month ✅

### If You Exceed Limits

- **Contentful**:
  - Free: 25k API calls/month
  - Micro: $39/month (100k calls)
  - Small: $249/month (500k calls)

- **Alternative hosting** (if needed):
  - Vercel: Free tier (100GB bandwidth)
  - Netlify: Free tier (100GB bandwidth)
  - Cloudflare Pages: Free tier (unlimited)

---

## Update Frequency Recommendations

### How Often to Rebuild

- **New blog post**: Immediately
- **Content edits**: Within 24 hours
- **Category/tag changes**: Within 24 hours
- **Design changes**: Immediately
- **Routine maintenance**: Weekly (to pick up any Contentful changes)

### Build Time Estimates

- **10 blog posts**: ~30 seconds
- **50 blog posts**: ~1-2 minutes
- **100 blog posts**: ~2-3 minutes
- **FTP upload**: 5-15 minutes (depends on connection speed)

---

## Quick Reference Commands

```bash
# Full build and deploy workflow
npm run build                          # Build static site
# Then upload out/ to FTP

# Check if build successful
ls out/blog/                          # Should see post folders

# Clean build (if needed)
rm -rf .next out
npm run build

# Check Contentful connection
curl "https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}"
```

---

## Support & Resources

### Documentation
- Next.js: [nextjs.org/docs](https://nextjs.org/docs)
- Contentful: [contentful.com/developers/docs](https://www.contentful.com/developers/docs/)
- Rich Text: [contentful.com/developers/docs/concepts/rich-text](https://www.contentful.com/developers/docs/concepts/rich-text/)

### Common Tasks
- **Add blog post**: [CONTENTFUL_SETUP.md](CONTENTFUL_SETUP.md) → Step 4
- **Edit post**: Contentful → Content → Find post → Edit → Publish
- **Delete post**: Contentful → Content → Find post → Unpublish → Archive
- **Change category colors**: Contentful → Content → Categories → Edit

### Getting Help
- Check browser console for JavaScript errors
- Check build logs for errors
- Verify Contentful API keys are correct
- Test locally first: `npm run dev` (development mode)

---

**Last Updated**: 2026-01-03
**Version**: 1.0
