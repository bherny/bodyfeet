import { locations, services, siteConfig } from "@/lib/site-data";

export function medicalBusinessSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url;

  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: siteConfig.legalName,
    url: siteUrl,
    image: `${siteUrl}/photos/podology-insoles.webp`,
    logo: `${siteUrl}/brand/body-feet-mark.png`,
    slogan: siteConfig.slogan,
    telephone: siteConfig.phone,
    sameAs: [siteConfig.facebook, siteConfig.tiktok],
    medicalSpecialty: [
      "Podología clínica",
      "Rehabilitación física",
      "Quiropráctica",
      "Enfermería",
      "Cosmiatría",
      "Craneopuntura",
    ],
    areaServed: "La Molina, Lima",
    address: locations.map((location) => ({
      "@type": "PostalAddress",
      streetAddress: location.address,
      addressLocality: "La Molina",
      addressRegion: "Lima",
      addressCountry: "PE",
    })),
    department: locations.map((location) => ({
      "@type": "MedicalBusiness",
      name: `${siteConfig.name} - ${location.name}`,
      telephone: location.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: location.address,
        addressLocality: location.address.includes("Manchay") ? "Manchay" : "La Molina",
        addressRegion: "Lima",
        addressCountry: "PE",
      },
      openingHours: location.hours,
    })),
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "MedicalProcedure",
        name: service.title,
        description: service.description,
      },
    })),
  };
}
