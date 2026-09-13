import { CheckCircle2 } from "lucide-react";

const features = [
  "Diagnóstico operativo integral",
  "Diseño de arquitectura industrial",
  "Implementación de tecnología y equipos",
  "Capacitación y acompañamiento",
  "Métricas y mejora continua",
];

export function System() {
  return (
    <section id="sistema" className="section-padding border-y border-border bg-steel-light">
      <div className="container-tight">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-paper">
              <div className="flex h-full items-center justify-center text-steel">
                <div className="text-center">
                  <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-violet/10" />
                  <p className="text-sm font-medium">Diagrama del sistema industrial</p>
                  <p className="text-xs">(placeholder)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Un sistema industrial pensado para resultados
            </h2>
            <p className="mt-4 text-steel">
              Integramos personas, procesos y tecnología en un sistema coherente que mejora la
              eficiencia operativa de forma sostenida.
            </p>

            <ul className="mt-8 space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-violet" />
                  <span className="text-ink">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
