import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { locations, navItems, siteConfig } from "@/lib/site-data";
import { phoneHref, whatsappHref } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-brand-ink text-white">
      <div className="container-page grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white ring-1 ring-brand-rose/35">
              <Image src="/brand/body-feet-mark.png" alt="" fill sizes="48px" className="object-contain p-2" />
            </span>
            <div>
              <p className="text-lg font-black tracking-[0.18em]">{siteConfig.name}</p>
              <p className="text-sm text-white/70">Centro de podología y rehabilitación</p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/72">{siteConfig.slogan}.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href={whatsappHref(siteConfig.whatsapp, "Hola, deseo solicitar información en BODY FEET.")} external>
              Escribir por WhatsApp
            </ButtonLink>
            <ButtonLink href={phoneHref(siteConfig.phone)} icon={Phone} variant="secondary">
              Llamar
            </ButtonLink>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-brand-rose">Navegación</h2>
          <ul className="mt-5 space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="text-sm text-white/74 transition hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-brand-rose">Sedes</h2>
          <ul className="mt-5 space-y-4">
            {locations.map((location) => (
              <li key={location.name} className="flex gap-3 text-sm text-white/74">
                <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand-sky" />
                <span>
                  <strong className="block text-white">{location.name}</strong>
                  {location.address}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-3">
            <a className="focus-ring rounded-full p-2 text-white/78 hover:bg-white/10 hover:text-white" href={siteConfig.facebook} target="_blank" rel="noreferrer" aria-label="Facebook de BODY FEET">
              <Facebook aria-hidden="true" className="h-5 w-5" />
            </a>
            <a className="focus-ring rounded-full p-2 text-white/78 hover:bg-white/10 hover:text-white" href={siteConfig.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok de BODY FEET">
              <Instagram aria-hidden="true" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-brand-rose/15 py-5">
        <div className="container-page flex flex-col gap-2 text-xs text-white/56 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.</p>
          <p>Correo electrónico y enlaces exactos de Google Maps pendientes de entrega.</p>
        </div>
      </div>
    </footer>
  );
}
