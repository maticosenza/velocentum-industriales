const cases = [
  {
    client: "Greenpac",
    industry: "Maquinaria agrícola",
    summary: "Catálogo, captación de consultas y sistema de cotizaciones.",
    detail:
      "La web presenta equipos y especificaciones, permite iniciar una cotización y ordena el contacto comercial para responder con más contexto.",
    tags: ["Catálogo", "Cotizaciones", "Clientes"],
    href: "https://greenpac.com.ar",
    accent: "orange",
  },
  {
    client: "Patagonia Vessels",
    industry: "Equipos industriales",
    summary: "Autoridad técnica, comunicación de procesos y gestión de presupuestos.",
    detail:
      "La experiencia, capacidades, normas y etapas de fabricación quedan claras antes de la consulta y preparan mejor cada pedido de presupuesto.",
    tags: ["Procesos", "Autoridad", "Presupuestos"],
    href: "https://patagoniavessels.com.ar",
    accent: "violet",
  },
];

export function Cases() {
  return (
    <section id="casos" className="bg-paper py-20 sm:py-24">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow">Aplicado a industrias reales</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] text-ink sm:text-5xl">
            Dos formas de vender. Un sistema adaptado a cada empresa.
          </h2>
          <p className="mt-5 text-steel">
            Maquinaria de catálogo o fabricación técnica por proyecto: la arquitectura cambia, el
            objetivo comercial no.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {cases.map((item) => (
            <div
              key={item.client}
              className="group relative flex min-h-[390px] flex-col justify-between overflow-hidden rounded-2xl border border-black/10 bg-[#f4f2ee] p-7 sm:p-9"
            >
              <div>
                <div
                  className={`absolute right-0 top-0 h-36 w-36 rounded-bl-full ${item.accent === "orange" ? "bg-orange/10" : "bg-violet/10"}`}
                />
                <div className="relative flex items-center gap-3">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${item.accent === "orange" ? "bg-orange" : "bg-violet"}`}
                  />
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[.16em] text-steel">
                    {item.industry}
                  </span>
                </div>
                <h3 className="relative mt-12 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                  {item.client}
                </h3>
                <p className="relative mt-4 max-w-md text-xl font-bold leading-snug text-ink">
                  {item.summary}
                </p>
                <p className="relative mt-4 max-w-md text-sm leading-relaxed text-steel">
                  {item.detail}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/10 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="relative mt-8 inline-flex items-center gap-2 text-sm font-bold text-ink"
              >
                Ver sitio público{" "}
                <span className="transition-transform group-hover:translate-x-1">↗</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
