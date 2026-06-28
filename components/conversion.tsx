import { CalendarCheck, CheckCircle2, MapPin, MessageCircle, PhoneCall, Send } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { MotionItem, MotionSection } from "@/components/motion-section";
import { siteConfig } from "@/lib/site-data";
import { phoneHref, whatsappHref } from "@/lib/utils";

export function Conversion() {
  const steps = [
    "Elige el servicio o sede que prefieres",
    "Envía tus datos por WhatsApp",
    "Coordina la hora de atención",
  ];

  return (
    <MotionSection className="bg-[radial-gradient(circle_at_18%_20%,rgba(153,214,233,0.26),transparent_28%),radial-gradient(circle_at_82%_78%,rgba(244,184,204,0.2),transparent_30%),linear-gradient(135deg,#17324A,#315470)] py-18 text-white sm:py-20">
      <div className="container-page grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-sky">Agenda tu evaluación</p>
          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
            Da el primer paso hacia una recuperación con atención personalizada
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/74">
            Reserva por WhatsApp, llama a la sede que prefieras o solicita información para elegir el servicio más adecuado.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={whatsappHref(siteConfig.whatsapp, "Hola, deseo reservar una cita en BODY FEET.")} icon={CalendarCheck} external>
              Reservar cita
            </ButtonLink>
            <ButtonLink href={phoneHref(siteConfig.phone)} icon={PhoneCall} variant="secondary">
              Llamar ahora
            </ButtonLink>
            <ButtonLink href="#contacto" icon={MessageCircle} variant="ghost" className="text-white hover:bg-white/10">
              Solicitar información
            </ButtonLink>
          </div>
        </div>

        <MotionItem className="soft-shine ambient-ring rounded-[34px] border border-brand-rose/24 bg-white/10 p-6 shadow-soft backdrop-blur-xl sm:p-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-rose">Reserva guiada</p>
              <h3 className="mt-3 max-w-md text-3xl font-black leading-tight">
                Tu cita queda lista para coordinar por WhatsApp
              </h3>
            </div>
            <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-sky text-brand-ink shadow-lift sm:flex">
              <Send aria-hidden="true" className="h-6 w-6" />
            </span>
          </div>

          <div className="mt-7 grid gap-3">
            {steps.map((step, index) => (
              <div
                key={step}
                className="group flex items-center gap-4 rounded-2xl border border-white/14 bg-white/10 p-4 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-brand-rose/35 hover:bg-white/14"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sm font-black text-brand-deep">
                  {index + 1}
                </span>
                <p className="text-sm font-bold text-white/86">{step}</p>
                <CheckCircle2 aria-hidden="true" className="ml-auto h-5 w-5 shrink-0 text-brand-sky opacity-80 transition group-hover:text-brand-rose" />
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/12 bg-brand-ink/22 p-4">
              <MapPin aria-hidden="true" className="h-5 w-5 text-brand-sky" />
              <p className="mt-3 text-sm font-black">Tres sedes disponibles</p>
              <p className="mt-1 text-xs leading-5 text-white/66">La Molina y Manchay</p>
            </div>
            <div className="rounded-2xl border border-white/12 bg-brand-ink/22 p-4">
              <CalendarCheck aria-hidden="true" className="h-5 w-5 text-brand-rose" />
              <p className="mt-3 text-sm font-black">Atención personalizada</p>
              <p className="mt-1 text-xs leading-5 text-white/66">Según el servicio requerido</p>
            </div>
          </div>
        </MotionItem>
      </div>
    </MotionSection>
  );
}
