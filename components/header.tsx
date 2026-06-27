"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { ButtonLink } from "@/components/button-link";
import { navItems, siteConfig } from "@/lib/site-data";
import { cn, phoneHref, whatsappHref } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const appointmentMessage = "Hola, deseo reservar una cita en BODY FEET.";

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/88 backdrop-blur-xl">
      <div className="container-page flex min-h-[var(--header-height)] items-center justify-between gap-4">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-full" aria-label="Ir al inicio">
          <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-brand-mist">
            <Image src="/brand/body-feet-mark.png" alt="" fill sizes="48px" className="object-contain p-2" priority />
          </span>
          <span className="leading-none">
            <span className="block text-lg font-black tracking-[0.18em] text-brand-deep">{siteConfig.name}</span>
            <span className="block text-xs font-bold uppercase tracking-[0.12em] text-brand-blue">Centro de salud</span>
          </span>
        </Link>

        <nav aria-label="Navegación principal" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full px-4 py-2 text-sm font-bold text-slate-600 transition hover:bg-brand-sky/18 hover:text-brand-deep"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href={phoneHref(siteConfig.phone)} icon={Phone} variant="secondary">
            Llamar ahora
          </ButtonLink>
          <ButtonLink href={whatsappHref(siteConfig.whatsapp, appointmentMessage)} external>
            Reservar cita
          </ButtonLink>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-blue/25 bg-white text-brand-deep lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </div>

      <div className={cn("border-t border-brand-sky/30 bg-white lg:hidden", open ? "block" : "hidden")}>
        <nav className="container-page flex flex-col gap-2 py-4" aria-label="Navegación móvil">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-lg px-3 py-3 text-sm font-bold text-brand-deep hover:bg-brand-mist"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="grid gap-2 pt-2 sm:grid-cols-2">
            <ButtonLink href={phoneHref(siteConfig.phone)} icon={Phone} variant="secondary">
              Llamar ahora
            </ButtonLink>
            <ButtonLink href={whatsappHref(siteConfig.whatsapp, appointmentMessage)} external>
              Reservar cita
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
