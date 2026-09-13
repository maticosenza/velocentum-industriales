import { Cog, BarChart3, Users, Factory } from "lucide-react";

const services = [
  {
    icon: Factory,
    title: "Ingeniería de procesos",
    description:
      "Rediseño y optimización de flujos productivos para reducir desperdicios y tiempos muertos.",
  },
  {
    icon: Cog,
    title: "Automatización industrial",
    description:
      "Selección e integración de tecnología que se adapta a la realidad de cada planta.",
  },
  {
    icon: BarChart3,
    title: "Control y visualización",
    description:
      "Paneles de gestión que centralizan indicadores clave para decisiones más rápidas.",
  },
  {
    icon: Users,
    title: "Gestión del cambio",
    description:
      "Acompañamiento a los equipos para que la transformación industrial se sostenga en el tiempo.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="section-padding bg-background">
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Servicios</h2>
          <p className="mt-4 text-steel">
            Cada servicio se combina según el contexto de la empresa para formar un sistema
            completo.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-border bg-paper p-6 transition-shadow hover:shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-soft text-violet">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
