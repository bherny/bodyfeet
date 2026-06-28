import Image from "next/image";
import { CalendarCheck, CirclePlay, Phone, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { MotionItem } from "@/components/motion-section";
import { siteConfig, stats, trustItems } from "@/lib/site-data";
import { phoneHref, whatsappHref } from "@/lib/utils";

export function Hero() {
  return (
    <section className="hero-bg overflow-hidden">
      <div className="container-page grid min-h-[500px] items-center gap-10 py-12 sm:py-14 lg:min-h-[520px] lg:grid-cols-[0.98fr_0.56fr]">
        <div className="max-w-4xl">
          <MotionItem>
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-rose/35 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-brand-sky shadow-sm backdrop-blur">
              <ShieldCheck aria-hidden="true" className="h-4 w-4" />
              Centro de podología y rehabilitación
            </p>
          </MotionItem>

          <MotionItem className="mt-6">
            <p className="text-lg font-black text-brand-sky sm:text-xl">{siteConfig.slogan}</p>
            <h1 className="mt-3 max-w-4xl text-5xl font-black leading-[1.02] text-white sm:text-6xl">
              Podología, rehabilitación y bienestar integral
            </h1>
          </MotionItem>

          <MotionItem className="mt-6">
            <p className="max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              Atención integral en podología clínica, plantillas ortopédicas, rehabilitación física, quiropráctica,
              enfermería, cosmiatría y craneopuntura, con tecnología avanzada y tiempo personalizado para cada paciente.
            </p>
          </MotionItem>

          <MotionItem className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href={whatsappHref(siteConfig.whatsapp, "Hola, deseo reservar una cita en BODY FEET.")}
              icon={CalendarCheck}
              external
              className="!bg-brand-sky !text-brand-ink hover:!bg-white sm:min-w-44"
            >
              Reservar cita
            </ButtonLink>
            <ButtonLink
              href="#servicios"
              icon={CirclePlay}
              variant="ghost"
              className="border border-white/24 text-white hover:bg-white/10 sm:min-w-44"
            >
              Ver servicios
            </ButtonLink>
            <ButtonLink
              href={phoneHref(siteConfig.phone)}
              icon={Phone}
              variant="ghost"
              className="border border-white/24 text-white hover:bg-white/10 sm:min-w-44"
            >
              Llamar ahora
            </ButtonLink>
          </MotionItem>

          <MotionItem className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/16 bg-white/10 p-4 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-brand-rose/40 hover:bg-white/16"
              >
                <p className="text-3xl font-black text-white">{stat.value}</p>
                <p className="mt-1 text-sm font-bold text-white/70">{stat.label}</p>
              </div>
            ))}
          </MotionItem>
        </div>

        <MotionItem className="relative hidden lg:block">
          <div className="absolute -right-10 top-4 h-56 w-56 rounded-full bg-brand-sky/28 blur-3xl" />
          <div className="absolute bottom-4 left-0 h-40 w-40 rounded-full bg-brand-rose/24 blur-2xl" />
          <div className="soft-shine ambient-ring float-card relative overflow-hidden rounded-[34px] border border-brand-rose/28 bg-white/12 p-6 shadow-soft backdrop-blur-xl">
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full border border-brand-rose/24" />
            <div className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-brand-sky/18" />

            <div className="relative z-10 flex min-h-[360px] flex-col justify-between">
              <div className="flex justify-end">
                <span className="rounded-full border border-brand-rose/30 bg-brand-ink/32 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white shadow-sm">
                  +10 años
                </span>
              </div>

              <div className="mx-auto flex h-56 w-56 items-center justify-center rounded-full border border-brand-rose/35 bg-white/92 p-5 shadow-lift">
                <div className="relative h-40 w-40 overflow-hidden rounded-full bg-white shadow-inner ring-1 ring-brand-rose/30">
                  <Image
                    src="/brand/body-feet-mark.png"
                    alt="Logo de BODY FEET"
                    fill
                    sizes="160px"
                    className="object-contain p-4"
                    priority
                  />
                </div>
              </div>

              <div className="rounded-3xl border border-brand-rose/28 bg-brand-ink/28 p-5 text-white shadow-sm backdrop-blur">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-sky">Atención integral</p>
                <p className="mt-2 text-xl font-black leading-tight">Cuidado especializado para pies, movimiento y bienestar.</p>
              </div>
            </div>
          </div>
        </MotionItem>
      </div>

      <div className="border-y border-brand-blue/12 bg-white py-4">
        <div className="container-page flex snap-x gap-3 overflow-x-auto lg:justify-between">
          {trustItems.map((item) => (
            <div key={item.label} className="flex min-w-fit items-center gap-2 rounded-full border border-brand-rose/20 bg-brand-mist px-4 py-2 text-sm font-bold text-brand-deep shadow-sm">
              <item.icon aria-hidden="true" className="h-4 w-4 text-brand-blue" />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
