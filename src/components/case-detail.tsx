import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { CaseShowcase } from "@/components/case-showcase";

export type IndustrialCase = {
  name: string;
  category: string;
  eyebrow: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  capabilities: string[];
  flow: { title: string; text: string }[];
  publicUrl: string;
  publicLabel: string;
  accent: "orange" | "violet";
  showcase: "greenpac" | "patagonia";
};

export function CaseDetail({ caseStudy }: { caseStudy: IndustrialCase }) {
  const isOrange = caseStudy.accent === "orange";
  const accentText = isOrange ? "text-orange" : "text-violet";
  const accentBg = isOrange ? "bg-orange" : "bg-violet";
  const accentSoft = isOrange ? "bg-orange-soft" : "bg-violet-soft";

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Navbar basePath="/" />
      <main className="flex-1">
        <section className="industrial-night relative overflow-hidden pb-20 pt-32 text-white sm:pb-28 sm:pt-36">
          <div className="hero-grid absolute inset-0 opacity-50" />
          <div className="relative mx-auto w-full max-w-[1100px] px-5 sm:px-8">
            <a
              href="/#casos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> Volver a casos
            </a>
            <div className="mt-12 max-w-4xl">
              <p
                className={`font-mono text-[10px] font-bold uppercase tracking-[.2em] ${accentText}`}
              >
                {caseStudy.eyebrow}
              </p>
              <h1 className="mt-5 font-display text-6xl uppercase leading-[0.92] tracking-[-0.035em] sm:text-7xl lg:text-8xl">
                {caseStudy.name}
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/65 sm:text-xl">
                {caseStudy.summary}
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto grid w-full max-w-[1100px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="eyebrow">El punto de partida</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] text-ink">
                Un sistema pensado para su forma de vender.
              </h2>
            </div>
            <dl className="divide-y divide-black/10 border-y border-black/10">
              {[
                ["Desafío", caseStudy.challenge],
                ["Solución", caseStudy.solution],
                ["Qué permite", caseStudy.outcome],
              ].map(([label, text]) => (
                <div key={label} className="grid gap-2 py-6 sm:grid-cols-[130px_1fr] sm:gap-6">
                  <dt className="font-mono text-[9px] font-semibold uppercase tracking-[.18em] text-steel">
                    {label}
                  </dt>
                  <dd className="text-base leading-relaxed text-ink">{text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <CaseShowcase kind={caseStudy.showcase} accent={caseStudy.accent} />

        <section className="bg-[#f1efe9] py-20 sm:py-24">
          <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-8">
            <div className="max-w-3xl">
              <p className="eyebrow">Recorrido conectado</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] text-ink sm:text-5xl">
                De la información al seguimiento comercial.
              </h2>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {caseStudy.flow.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-2xl border border-black/10 bg-white p-6"
                >
                  <span className={`font-mono text-xs font-bold ${accentText}`}>0{index + 1}</span>
                  <h3 className="mt-8 text-lg font-extrabold text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto grid w-full max-w-[1100px] gap-8 px-5 sm:px-8 lg:grid-cols-2">
            <div className={`rounded-2xl p-8 sm:p-10 ${accentSoft}`}>
              <p
                className={`font-mono text-[10px] font-bold uppercase tracking-[.18em] ${accentText}`}
              >
                Componentes del caso
              </p>
              <ul className="mt-8 space-y-4">
                {caseStudy.capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="flex items-start gap-3 text-sm leading-relaxed text-ink"
                  >
                    <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${accentText}`} />
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-between rounded-2xl bg-ink p-8 text-white sm:p-10">
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[.18em] text-white/45">
                  Implementación pública
                </p>
                <h2 className="mt-5 text-3xl font-extrabold tracking-tight">
                  Conocé la presencia digital en funcionamiento.
                </h2>
              </div>
              <a
                href={caseStudy.publicUrl}
                target="_blank"
                rel="noreferrer"
                className={`mt-10 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white ${accentBg}`}
              >
                {caseStudy.publicLabel}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer basePath="/" />
    </div>
  );
}
