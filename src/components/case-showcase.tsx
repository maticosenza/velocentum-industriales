import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  ClipboardList,
  Factory,
  FileText,
  Gauge,
  Search,
  Settings2,
} from "lucide-react";

type ShowcaseProps = {
  kind: "greenpac" | "patagonia";
  accent: "orange" | "violet";
};

const greenpacViews = [
  {
    kicker: "01 · Catálogo técnico",
    title: "Cada consulta empieza con contexto.",
    text: "La maquinaria y los repuestos se presentan por familia, aplicación y especificaciones para que el comprador identifique mejor lo que necesita.",
    view: "catalog",
  },
  {
    kicker: "02 · Gestión comercial",
    title: "Del producto consultado a la cotización.",
    text: "El equipo recibe la oportunidad vinculada al producto, asigna un responsable y conserva el estado y el historial en una sola vista.",
    view: "pipeline",
  },
] as const;

const patagoniaViews = [
  {
    kicker: "01 · Capacidades",
    title: "La experiencia técnica se vuelve visible.",
    text: "El sitio ordena equipos, procesos y antecedentes para que el comprador valide capacidades antes de iniciar una conversación.",
    view: "capabilities",
  },
  {
    kicker: "02 · Pedido técnico",
    title: "El requerimiento llega mejor preparado.",
    text: "La solicitud reúne alcance, documentación y datos de contacto para darle al equipo una base concreta desde el primer intercambio.",
    view: "request",
  },
] as const;

export function CaseShowcase({ kind, accent }: ShowcaseProps) {
  const views = kind === "greenpac" ? greenpacViews : patagoniaViews;
  const accentText = accent === "orange" ? "text-orange" : "text-violet";

  return (
    <section className="bg-paper pb-20 sm:pb-24">
      <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-8">
        <div className="border-t border-black/10 pt-20 sm:pt-24">
          <div className="max-w-3xl">
            <p className="eyebrow">El sistema en funcionamiento</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] text-ink sm:text-5xl">
              Del sitio público a la gestión de la oportunidad.
            </h2>
            <p className="mt-5 max-w-2xl text-steel">
              Recreamos las vistas principales para mostrar con claridad qué función cumple cada
              parte, sin exponer información comercial del cliente.
            </p>
          </div>

          <div className="mt-14 space-y-16 sm:space-y-20">
            {views.map((item, index) => (
              <article
                key={item.view}
                className="grid items-center gap-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-12"
              >
                <div className={index % 2 ? "lg:order-2" : ""}>
                  <p
                    className={`font-mono text-[10px] font-bold uppercase tracking-[.18em] ${accentText}`}
                  >
                    {item.kicker}
                  </p>
                  <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-steel sm:text-base">
                    {item.text}
                  </p>
                </div>
                <div className={index % 2 ? "lg:order-1" : ""}>
                  <ProductFrame accent={accent}>
                    {item.view === "catalog" && <CatalogView />}
                    {item.view === "pipeline" && <PipelineView />}
                    {item.view === "capabilities" && <CapabilitiesView />}
                    {item.view === "request" && <RequestView />}
                  </ProductFrame>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductFrame({
  accent,
  children,
}: {
  accent: "orange" | "violet";
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-black/10 bg-white shadow-[0_24px_60px_rgba(25,18,39,0.12)]">
      <div className="flex items-center justify-between border-b border-black/8 bg-[#f2f0eb] px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-black/15" />
          <span className="h-2 w-2 rounded-full bg-black/15" />
          <span className="h-2 w-2 rounded-full bg-black/15" />
        </div>
        <span className="font-mono text-[7px] font-semibold uppercase tracking-[.16em] text-steel">
          Representación del sistema · datos ilustrativos
        </span>
        <span
          className={`h-2 w-2 rounded-full ${accent === "orange" ? "bg-orange" : "bg-violet"}`}
        />
      </div>
      <div className="min-h-[330px] p-4 sm:p-6">{children}</div>
    </div>
  );
}

function CatalogView() {
  const products = ["Tolva autodescargable", "Acoplado multipropósito", "Repuestos originales"];
  return (
    <div>
      <div className="flex items-center justify-between border-b border-black/8 pb-4">
        <div className="flex items-center gap-2 text-xs font-extrabold">
          <Boxes className="h-4 w-4 text-orange" /> Catálogo Greenpac
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-[#f3f1ed] px-3 py-2 text-[8px] text-steel">
          <Search className="h-3 w-3" /> Buscar maquinaria
        </div>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {products.map((product, index) => (
          <div key={product} className="overflow-hidden rounded-xl border border-black/8">
            <div
              className={`grid h-20 place-items-center ${index === 1 ? "bg-orange/10" : "bg-[#ece9e2]"}`}
            >
              <Settings2 className="h-8 w-8 text-ink/30" />
            </div>
            <div className="p-3">
              <p className="text-[9px] font-extrabold leading-tight">{product}</p>
              <p className="mt-2 text-[7px] leading-relaxed text-steel">
                Ficha, aplicaciones y especificaciones.
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-[7px] font-bold text-orange">
                Ver equipo <ArrowRight className="h-2.5 w-2.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {["Aplicación", "Capacidad", "Zona", "Disponibilidad"].map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[#f3f1ed] px-2.5 py-1.5 text-[7px] font-semibold text-steel"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function PipelineView() {
  const rows = [
    ["Productor · Santa Fe", "Tolva 24 Tn", "Nueva consulta"],
    ["Distribuidor · Córdoba", "Kit de repuestos", "En preparación"],
    ["Contratista · Buenos Aires", "Equipo a medida", "Propuesta enviada"],
  ];
  return (
    <div>
      <div className="grid grid-cols-3 gap-2">
        {[
          ["18", "Consultas"],
          ["7", "Cotizaciones"],
          ["4", "Seguimientos"],
        ].map(([value, label]) => (
          <div key={label} className="rounded-xl bg-[#f3f1ed] p-3">
            <p className="text-xl font-extrabold">{value}</p>
            <p className="text-[7px] uppercase tracking-wider text-steel">{label}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 overflow-hidden rounded-xl border border-black/8">
        <div className="grid grid-cols-[1.15fr_.9fr_auto] gap-3 bg-[#f3f1ed] px-3 py-2 text-[7px] font-bold uppercase tracking-wider text-steel">
          <span>Contacto</span>
          <span>Interés</span>
          <span>Estado</span>
        </div>
        {rows.map(([contact, interest, status], index) => (
          <div
            key={contact}
            className="grid grid-cols-[1.15fr_.9fr_auto] items-center gap-3 border-t border-black/7 px-3 py-3 text-[8px]"
          >
            <span className="font-bold">{contact}</span>
            <span className="text-steel">{interest}</span>
            <span
              className={`rounded-full px-2 py-1 text-[6px] font-bold ${index === 0 ? "bg-orange-soft text-orange" : "bg-violet-soft text-violet"}`}
            >
              {status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CapabilitiesView() {
  const items = [
    [
      Factory,
      "Diseño y fabricación",
      "Equipos desarrollados según el requerimiento de cada proyecto.",
    ],
    [Gauge, "Ingeniería aplicada", "Capacidad, condiciones de operación y documentación técnica."],
    [
      CheckCircle2,
      "Experiencia comprobable",
      "Procesos, trayectoria y trabajos que respaldan la propuesta.",
    ],
  ] as const;
  return (
    <div>
      <div className="rounded-xl bg-[#171321] p-5 text-white">
        <p className="font-mono text-[7px] uppercase tracking-[.18em] text-violet">
          Capacidades industriales
        </p>
        <p className="mt-2 max-w-sm text-xl font-extrabold leading-tight">
          Equipos desarrollados para cada condición de proceso.
        </p>
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        {items.map(([Icon, title, text]) => (
          <div key={title} className="rounded-xl border border-black/8 p-3">
            <Icon className="h-4 w-4 text-violet" />
            <p className="mt-4 text-[9px] font-extrabold">{title}</p>
            <p className="mt-2 text-[7px] leading-relaxed text-steel">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function RequestView() {
  return (
    <div className="grid gap-4 sm:grid-cols-[.85fr_1.15fr]">
      <div className="rounded-xl bg-[#171321] p-5 text-white">
        <ClipboardList className="h-6 w-6 text-violet" />
        <p className="mt-5 text-lg font-extrabold">Solicitud técnica</p>
        <p className="mt-2 text-[8px] leading-relaxed text-white/55">
          La información indispensable para evaluar el proyecto antes de cotizar.
        </p>
        <div className="mt-5 space-y-2">
          {["Aplicación", "Condición de trabajo", "Documentación", "Plazo estimado"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-[8px] text-white/70">
              <CheckCircle2 className="h-3 w-3 text-violet" />
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-black/8 p-4">
        <div className="flex items-center gap-2 text-[9px] font-extrabold">
          <FileText className="h-4 w-4 text-violet" /> Nuevo requerimiento
        </div>
        <div className="mt-4 grid gap-3">
          {["Empresa y contacto", "Tipo de equipo o servicio", "Descripción del proyecto"].map(
            (label, index) => (
              <div key={label}>
                <p className="mb-1.5 text-[7px] font-semibold text-steel">{label}</p>
                <div
                  className={`${index === 2 ? "h-12" : "h-8"} rounded-lg border border-black/10 bg-[#faf9f6]`}
                />
              </div>
            ),
          )}
          <div className="flex items-center justify-between">
            <span className="text-[7px] text-steel">Adjuntar documentación</span>
            <span className="rounded-full bg-violet px-3 py-2 text-[7px] font-bold text-white">
              Enviar solicitud
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
