"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { cloneElement } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { services, siteConfig } from "@/lib/site-data";
import { cn, whatsappHref } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Ingresa tu nombre").max(80, "El nombre es demasiado largo"),
  phone: z.string().min(7, "Ingresa un teléfono válido").max(20, "El teléfono es demasiado largo"),
  service: z.string().min(1, "Selecciona un servicio"),
  location: z.string().min(1, "Selecciona una sede"),
  message: z.string().min(8, "Cuéntanos brevemente qué necesitas").max(800, "El mensaje es demasiado largo"),
  company: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof formSchema>;

const locations = ["Sede principal Musa", "Sede Flora Tristán", "Sede Manchay", "Aún no lo sé"];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: "",
      location: "",
      message: "",
      company: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setStatus("idle");
    const whatsappMessage = [
      "Hola BODY FEET, deseo reservar una cita.",
      "",
      `Nombre: ${values.name}`,
      `Teléfono: ${values.phone}`,
      `Servicio de interés: ${values.service}`,
      `Sede preferida: ${values.location}`,
      "",
      `Mensaje: ${values.message}`,
    ].join("\n");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    reset();
    setStatus("success");

    const whatsappUrl = whatsappHref(siteConfig.whatsapp, whatsappMessage);
    window.location.assign(whatsappUrl);
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Empresa</label>
        <input id="company" tabIndex={-1} autoComplete="off" {...register("company")} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nombre completo" error={errors.name?.message}>
          <input id="name" type="text" autoComplete="name" className={fieldClass(Boolean(errors.name))} {...register("name")} />
        </Field>
        <Field label="Teléfono o WhatsApp" error={errors.phone?.message}>
          <input id="phone" type="tel" inputMode="tel" autoComplete="tel" className={fieldClass(Boolean(errors.phone))} {...register("phone")} />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Servicio de interés" error={errors.service?.message}>
          <select id="service" className={fieldClass(Boolean(errors.service))} {...register("service")}>
            <option value="">Selecciona una opción</option>
            {services.map((service) => (
              <option key={service.title} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Sede preferida" error={errors.location?.message}>
          <select id="location" className={fieldClass(Boolean(errors.location))} {...register("location")}>
            <option value="">Selecciona una sede</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Mensaje" error={errors.message?.message}>
        <textarea id="message" rows={5} className={cn(fieldClass(Boolean(errors.message)), "resize-y")} {...register("message")} />
      </Field>

      <button
        type="submit"
        disabled={isSubmitting}
        className="focus-ring inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-deep px-6 py-3 text-sm font-black text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-brand-ink disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" /> : <Send aria-hidden="true" className="h-4 w-4" />}
        Enviar por WhatsApp
      </button>

      {status === "success" ? (
        <p className="flex gap-2 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-800" role="status">
          <CheckCircle2 aria-hidden="true" className="h-5 w-5 shrink-0" />
          Solicitud validada. WhatsApp se abrirá con los datos listos para enviar.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="flex gap-2 rounded-2xl bg-red-50 px-4 py-3 text-sm font-bold text-red-800" role="alert">
          <AlertCircle aria-hidden="true" className="h-5 w-5 shrink-0" />
          No se pudo enviar. Intenta nuevamente o escribe por WhatsApp.
        </p>
      ) : null}
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactElement<{ id?: string; "aria-invalid"?: boolean; "aria-describedby"?: string }> }) {
  const id = children.props.id;
  const errorId = id ? `${id}-error` : undefined;
  const childWithA11y = cloneElement(children, {
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? errorId : undefined,
  });

  return (
    <div>
      <label className="mb-2 block text-sm font-black text-brand-ink" htmlFor={id}>
        {label}
      </label>
      {childWithA11y}
      {error ? (
        <p id={errorId} className="mt-2 text-xs font-bold text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function fieldClass(hasError: boolean) {
  return cn(
    "focus-ring min-h-12 w-full rounded-2xl border bg-white px-4 py-3 text-sm text-brand-ink shadow-sm transition placeholder:text-slate-400",
    hasError ? "border-red-300" : "border-brand-blue/20 hover:border-brand-blue/45",
  );
}
