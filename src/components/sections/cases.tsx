const cases = [
  {
    client: "Greenpac",
    industry: "Industria (placeholder)",
    summary:
      "Rediseño del flujo productivo para mejorar la coordinación entre áreas y reducir tiempos de respuesta.",
    tags: ["Procesos", "Visualización"],
  },
  {
    client: "Patagonia Vessels",
    industry: "Industria (placeholder)",
    summary:
      "Implementación de un sistema de control y seguimiento para operaciones con mayor trazabilidad.",
    tags: ["Control", "Trazabilidad"],
  },
];

export function Cases() {
  return (
    <section id="casos" className="section-padding bg-background">
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Casos</h2>
          <p className="mt-4 text-steel">
            Dos ejemplos de empresas que confiaron en Velocentum para transformar su operación.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {cases.map((item) => (
            <div
              key={item.client}
              className="flex flex-col justify-between rounded-2xl border border-border bg-paper p-8"
            >
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold text-ink">{item.client}</h3>
                  <span className="text-sm text-steel">— {item.industry}</span>
                </div>
                <p className="mt-4 text-steel">{item.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-steel-light px-3 py-1 text-xs font-medium text-ink"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
