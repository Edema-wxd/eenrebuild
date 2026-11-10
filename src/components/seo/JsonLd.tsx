interface JsonLdProps {
  data: Record<string, unknown>;
}

// Renders a Schema.org JSON-LD script. "<" is escaped so the JSON
// can never close the script tag early.
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
