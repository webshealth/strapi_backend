const stringScheme = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      url: "https://test.coinbureau.dev/",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://test.coinbureau.dev/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      url: "https://test.coinbureau.dev/",
      logo: "https://s3.coinbureau.dev/coinbureau-logo.jpg",
    },
  ],
};
JSON.stringify(stringScheme);
