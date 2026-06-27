import { Award, HeartHandshake, Target, Telescope } from "lucide-react";
import { MotionItem, MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { values } from "@/lib/site-data";

export function About() {
  return (
    <MotionSection id="nosotros" className="color-band py-20 sm:py-24">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Sobre nosotros"
            title="Más de 10 años ofreciendo atención que busca marcar diferencia"
            description="BODY FEET nació con una visión clara: ofrecer atención en salud que realmente marque la diferencia, dando a cada paciente el tiempo que necesita para lograr resultados desde la primera consulta."
          />

          <div className="space-y-5">
            <MotionItem className="rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-brand-sky/20">
              <p className="text-base leading-8 text-slate-600">
                El centro ha recibido pacientes que no lograron éxito en otros espacios y, con su enfoque integral, el cambio ha sido real y tangible. Su trabajo combina tecnología de vanguardia con técnicas milenarias y complementarias como la craneopuntura.
              </p>
            </MotionItem>
            <div className="grid gap-5 md:grid-cols-2">
              <MotionItem className="rounded-[28px] bg-gradient-to-br from-brand-deep via-brand-deep to-brand-blue p-7 text-white shadow-soft">
                <Target aria-hidden="true" className="h-8 w-8 text-brand-sky" />
                <h3 className="mt-5 text-2xl font-black">Misión</h3>
                <p className="mt-3 text-sm leading-7 text-white/76">
                  Brindar atención integral en salud con un enfoque personalizado, tecnología avanzada y calidez humana, logrando resultados reales en cada paciente desde la primera sesión.
                </p>
              </MotionItem>
              <MotionItem className="rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-brand-lilac/20">
                <Telescope aria-hidden="true" className="h-8 w-8 text-brand-blue" />
                <h3 className="mt-5 text-2xl font-black text-brand-ink">Visión</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Ser el centro de salud y rehabilitación de referencia en la región, reconocido por la excelencia en resultados, innovación tecnológica y trato humano excepcional.
                </p>
              </MotionItem>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[32px] bg-white p-6 shadow-sm ring-1 ring-brand-lilac/20 sm:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-blue">Valores</p>
              <h3 className="mt-2 text-2xl font-black text-brand-ink">La forma de atender también es parte del tratamiento</h3>
            </div>
            <Award aria-hidden="true" className="hidden h-12 w-12 text-brand-lilac md:block" />
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value) => (
              <div key={value} className="flex items-center gap-3 rounded-2xl bg-gradient-to-br from-brand-mist to-brand-sky/20 px-4 py-4 text-sm font-black text-brand-deep">
                <HeartHandshake aria-hidden="true" className="h-5 w-5 shrink-0 text-brand-blue" />
                {value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
