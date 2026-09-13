import { Camera, FileSearch, MonitorSmartphone, Search } from "lucide-react";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Presencia industrial",
    description:
      "Una web que explica productos, capacidades, aplicaciones, certificaciones, experiencia y formas de trabajo.",
  },
  {
    icon: Camera,
    title: "Contenido técnico",
    description:
      "Fotografía, video y piezas que muestran fabricación, maquinaria, equipo, trabajos terminados e historia.",
  },
  {
    icon: Search,
    title: "Visibilidad en Google",
    description:
      "Posicionamiento y publicidad para aparecer cuando compradores reales buscan soluciones específicas.",
  },
  {
    icon: FileSearch,
    title: "Cotizaciones y seguimiento",
    description:
      "Consultas, estados, clientes, responsables e historial para que ninguna oportunidad quede sin respuesta.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="bg-ink py-20 text-white sm:py-24">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow text-orange">Un sistema, cuatro partes</p>
          <h2 className="mt-4 font-display text-5xl uppercase leading-[.95] tracking-tight sm:text-6xl">
            Mostramos. Atraemos.
            <br />
            <span className="text-violet">Convertimos. Ordenamos.</span>
          </h2>
          <p className="mt-5 max-w-xl text-white/60">
            No son servicios aislados. Cada parte alimenta a la siguiente para convertir capacidad
            productiva en oportunidades comerciales.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/12 bg-white/12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-ink p-7 transition-colors hover:bg-white/5"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/8 text-violet">
                  <service.icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-[10px] tracking-widest text-white/25">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-8 text-lg font-bold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/52">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
