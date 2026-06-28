"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, Clock3, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";
import { ButtonLink } from "@/components/button-link";
import { locations, navItems, siteConfig } from "@/lib/site-data";
import { cn, phoneHref, whatsappHref } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const appointmentMessage = "Hola, deseo reservar una cita en BODY FEET.";
  const mainLocation = locations.find((location) => location.isMain) ?? locations[0];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="hidden border-b border-brand-sky/25 bg-white lg:block">
        <div className="container-page flex min-h-16 items-center justify-between gap-8">
          <Link href="/" className="focus-ring flex items-center gap-3 rounded-full" aria-label="Ir al inicio">
            <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-brand-rose/30">
              <Image src="/brand/body-feet-mark.png" alt="" fill sizes="48px" className="object-contain p-2" priority />
            </span>
            <span className="leading-none">
              <span className="block text-lg font-black tracking-[0.18em] text-brand-deep">{siteConfig.name}</span>
              <span className="block text-xs font-bold uppercase tracking-[0.12em] text-brand-blue">Centro de salud</span>
            </span>
          </Link>

          <div className="grid flex-1 grid-cols-3 gap-5">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-rose/16 text-brand-blue ring-1 ring-brand-sky/20">
                <Phone aria-hidden="true" className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-[11px] font-black uppercase tracking-[0.14em] text-slate-400">Telefono</span>
                <a href={phoneHref(siteConfig.phone)} className="focus-ring rounded text-sm font-black text-brand-ink hover:text-brand-blue">
                  {siteConfig.phone}
                </a>
              </span>
            </div>
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-rose/16 text-brand-blue ring-1 ring-brand-sky/20">
                <MapPin aria-hidden="true" className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-[11px] font-black uppercase tracking-[0.14em] text-slate-400">Sede principal</span>
                <span className="block truncate text-sm font-black text-brand-ink">{mainLocation.address}</span>
              </span>
            </div>
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-rose/16 text-brand-blue ring-1 ring-brand-sky/20">
                <Clock3 aria-hidden="true" className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-[11px] font-black uppercase tracking-[0.14em] text-slate-400">Horario</span>
                <span className="block truncate text-sm font-black text-brand-ink">{mainLocation.hours}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-brand-ink text-white lg:bg-brand-deep">
        <div className="container-page flex min-h-[var(--header-height)] items-center justify-between gap-4 lg:min-h-12">
          <Link href="/" className="focus-ring flex items-center gap-3 rounded-full lg:hidden" aria-label="Ir al inicio">
            <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-brand-rose/30">
              <Image src="/brand/body-feet-mark.png" alt="" fill sizes="48px" className="object-contain p-2" priority />
            </span>
            <span className="leading-none">
              <span className="block text-lg font-black tracking-[0.18em] text-white">{siteConfig.name}</span>
              <span className="block text-xs font-bold uppercase tracking-[0.12em] text-brand-sky">Centro de salud</span>
            </span>
          </Link>

          <nav aria-label="Navegacion principal" className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-full px-4 py-2 text-sm font-bold text-white/82 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={whatsappHref(siteConfig.whatsapp, "Hola, deseo solicitar informacion sobre BODY FEET.")}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full text-white/78 ring-1 ring-transparent transition hover:bg-white/10 hover:text-white hover:ring-brand-rose/25"
              aria-label="Escribir por WhatsApp"
            >
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
            </a>
            <ButtonLink
              href={whatsappHref(siteConfig.whatsapp, appointmentMessage)}
              icon={CalendarCheck}
              external
              className="min-h-10 !bg-brand-sky px-5 py-2 !text-brand-ink ring-1 ring-brand-rose/35 hover:!bg-white"
            >
              Reservar cita
            </ButtonLink>
          </div>

          <button
            type="button"
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-sm lg:hidden"
            aria-label={open ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className={cn("border-t border-white/10 bg-brand-ink shadow-soft lg:hidden", open ? "block" : "hidden")}>
        <nav className="container-page max-h-[calc(100dvh-var(--header-height))] overflow-y-auto py-5" aria-label="Navegacion movil">
          <div className="grid gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring flex min-h-12 items-center justify-between rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-base font-black text-white shadow-sm transition hover:border-brand-rose/35 hover:bg-white/12"
                onClick={() => setOpen(false)}
              >
                <span>{item.label}</span>
                <span aria-hidden="true" className="text-brand-sky">
                  &rsaquo;
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            <ButtonLink
              href={phoneHref(siteConfig.phone)}
              icon={Phone}
              variant="secondary"
              className="!border-white/20 !bg-white/10 !text-white hover:!bg-white/15"
            >
              Llamar ahora
            </ButtonLink>
            <ButtonLink href={whatsappHref(siteConfig.whatsapp, appointmentMessage)} external className="!bg-brand-sky !text-brand-ink hover:!bg-white">
              Reservar cita
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
