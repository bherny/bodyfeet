import { MailWarning, MessageCircle, Phone } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { ContactForm } from "@/components/contact-form";
import { MotionItem, MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { locations, siteConfig } from "@/lib/site-data";
import { phoneHref, whatsappHref } from "@/lib/utils";

export function Contact() {
  return (
    <MotionSection id="contacto" className="bg-white py-20 sm:py-24">
      <div className="container-page grid gap-12 lg:grid-cols-[0.82fr_1fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Contacto"
            title="Reserva una cita o solicita información"
            description="El formulario queda preparado para integrarse con un backend, servicio de correo o CRM. Los datos sensibles deben configurarse con variables de entorno."
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

          <div className="mt-8 rounded-[28px] border border-brand-blue/14 bg-gradient-to-br from-brand-mist to-brand-lilac/15 p-6">
            <div className="flex gap-3">
              <MailWarning aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-brand-blue" />
              <div>
                <h3 className="font-black text-brand-ink">Dato pendiente</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  El documento no incluye correo electrónico ni enlaces exactos de Google Maps. Estos campos deben reemplazarse cuando el cliente los entregue.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {locations.map((location) => (
              <div key={location.name} className="rounded-2xl border border-brand-blue/12 bg-gradient-to-br from-white to-brand-sky/12 p-4 shadow-sm">
                <p className="text-sm font-black text-brand-ink">{location.name}</p>
                <p className="mt-1 text-sm text-slate-600">{location.phone} · {location.hours}</p>
              </div>
            ))}
          </div>
        </div>

        <MotionItem className="rounded-[32px] border border-brand-blue/14 bg-gradient-to-br from-brand-mist via-white to-brand-sky/20 p-5 shadow-soft sm:p-8">
          <ContactForm />
        </MotionItem>
      </div>
    </MotionSection>
  );
}
