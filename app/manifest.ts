import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.legalName,
    short_name: siteConfig.name,
    description: siteConfig.seo.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#F2FBFE",
    theme_color: "#99D6E9",
    lang: "es-PE",
    categories: ["health", "medical", "business"],
    icons: [
      {
        src: "/brand/body-feet-mark.png",
        sizes: "147x105",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
