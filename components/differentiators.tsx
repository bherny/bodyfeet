import { differentiators } from "@/lib/site-data";
import { MotionItem, MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";

export function Differentiators() {
  return (
    <MotionSection id="diferenciales" className="bg-white py-20 sm:py-24">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="Diferenciales"
            title="Una atención pensada para resultados reales, no para sesiones estándar"
            description="BODY FEET diferencia su atención por el tiempo dedicado a cada paciente, el enfoque integral y la combinación de tecnología moderna con técnicas complementarias."
          />
          <div className="rounded-[32px] bg-brand-deep p-6 text-white shadow-soft sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-sky">Promesa central</p>
            <p className="mt-3 text-2xl font-black leading-tight">Cada paciente recibe el tiempo que realmente necesita para su recuperación.</p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {differentiators.map((item) => (
            <MotionItem key={item.title} className="group rounded-3xl border border-brand-blue/14 bg-brand-mist p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lift">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-blue shadow-sm group-hover:bg-brand-blue group-hover:text-white">
                <item.icon aria-hidden="true" className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-black text-brand-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </MotionItem>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
