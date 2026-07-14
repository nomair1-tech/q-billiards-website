const websiteUrl = "https://www.qbilliardshtx.com";

const socialProfiles = [
  "https://www.facebook.com/QBILIARDS/",
  "https://www.instagram.com/QBilliards_HTX/",
  "https://www.tiktok.com/@QBilliards_HTX",
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${websiteUrl}/#organization`,
      name: "Q Billiards Arena",
      alternateName: "Q Billiards",
      url: websiteUrl,
      email: "qbilliards59@gmail.com",
      telephone: "+1-713-498-8813",
      image: `${websiteUrl}/images/hero/hero.jpg`,
      sameAs: socialProfiles,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+1-713-498-8813",
          email: "qbilliards59@gmail.com",
          contactType: "customer service",
          areaServed: "US",
          availableLanguage: ["English"],
        },
      ],
    },

    {
      "@type": ["LocalBusiness", "SportsActivityLocation"],
      "@id": `${websiteUrl}/#localbusiness`,
      name: "Q Billiards Arena",
      alternateName: "Q Billiards",
      url: websiteUrl,
      image: `${websiteUrl}/images/hero/hero.jpg`,

      description:
        "Q Billiards Arena is a Houston billiards and cue-sports venue offering American pool, professional snooker, heated snooker, Chinese 9-ball, carom billiards, poker room rentals, weekly tournaments, food, drinks and late-night entertainment.",

      telephone: "+1-713-498-8813",
      email: "qbilliards59@gmail.com",
      priceRange: "$$",

      parentOrganization: {
        "@id": `${websiteUrl}/#organization`,
      },

      address: {
        "@type": "PostalAddress",
        streetAddress: "10500 W Bellfort Ave, Unit 200",
        addressLocality: "Houston",
        addressRegion: "TX",
        postalCode: "77031",
        addressCountry: "US",
      },

      hasMap:
        "https://www.google.com/maps/search/?api=1&query=10500+W+Bellfort+Ave+Unit+200+Houston+TX+77031",

      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "https://schema.org/Sunday",
            "https://schema.org/Monday",
            "https://schema.org/Tuesday",
            "https://schema.org/Wednesday",
            "https://schema.org/Thursday",
          ],
          opens: "17:00",
          closes: "02:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "https://schema.org/Friday",
            "https://schema.org/Saturday",
          ],
          opens: "17:00",
          closes: "04:00",
        },
      ],

      sameAs: socialProfiles,

      areaServed: [
        {
          "@type": "City",
          name: "Houston",
        },
        {
          "@type": "AdministrativeArea",
          name: "Southwest Houston",
        },
      ],

      currenciesAccepted: "USD",
      paymentAccepted: "Cash, Credit Card",

      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "American Pool Tables",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Professional Snooker Tables",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Heated Snooker Tables",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Chinese 9-Ball Tables",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Carom Billiards",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Private Poker Room",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Food and Drinks",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Weekly Tournaments",
          value: true,
        },
      ],

      knowsAbout: [
        "American pool",
        "Snooker",
        "Heated snooker",
        "Chinese 9-ball",
        "Carom billiards",
        "Three-cushion billiards",
        "Poker tournaments",
        "Pool tournaments",
        "Snooker tournaments",
        "Poker room rentals",
      ],

      makesOffer: [
        {
          "@type": "Offer",
          name: "American Pool",
          price: "10.00",
          priceCurrency: "USD",
          description: "American pool table rental per hour.",
        },
        {
          "@type": "Offer",
          name: "Standard Snooker",
          price: "15.00",
          priceCurrency: "USD",
          description: "Standard full-size snooker table rental per hour.",
        },
        {
          "@type": "Offer",
          name: "Heated Snooker",
          price: "20.00",
          priceCurrency: "USD",
          description: "Heated snooker table rental per hour.",
        },
        {
          "@type": "Offer",
          name: "Chinese 9-Ball",
          price: "15.00",
          priceCurrency: "USD",
          description: "Chinese 9-ball table rental per hour.",
        },
        {
          "@type": "Offer",
          name: "Carom Billiards",
          price: "15.00",
          priceCurrency: "USD",
          description: "Carom and three-cushion table rental per hour.",
        },
      ],
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}