import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const cases = [
  {
    client: "Greenpac",
    industry: "Maquinaria agrícola",
    challenge:
      "Presentar maquinaria, repuestos y alcance comercial sin que cada consulta comience desde cero.",
    implementation:
      "Un catálogo digital conectado con una gestión centralizada de maquinaria, consultas, cotizaciones, clientes, zonas y tiendas.",
    enables:
      "El equipo puede recibir cada pedido con contexto y seguirlo desde una misma operación.",
    flow: ["Catálogo", "Consulta", "Cotización", "Seguimiento"],
    href: "/casos/greenpac",
    accent: "orange",
  },
  {
    client: "Patagonia Vessels",
    industry: "Equipos industriales",
    challenge:
      "Comunicar capacidad técnica, experiencia y fabricación por proyecto antes del primer contacto.",
    implementation:
      "Una presencia que ordena empresa, capacidades, trayectoria y clientes alrededor del pedido de presupuesto.",
    enables:
      "El comprador entiende qué puede fabricar la empresa y cómo trabaja antes de enviar su requerimiento.",
    flow: ["Capacidades", "Proceso", "Requerimiento", "Presupuesto"],
    href: "/casos/patagonia-vessels",
    accent: "violet",
  },
] as const;

export function Cases() {
  return (
    <section id="casos" className="bg-paper py-20 sm:py-24">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow">Aplicado a industrias reales</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] text-ink sm:text-5xl">
            Dos recorridos comerciales. Un sistema adaptado a cada empresa.
          </h2>
          <p className="mt-5 text-steel">
            Maquinaria de catálogo o fabricación técnica por proyecto: mostramos qué cambia en la
            solución sin convertir los casos en una lista de servicios.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {cases.map((item) => {
            const isOrange = item.accent === "orange";

            return (
              <article
                key={item.client}
                className="group relative overflow-hidden rounded-2xl border border-black/10 bg-[#f4f2ee] p-7 sm:p-9"
              >
                <div
                  className={`absolute right-0 top-0 h-40 w-40 rounded-bl-full ${isOrange ? "bg-orange/10" : "bg-violet/10"}`}
                />

                <div className="relative flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${isOrange ? "bg-orange" : "bg-violet"}`}
                    />
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[.16em] text-steel">
                      {item.industry}
                    </span>
                  </div>
                  <span className="rounded-full border border-black/10 bg-white/80 px-3 py-1 font-mono text-[8px] font-semibold uppercase tracking-[.14em] text-steel">
                    Implementación real
                  </span>
                </div>

                <h3 className="relative mt-10 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                  {item.client}
                </h3>

                <dl className="relative mt-8 space-y-6">
                  <div>
                    <dt className="font-mono text-[9px] font-semibold uppercase tracking-[.16em] text-steel">
                      El desafío
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-ink">{item.challenge}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[9px] font-semibold uppercase tracking-[.16em] text-steel">
                      Sistema aplicado
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-ink">
                      {item.implementation}
                    </dd>
                  </div>
                </dl>

                <div className="relative mt-7 rounded-xl border border-black/8 bg-white p-4">
                  <p className="font-mono text-[8px] font-semibold uppercase tracking-[.16em] text-steel">
                    Recorrido conectado
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {item.flow.map((step, index) => (
                      <div
                        key={step}
                        className="flex items-center gap-2 rounded-lg bg-[#f4f2ee] px-2.5 py-2"
                      >
                        <span
                          className={`font-mono text-[8px] font-bold ${isOrange ? "text-orange" : "text-violet"}`}
                        >
                          0{index + 1}
                        </span>
                        <span className="text-[9px] font-semibold text-ink">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative mt-6 flex items-start gap-3 border-t border-black/8 pt-6">
                  <CheckCircle2
                    className={`mt-0.5 h-4 w-4 shrink-0 ${isOrange ? "text-orange" : "text-violet"}`}
                  />
                  <p className="text-sm leading-relaxed text-steel">{item.enables}</p>
                </div>

                <a
                  href={item.href}
                  className="relative mt-7 inline-flex items-center gap-2 text-sm font-bold text-ink"
                >
                  Ver caso
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
