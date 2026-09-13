const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Conocer la operación actual, sus cuellos de botella y oportunidades.",
  },
  {
    number: "02",
    title: "Diseño",
    description: "Definir la arquitectura del sistema y el plan de implementación.",
  },
  {
    number: "03",
    title: "Implementación",
    description: "Desplegar tecnología, procesos y capacitaciones de forma coordinada.",
  },
  {
    number: "04",
    title: "Evolución",
    description: "Medir resultados y ajustar el sistema para mejorar continuamente.",
  },
];

export function Process() {
  return (
    <section id="proceso" className="border-y border-border bg-steel-light py-20">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Proceso de trabajo
          </h2>
          <p className="mt-4 text-steel">
            Un método claro que reduce riesgos y acelera el retorno de la inversión.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative rounded-xl bg-paper p-6">
              <span className="text-4xl font-bold text-violet/20">{step.number}</span>
              <h3 className="mt-2 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
