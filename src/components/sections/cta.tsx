import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { trackMetaContact } from "@/lib/meta-pixel";

const contactHref =
  "https://wa.me/5491135810100?text=Hola%20Velocentum%2C%20quiero%20solicitar%20una%20propuesta%20para%20mi%20empresa%20industrial.";

export function Cta() {
  return (
    <section className="relative overflow-hidden bg-violet py-20 text-white sm:py-24">
      <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-orange/30 blur-3xl" />
      <div className="relative mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[.2em] text-white/65">
            El próximo paso
          </p>
          <h2 className="mt-5 font-display text-5xl uppercase leading-[.94] sm:text-7xl">
            Convirtamos tu capacidad industrial en una presencia que genere oportunidades.
          </h2>
          <p className="mt-4 text-white/70">
            Contanos qué fabrica tu empresa y prepararemos una propuesta adaptada a su proceso
            comercial.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-white px-7 text-violet shadow-none hover:bg-white/90"
            >
              <a
                href={contactHref}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackMetaContact("final_cta")}
              >
                Solicitar una propuesta <ArrowRight />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
