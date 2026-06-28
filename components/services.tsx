import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { MotionItem, MotionSection } from "@/components/motion-section";
import { PlaceholderNote } from "@/components/placeholder-note";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/site-data";

export function Services() {
  const tones = [
    "from-brand-sky/75 to-brand-blue/35",
    "from-brand-blue/55 to-brand-sky/45",
    "from-brand-rose/50 to-brand-sky/45",
    "from-brand-deep/45 to-brand-sky/45",
    "from-brand-sky/65 to-brand-rose/35",
    "from-brand-rose/45 to-brand-blue/35",
  ];

  return (
    <MotionSection id="servicios" className="color-band py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Servicios"
          title="Especialidades para una recuperación integral"
          description="Todas las sedes ofrecen los mismos servicios, según la información entregada por el cliente."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => (
            <MotionItem key={service.title} className="group overflow-hidden rounded-[28px] border border-brand-sky/40 bg-white/92 shadow-sm ring-1 ring-brand-rose/10 backdrop-blur transition hover:-translate-y-1 hover:border-brand-rose/45 hover:shadow-lift">
              <div className={`h-1.5 bg-gradient-to-r ${tones[index % tones.length]}`} />
              <div className="grid min-h-full md:grid-cols-[0.85fr_1fr]">
                <div className="relative min-h-72 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`Imagen referencial del servicio ${service.title}`}
                    fill
                    sizes="(min-width: 1024px) 28vw, 92vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/48 via-brand-deep/8 to-transparent opacity-80" />
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <PlaceholderNote compact />
                    <span className="rounded-full bg-brand-deep/82 px-3 py-1.5 text-xs font-black text-white shadow-sm backdrop-blur">
                      Servicio {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <div className="relative overflow-hidden bg-gradient-to-br from-white via-brand-mist to-brand-sky/18 p-6 sm:p-7">
                  <div className="absolute right-0 top-0 h-28 w-28 translate-x-8 -translate-y-8 rounded-full bg-brand-rose/22" />
                  <div className="absolute bottom-0 right-8 h-20 w-20 translate-y-10 rounded-full bg-brand-blue/18" />
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${tones[index % tones.length]} text-brand-deep shadow-sm`}>
                    <service.icon aria-hidden="true" className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-2xl font-black leading-tight text-brand-ink">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
                  <ul className="mt-5 space-y-3">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex gap-3 text-sm font-bold text-slate-700">
                        <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </MotionItem>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
