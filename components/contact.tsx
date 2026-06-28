import { CalendarCheck, MessageCircle, Phone, Send } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { ContactForm } from "@/components/contact-form";
import { MotionItem, MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { locations, siteConfig } from "@/lib/site-data";
import { phoneHref, whatsappHref } from "@/lib/utils";

export function Contact() {
  return (
    <MotionSection id="contacto" className="blue-section py-20 sm:py-24">
      <div className="container-page grid gap-12 lg:grid-cols-[0.82fr_1fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Contacto"
            title="Reserva una cita o solicita información"
            description="El formulario está preparado para enviar la solicitud por WhatsApp con los datos de la reserva."
          />
          <div className="mt-8 space-y-4">
            <ButtonLink
              href={whatsappHref(siteConfig.whatsapp, "Hola, deseo reservar una cita en BODY FEET.")}
              icon={MessageCircle}
              external
              className="w-full sm:w-auto"
            >
              Escribir por WhatsApp
            </ButtonLink>
            <ButtonLink href={phoneHref(siteConfig.phone)} icon={Phone} variant="secondary" className="w-full sm:w-auto">
              Llamar ahora
            </ButtonLink>
          </div>

          <div className="soft-shine mt-8 rounded-[28px] border border-brand-rose/35 bg-gradient-to-br from-white/90 via-brand-sky/24 to-brand-rose/16 p-6 shadow-sm backdrop-blur">
            <div className="flex gap-3">
              <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-sky/35 text-brand-blue ring-1 ring-brand-rose/30">
                <Send aria-hidden="true" className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-black text-brand-ink">Reserva por WhatsApp</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Al enviar el formulario se abre WhatsApp con tus datos listos para coordinar la cita con BODY FEET.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/78 px-3 py-1.5 text-xs font-black text-brand-deep ring-1 ring-brand-sky/30">
                    <CalendarCheck aria-hidden="true" className="h-3.5 w-3.5 text-brand-blue" />
                    Reserva rápida
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/78 px-3 py-1.5 text-xs font-black text-brand-deep ring-1 ring-brand-rose/30">
                    <MessageCircle aria-hidden="true" className="h-3.5 w-3.5 text-brand-rose" />
                    Contacto directo
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {locations.map((location) => (
              <div key={location.name} className="rounded-2xl border border-brand-rose/24 bg-white/78 p-4 shadow-sm backdrop-blur">
                <p className="text-sm font-black text-brand-ink">{location.name}</p>
                <p className="mt-1 text-sm text-slate-600">
                  {location.phone} · {location.hours}
                </p>
              </div>
            ))}
          </div>
        </div>

        <MotionItem className="rounded-[32px] border border-brand-rose/35 bg-gradient-to-br from-white/92 via-brand-mist to-brand-sky/28 p-5 shadow-soft backdrop-blur sm:p-8">
          <ContactForm />
        </MotionItem>
      </div>
    </MotionSection>
  );
}
