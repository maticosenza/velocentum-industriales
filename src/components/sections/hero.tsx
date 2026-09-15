import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Sparkles } from "lucide-react";
import { IndustrialDashboard } from "@/components/industrial-dashboard";
import { trackMetaContact } from "@/lib/meta-pixel";

const contactHref =
  "https://wa.me/5491135810100?text=Hola%20Velocentum%2C%20quiero%20conversar%20sobre%20mi%20empresa%20y%20el%20Sistema%20Industrial.";

export function Hero() {
  return (
    <section
      id="inicio"
      className="industrial-night relative overflow-hidden pb-16 pt-28 text-white sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36"
    >
      <div className="hero-grid absolute inset-0 opacity-30" />
      <div className="absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-violet/15 blur-3xl" />
      <div className="absolute -bottom-48 right-[-8rem] h-[30rem] w-[30rem] rounded-full bg-orange/10 blur-3xl" />
      <div className="relative mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <div className="grid min-w-0 gap-14 lg:grid-cols-[1.06fr_.94fr] lg:items-start">
          <div className="min-w-0 max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/7 px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-white/75">
              <Sparkles className="h-3 w-3 text-orange" /> Sistema Industrial por Velocentum
            </span>
            <h1 className="mt-7 max-w-full font-display text-[clamp(2rem,10vw,4.25rem)] uppercase leading-[.91] tracking-[-0.04em] sm:text-[4.25rem] lg:text-[4.4rem]">
              <span className="lg:hidden">
                <span className="block whitespace-nowrap">Tu capacidad</span>
                <span className="block whitespace-nowrap">ya existe.</span>
                <span className="block whitespace-nowrap text-violet">Hagamos que el</span>
                <span className="block whitespace-nowrap text-violet">mercado la encuentre.</span>
              </span>
              <span className="hidden lg:block">
                <span className="block whitespace-nowrap">Tu capacidad ya existe.</span>
                <span className="block whitespace-nowrap text-violet">Hagamos que el</span>
                <span className="block whitespace-nowrap text-violet">mercado la encuentre.</span>
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/68 sm:text-lg">
              Diseñamos presencia, contenido, visibilidad en Google y sistemas de cotización para
              que las empresas industriales generen y ordenen nuevas oportunidades comerciales.
            </p>
            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-violet px-7 text-white shadow-none hover:bg-violet/90"
              >
                <a
                  href={contactHref}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackMetaContact("hero")}
                >
                  Conversar sobre mi empresa <ArrowRight />
                </a>
              </Button>
              <a
                href="#sistema"
                className="inline-flex h-12 items-center gap-2 px-2 text-sm font-semibold text-white/75 transition hover:text-white"
              >
                Ver cómo funciona <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/12 pt-6 text-[11px] font-semibold uppercase tracking-[0.13em] text-white/45">
              <span>Presencia digital</span>
              <span>Contenido técnico</span>
              <span>Gestión comercial</span>
            </div>
          </div>

          <div className="relative mx-auto min-w-0 w-full max-w-[560px] lg:ml-auto lg:mt-10">
            <div className="absolute -inset-4 rounded-[2rem] border border-white/8 bg-white/3" />
            <div className="sm:hidden">
              <IndustrialDashboard compact />
            </div>
            <div className="hidden sm:block">
              <IndustrialDashboard />
            </div>
            <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl border border-white/12 bg-[#211b35]/95 px-4 py-3 shadow-xl backdrop-blur sm:-left-8">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-orange text-white">
                <Search className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[9px] uppercase tracking-[.16em] text-white/50">
                  Nueva oportunidad
                </p>
                <p className="mt-0.5 text-xs font-bold text-white">Llegó desde Google</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
