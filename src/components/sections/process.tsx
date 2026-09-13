const steps = [
  {
    number: "01",
    title: "Relevamos",
    description: "Productos, compradores, proceso comercial y presencia actual.",
  },
  {
    number: "02",
    title: "Priorizamos",
    description: "Definimos qué necesita resolverse primero y dónde está la oportunidad.",
  },
  {
    number: "03",
    title: "Diseñamos",
    description: "Construimos la presencia, el contenido y el sistema comercial.",
  },
  {
    number: "04",
    title: "Activamos",
    description: "Conectamos canales, medición y seguimiento para empezar a operar.",
  },
];

export function Process() {
  return (
    <section id="proceso" className="border-y border-black/10 bg-[#eeece7] py-20 sm:py-24">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow">Cómo trabajamos</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] text-ink sm:text-5xl">
            Un sistema construido alrededor de cómo vende tu empresa.
          </h2>
          <p className="mt-4 text-steel">
            No forzamos una fórmula estándar: ordenamos prioridades y construimos por etapas.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-black/8 bg-paper p-7"
            >
              <span className="font-mono text-xs font-bold text-violet">{step.number}</span>
              <h3 className="mt-12 text-xl font-bold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-steel">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
