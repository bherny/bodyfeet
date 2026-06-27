import { ArrowRight, CalendarCheck, MessageCircle, PhoneCall } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { MotionSection } from "@/components/motion-section";
import { goals, siteConfig } from "@/lib/site-data";
import { phoneHref, whatsappHref } from "@/lib/utils";

export function Conversion() {
  return (
    <MotionSection className="bg-[radial-gradient(circle_at_18%_20%,rgba(153,214,233,0.26),transparent_28%),radial-gradient(circle_at_82%_78%,rgba(202,162,222,0.22),transparent_30%),linear-gradient(135deg,#17324A,#315470)] py-18 text-white sm:py-20">
      <div className="container-page grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-sky">Agenda tu evaluación</p>
          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">Da el primer paso hacia una recuperación con atención personalizada</h2>
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
        <div className="grid gap-3 sm:grid-cols-2">
          {goals.map((goal) => (
            <div key={goal} className="flex items-center gap-3 rounded-2xl border border-white/14 bg-white/10 p-4 text-sm font-bold text-white/90 shadow-sm backdrop-blur">
              <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 text-brand-sky" />
              {goal}
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
