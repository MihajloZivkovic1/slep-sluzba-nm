export default function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Šlep Služba NM",
    "alternateName": ["Slep Sluzba NM", "Slep Sluzba Pancevo", "Šlep Služba Pančevo"],
    "image": "https://slepsluzba-nm.rs/slep-sluzba-logo.webp",
    "telephone": "+381600490036",
    "email": "slepsluzbanm@gmail.com",
    "url": "https://slepsluzba-nm.rs",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pančevo",
      "addressRegion": "Vojvodina",
      "addressCountry": "RS"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "44.8708",
      "longitude": "20.6403"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "Od 3000 RSD",
    "areaServed": [
      { "@type": "City", "name": "Pančevo" },
      { "@type": "Place", "name": "Starčevo" },
      { "@type": "Place", "name": "Omoljica" },
      { "@type": "Place", "name": "Kačarevo" },
      { "@type": "Place", "name": "Borča" },
      { "@type": "Place", "name": "Ovča" },
      { "@type": "Place", "name": "Vojlovica" }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50",
      "bestRating": "5"
    }
  }

  const emergencyServiceSchema = {
    "@context": "https://schema.org",
    "@type": "EmergencyService",
    "name": "Šlep Služba NM - Hitna Pomoć na Putu",
    "serviceType": "Towing Service",
    "telephone": "+381600490036",
    "areaServed": {
      "@type": "City",
      "name": "Pančevo",
      "containedInPlace": {
        "@type": "Country",
        "name": "Srbija"
      }
    },
    "availableLanguage": "Serbian",
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(emergencyServiceSchema),
        }}
      />
    </>
  )
}
