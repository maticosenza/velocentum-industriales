import { Camera, Mail, Megaphone, MonitorSmartphone } from "lucide-react";

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
    icon: Megaphone,
    title: "Google y Meta",
    description:
      "Posicionamiento y campañas para aparecer cuando compradores reales buscan o descubren soluciones específicas.",
  },
  {
    icon: Mail,
    title: "Seguimiento y email marketing",
    description:
      "Consultas, cotizaciones, automatizaciones y campañas para acompañar cada oportunidad hasta la decisión.",
  },
];

export function Services() {
  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-white py-20 text-ink sm:py-24"
    >
      <div className="paper-grid absolute inset-0 opacity-70" />
      <div className="absolute -left-48 -top-56 h-[30rem] w-[30rem] rounded-full bg-violet/8 blur-3xl" />
      <div className="absolute -bottom-56 right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-orange/7 blur-3xl" />
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow text-orange">Un sistema, cuatro partes</p>
          <h2 className="mt-4 font-display text-5xl uppercase leading-[.95] tracking-tight sm:text-6xl">
            Mostramos. Atraemos.
            <br />
            <span className="text-violet">Convertimos. Ordenamos.</span>
          </h2>
          <p className="mt-5 max-w-xl text-steel">
            No son servicios aislados. Cada parte alimenta a la siguiente para convertir capacidad
            productiva en oportunidades comerciales.
          </p>
        </div>

        <div className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="industrial-dark-card group relative min-h-[270px] overflow-hidden rounded-[1.75rem] p-7 transition-transform duration-300 hover:-translate-y-1"
            >
              <span
                className={`absolute -right-12 -top-12 h-32 w-32 rounded-full ${index % 2 === 0 ? "bg-violet/12" : "bg-orange/10"}`}
              />
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
