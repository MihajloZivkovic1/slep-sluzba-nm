export default function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Šlep Služba NM",
    "image": "URL_to_logo",
    "telephone": "+381-11-XXX-XXXX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Adresa",
      "addressLocality": "Beograd",
      "addressCountry": "RS"
    },
    "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
    "priceRange": "$"
  }

  const emergencyServiceSchema = {
    "@context": "https://schema.org",
    "@type": "EmergencyService",
    "serviceType": "Towing Service",
    "areaServed": "Belgrade, Serbia",
    "availableLanguage": "Serbian"
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