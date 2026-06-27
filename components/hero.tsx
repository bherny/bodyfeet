import Image from "next/image";
import { Activity, CalendarCheck, Footprints, MessageCircle, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { MotionItem } from "@/components/motion-section";
import { siteConfig, stats, trustItems } from "@/lib/site-data";
import { phoneHref, whatsappHref } from "@/lib/utils";

export function Hero() {
  return (
    <section className="mesh-bg overflow-hidden">
      <div className="container-page grid min-h-[calc(100vh-var(--header-height))] items-center gap-12 py-14 lg:grid-cols-[1fr_0.88fr] lg:py-20">
        <div>
          <MotionItem>
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-brand-deep shadow-sm">
              <ShieldCheck aria-hidden="true" className="h-4 w-4 text-brand-blue" />
              Centro de podología y rehabilitación
            </p>
          </MotionItem>

          <MotionItem className="mt-7">
            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] text-brand-ink sm:text-6xl lg:text-7xl">
              Tu recuperación es nuestra prioridad
            </h1>
          </MotionItem>

          <MotionItem className="mt-6">
            <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Atención integral en podología clínica, plantillas ortopédicas, rehabilitación física, quiropráctica,
              enfermería, cosmiatría y craneopuntura, con tecnología avanzada y tiempo personalizado para cada paciente.
            </p>
          </MotionItem>

          <MotionItem className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href={whatsappHref(siteConfig.whatsapp, "Hola, deseo reservar una cita en BODY FEET.")}
              icon={CalendarCheck}
              external
              className="sm:min-w-44"
            >
              Reservar cita
            </ButtonLink>
            <ButtonLink href={phoneHref(siteConfig.phone)} icon={Phone} variant="secondary" className="sm:min-w-44">
              Llamar ahora
            </ButtonLink>
            <ButtonLink
              href={whatsappHref(siteConfig.whatsapp, "Hola, deseo solicitar información sobre los servicios de BODY FEET.")}
              icon={MessageCircle}
              variant="ghost"
              external
              className="sm:min-w-44"
            >
              Solicitar información
            </ButtonLink>
          </MotionItem>

          <MotionItem className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-brand-blue/15 bg-white/70 p-4 shadow-sm backdrop-blur">
                <p className="text-3xl font-black text-brand-deep">{stat.value}</p>
                <p className="mt-1 text-sm font-bold text-slate-500">{stat.label}</p>
              </div>
            ))}
          </MotionItem>
        </div>

        <MotionItem className="relative">
          <div className="absolute -left-8 top-8 hidden h-28 w-28 rounded-full bg-brand-lilac/35 blur-2xl lg:block" />
          <div className="absolute -right-6 bottom-16 hidden h-40 w-40 rounded-full bg-brand-sky/50 blur-2xl lg:block" />
          <div className="relative min-h-[520px] overflow-hidden rounded-[36px] bg-gradient-to-br from-white via-brand-mist to-brand-sky/30 p-6 shadow-soft ring-1 ring-brand-blue/15 sm:p-8">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-lilac/30" />
            <div className="absolute bottom-16 right-8 h-32 w-32 rounded-full bg-brand-blue/20 blur-sm" />
            <div className="absolute -bottom-20 -left-12 h-56 w-56 rounded-full bg-brand-sky/35" />

            <div className="relative z-10 flex h-full min-h-[456px] flex-col justify-between">
              <div className="flex items-center justify-between gap-4">
                <div className="rounded-3xl bg-white/82 p-5 shadow-lift backdrop-blur">
                  <Image src="/brand/body-feet-mark.png" alt="" width={112} height={80} className="h-20 w-28 object-contain" priority />
                </div>
                <div className="rounded-full bg-brand-deep px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white shadow-lift">
                  +10 años
                </div>
              </div>

              <div className="mt-10">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-blue">Sistema integral</p>
                <h2 className="mt-3 max-w-sm text-4xl font-black leading-tight text-brand-ink">
                  Podología, rehabilitación y bienestar en una sola experiencia
                </h2>
              </div>

              <div className="mt-8 grid gap-3">
                {[
                  { label: "Podología clínica", icon: Footprints, tone: "bg-brand-sky/45" },
                  { label: "Rehabilitación física", icon: Activity, tone: "bg-brand-blue/18" },
                  { label: "Técnicas complementarias", icon: Sparkles, tone: "bg-brand-lilac/30" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/78 p-4 shadow-sm backdrop-blur">
                    <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${item.tone} text-brand-deep`}>
                      <item.icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-black text-brand-deep">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MotionItem>
      </div>

      <div className="border-y border-brand-blue/12 bg-white/74 py-4">
        <div className="container-page flex snap-x gap-3 overflow-x-auto lg:justify-between">
          {trustItems.map((item) => (
            <div key={item.label} className="flex min-w-fit items-center gap-2 rounded-full bg-brand-mist px-4 py-2 text-sm font-bold text-brand-deep">
              <item.icon aria-hidden="true" className="h-4 w-4 text-brand-blue" />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
