import { site } from "@/lib/site";

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Plumber"],
    "@id": `${site.url}/#business`,
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    telephone: site.phone.international,
    email: site.email,
    founder: {
      "@type": "Person",
      name: site.director,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location,
      addressRegion: "NSW",
      addressCountry: "AU",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Campbelltown",
      },
      {
        "@type": "City",
        name: "Sydney",
      },
    ],
    identifier: [
      {
        "@type": "PropertyValue",
        propertyID: "ABN",
        value: site.abn,
      },
      {
        "@type": "PropertyValue",
        propertyID: "Plumbing Licence",
        value: site.plumbingLicence,
      },
    ],
    knowsAbout: site.services.map((service) => service.title),
    sameAs: [site.social.instagramUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
