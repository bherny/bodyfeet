import type { Metadata } from "next";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Conversion } from "@/components/conversion";
import { Differentiators } from "@/components/differentiators";
import { Hero } from "@/components/hero";
import { Locations } from "@/components/locations";
import { Services } from "@/components/services";
import { medicalBusinessSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-data";

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url;

  return {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    alternates: {
      canonical: siteUrl,
    },
    openGraph: {
      title: siteConfig.seo.title,
      description: siteConfig.seo.description,
      url: siteUrl,
      images: [
        {
          url: `${siteUrl}/photos/podology-insoles.webp`,
          width: 1400,
          height: 980,
          alt: "BODY FEET, centro de podología y rehabilitación",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.seo.title,
      description: siteConfig.seo.description,
      images: [`${siteUrl}/photos/podology-insoles.webp`],
    },
  };
}

export default function HomePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema()) }} />
      <Hero />
      <Services />
      <Differentiators />
      <Locations />
      <About />
      <Conversion />
      <Contact />
    </main>
  );
}
