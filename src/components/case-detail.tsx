import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { CaseHeroVisual, CaseShowcase } from "@/components/case-showcase";

export type IndustrialCase = {
  name: string;
  category: string;
  eyebrow: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  journeyTitle: string;
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
        <section className="relative overflow-hidden bg-ink pb-16 pt-28 text-white sm:pb-20 sm:pt-32 lg:min-h-[720px] lg:pb-24">
          <div className="case-dark-grid absolute inset-0 opacity-80" />
          <div
            className={`absolute -left-32 top-12 h-96 w-96 rounded-full blur-[110px] ${isOrange ? "bg-orange/20" : "bg-violet/25"}`}
          />
          <div
            className={`absolute -right-24 bottom-0 h-80 w-80 rounded-full blur-[120px] ${isOrange ? "bg-orange/15" : "bg-violet/20"}`}
          />
          <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-8">
            <a
              href="/#casos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/55 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> Volver a casos
            </a>
            <div className="mt-10 grid items-center gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
              <div>
                <p
                  className={`font-mono text-[10px] font-bold uppercase tracking-[.2em] ${accentText}`}
                >
                  {caseStudy.eyebrow}
                </p>
                <h1 className="mt-5 font-display text-6xl uppercase leading-[0.9] tracking-[-0.035em] sm:text-7xl lg:text-[6.4rem]">
                  {caseStudy.name}
                </h1>
                <p className="mt-7 max-w-xl text-base leading-relaxed text-white/62 sm:text-lg">
                  {caseStudy.summary}
                </p>
                <a
                  href="#sistema-del-caso"
                  className={`mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white ${accentBg}`}
                >
                  Ver el sistema <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <CaseHeroVisual kind={caseStudy.showcase} accent={caseStudy.accent} />
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
            <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-14">
              <div className="max-w-md">
                <p className="eyebrow">El punto de partida</p>
                <h2 className="mt-4 text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] text-ink sm:text-5xl">
                  No era solo una web. Era ordenar cómo se presenta y cómo vende.
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <article className="rounded-[1.75rem] border border-black/10 bg-white p-7 sm:p-8">
                  <p
                    className={`font-mono text-[10px] font-bold uppercase tracking-[.18em] ${accentText}`}
                  >
                    01 · Desafío
                  </p>
                  <p className="mt-8 text-base leading-relaxed text-ink">{caseStudy.challenge}</p>
                </article>
                <article className="rounded-[1.75rem] bg-ink p-7 text-white sm:p-8">
                  <p
                    className={`font-mono text-[10px] font-bold uppercase tracking-[.18em] ${accentText}`}
                  >
                    02 · Sistema construido
                  </p>
                  <p className="mt-8 text-base leading-relaxed text-white/72">
                    {caseStudy.solution}
                  </p>
                </article>
                <article className={`rounded-[1.75rem] p-7 sm:col-span-2 sm:p-8 ${accentSoft}`}>
                  <p
                    className={`font-mono text-[10px] font-bold uppercase tracking-[.18em] ${accentText}`}
                  >
                    03 · Impacto operativo
                  </p>
                  <p className="mt-5 max-w-3xl text-xl font-bold leading-snug tracking-[-0.02em] text-ink sm:text-2xl">
                    {caseStudy.outcome}
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <CaseShowcase kind={caseStudy.showcase} accent={caseStudy.accent} />

        <section className="bg-[#f1efe9] py-20 sm:py-28">
          <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
            <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-14">
              <div className="max-w-md">
                <p className="eyebrow">Recorrido conectado</p>
                <h2 className="mt-4 text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] text-ink sm:text-5xl">
                  {caseStudy.journeyTitle}
                </h2>
              </div>
              <div className="relative">
                <div className="absolute bottom-8 left-[15px] top-8 w-px bg-black/10 sm:left-[19px]" />
                <div className="space-y-3">
                  {caseStudy.flow.map((step, index) => (
                    <article
                      key={step.title}
                      className="relative grid grid-cols-[32px_1fr] gap-4 rounded-2xl bg-white p-5 sm:grid-cols-[40px_1fr] sm:gap-5 sm:p-6"
                    >
                      <span
                        className={`relative z-10 grid h-8 w-8 place-items-center rounded-full font-mono text-[9px] font-bold text-white sm:h-10 sm:w-10 ${accentBg}`}
                      >
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className="text-lg font-extrabold text-ink">{step.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-steel">{step.text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto grid w-full max-w-[1200px] gap-5 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr]">
            <div className={`rounded-[2rem] p-8 sm:p-10 ${accentSoft}`}>
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
            <div className="relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-[2rem] bg-ink p-8 text-white sm:p-10">
              <div
                className={`absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl ${isOrange ? "bg-orange/30" : "bg-violet/30"}`}
              />
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[.18em] text-white/45">
                  El caso en funcionamiento
                </p>
                <h2 className="relative mt-5 max-w-md text-4xl font-extrabold leading-[1.02] tracking-[-0.04em]">
                  Conocé la presencia digital que abre el recorrido comercial.
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
