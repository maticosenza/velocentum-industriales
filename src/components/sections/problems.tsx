import { AlertTriangle, TrendingDown, ShieldAlert } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Procesos fragmentados",
    description:
      "Sistemas aislados que generan pérdida de información y decisiones lentas en planta.",
  },
  {
    icon: ShieldAlert,
    title: "Riesgos operativos",
    description:
      "Falta de visibilidad en tiempo real que expone a la operación a incidentes prevenibles.",
  },
  {
    icon: TrendingDown,
    title: "Rentabilidad afectada",
    description:
      "Ineficiencias ocultas que aumentan costos y reducen la competitividad industrial.",
  },
];

export function Problems() {
  return (
    <section className="section-padding bg-background">
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Problemas industriales que resolvemos
          </h2>
          <p className="mt-4 text-steel">
            Muchas plantas industriales enfrentan los mismos obstáculos. Trabajamos sobre ellos con
            un enfoque práctico y medible.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="rounded-xl border border-border bg-paper p-6 transition-shadow hover:shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-soft text-orange">
                <problem.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink">{problem.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
