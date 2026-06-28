import { Building2, Clock3, MapPinned, Navigation, Phone } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { MotionItem, MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { locations, siteConfig } from "@/lib/site-data";
import { phoneHref } from "@/lib/utils";

export function Locations() {
  return (
    <MotionSection id="sedes" className="bg-gradient-to-b from-[#eaf8fc] via-white to-[#e8f7fc] py-20 sm:py-24">
      <div className="container-page">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Sedes"
            title="Tres puntos de atención para pacientes de La Molina y Manchay"
            description="Elige la sede más conveniente y comunícate directamente para coordinar tu atención."
          />
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {locations.map((location, index) => (
            <MotionItem
              key={location.name}
              className="group relative overflow-hidden rounded-[30px] border border-brand-sky/40 bg-gradient-to-br from-white/90 via-brand-mist to-brand-sky/34 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-brand-rose/45 hover:shadow-lift"
            >
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-brand-rose/18 transition group-hover:scale-110" />
              <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-brand-sky/45" />
              <div className="absolute inset-x-6 top-28 h-px bg-gradient-to-r from-transparent via-brand-blue/25 to-transparent" />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-sky/65 to-brand-rose/28 text-brand-deep shadow-sm">
                    <Building2 aria-hidden="true" className="h-8 w-8" />
                  </div>
                  <span className="rounded-full border border-brand-blue/10 bg-white/82 px-3 py-1.5 text-xs font-black text-brand-deep shadow-sm">
                    {location.isMain ? "Sede principal" : `Sede ${index + 1}`}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-black text-brand-ink">{location.name}</h3>

                <div className="mt-6 space-y-4 text-sm text-slate-600">
                  <p className="flex gap-3">
                    <MapPinned aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                    <span>{location.address}</span>
                  </p>
                  <p className="flex gap-3">
                    <Phone aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                    <span>{location.phone}</span>
                  </p>
                  <p className="flex gap-3">
                    <Clock3 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                    <span>{location.hours}</span>
                  </p>
                </div>

                <ButtonLink href={phoneHref(location.phone)} icon={Phone} variant="secondary" className="mt-6 w-full">
                  Llamar a esta sede
                </ButtonLink>
              </div>
            </MotionItem>
          ))}
        </div>

        <MotionItem className="mt-10 overflow-hidden rounded-[30px] border border-brand-rose/35 bg-gradient-to-r from-brand-sky/24 via-white to-brand-rose/14 shadow-soft">
          <details className="group">
            <summary className="focus-ring flex cursor-pointer list-none flex-col gap-4 p-5 marker:hidden sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <span>
                <span className="block text-xs font-black uppercase tracking-[0.18em] text-brand-blue">Mapa oficial</span>
                <span className="mt-2 block text-2xl font-black text-brand-ink">Ver ubicación de BODY FEET</span>
              </span>
              <span className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand-deep px-5 py-3 text-sm font-black text-white shadow-lift transition group-open:bg-brand-blue">
                <MapPinned aria-hidden="true" className="h-4 w-4" />
                Mostrar mapa
              </span>
            </summary>

            <div className="border-t border-brand-blue/12 bg-white p-4 sm:p-5">
              <div className="relative h-[260px] overflow-hidden rounded-[24px] bg-brand-sky/12 shadow-sm ring-1 ring-brand-blue/15 sm:h-[320px]">
                <iframe
                  src={siteConfig.googleMapsEmbed}
                  title="Mapa de ubicación de BODY FEET en Google Maps"
                  className="absolute inset-0 h-full w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-brand-blue/25 bg-white px-5 py-3 text-sm font-black text-brand-deep shadow-sm transition hover:-translate-y-0.5 hover:border-brand-blue sm:w-auto"
              >
                <Navigation aria-hidden="true" className="h-4 w-4" />
                Abrir en Google Maps
              </a>
            </div>
          </details>
        </MotionItem>
      </div>
    </MotionSection>
  );
}
