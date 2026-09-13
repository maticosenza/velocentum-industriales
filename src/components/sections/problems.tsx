import { Inbox, SearchX, ScanText } from "lucide-react";

const problems = [
  {
    icon: ScanText,
    title: "No se entiende todo lo que pueden fabricar",
    description:
      "Capacidades, procesos y experiencia quedan escondidos en una web vieja o en presentaciones dispersas.",
  },
  {
    icon: SearchX,
    title: "Los compradores no los encuentran",
    description:
      "La empresa no aparece cuando alguien busca un producto, un proveedor o una capacidad específica.",
  },
  {
    icon: Inbox,
    title: "Las cotizaciones quedan repartidas",
    description:
      "Emails, WhatsApp y planillas dificultan responder, asignar responsables y hacer seguimiento.",
  },
];

export function Problems() {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <div className="max-w-4xl">
          <p className="eyebrow">El problema comercial</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] text-ink sm:text-5xl">
            Una gran capacidad industrial puede quedar invisible detrás de una presencia débil.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-steel sm:text-lg">
            El mercado primero necesita encontrar, entender y confiar. Después llega la oportunidad
            de cotizar.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-2xl border border-black/10 lg:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="border-b border-black/10 bg-[#f7f6f3] p-7 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-soft text-orange">
                <problem.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-lg font-bold leading-snug text-ink">{problem.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-steel">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
