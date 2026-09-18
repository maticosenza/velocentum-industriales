import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OpportunityDetail } from "@/components/industrial-dashboard";
import { trackMetaContact } from "@/lib/meta-pixel";

const features = [
  "Solicitudes adaptadas a cada producto o servicio",
  "Estados comerciales, clientes y contactos centralizados",
  "Responsables, historial y seguimiento de cada oportunidad",
  "Recordatorios y emails vinculados a las cotizaciones",
];

const contactHref =
  "https://wa.me/5491135810100?text=Hola%20Velocentum%2C%20quiero%20solicitar%20una%20propuesta%20para%20mi%20empresa%20industrial.";

export function System() {
  return (
    <section id="sistema" className="bg-[#eeece7] py-20 sm:py-24">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div className="hidden lg:order-1 lg:block">
            <OpportunityDetail />
          </div>

          <div className="lg:order-2">
            <p className="eyebrow">Después del clic</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] text-ink sm:text-5xl">
              Lo que pasa después del clic también forma parte del sistema.
            </h2>
            <p className="mt-4 text-steel">
              La presencia genera interés. El sistema comercial lo convierte en una consulta
              ordenada, medible y lista para trabajar.
            </p>

            <div className="mt-8 lg:hidden">
              <OpportunityDetail compact />
            </div>

            <ul className="mt-8 space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-violet" />
                  <span className="text-ink">{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              className="mt-8 h-11 rounded-full bg-violet px-6 text-white shadow-none hover:bg-violet/90"
            >
              <a
                href={contactHref}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackMetaContact("system")}
              >
                Solicitar propuesta <ArrowRight />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
