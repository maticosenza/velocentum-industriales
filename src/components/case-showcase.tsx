import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  ClipboardList,
  Factory,
  FileText,
  Gauge,
  Search,
  Send,
  Settings2,
  Users,
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
    title: "Cotizaciones, responsables y estados en una sola vista.",
    text: "El panel centraliza la operación y permite que administradores, vendedores y empleados trabajen sobre cada oportunidad con roles definidos.",
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
    kicker: "02 · Gestión de presupuestos",
    title: "Del requerimiento al presupuesto enviado.",
    text: "El equipo centraliza la solicitud, prepara conceptos, cantidades y condiciones, genera el PDF y lo envía por email desde el mismo panel.",
    view: "budget",
  },
] as const;

export function CaseShowcase({ kind, accent }: ShowcaseProps) {
  const views = kind === "greenpac" ? greenpacViews : patagoniaViews;
  const accentText = accent === "orange" ? "text-orange" : "text-violet";

  return (
    <section
      id="sistema-del-caso"
      className="relative overflow-hidden bg-ink py-20 text-white sm:py-28"
    >
      <div className="case-dark-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div>
          <div className="max-w-3xl">
            <p
              className={`font-mono text-[10px] font-bold uppercase tracking-[.18em] ${accentText}`}
            >
              El sistema en funcionamiento
            </p>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl">
              Del sitio público a la gestión de la oportunidad.
            </h2>
            <p className="mt-5 max-w-2xl text-white/55">
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
                  <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base">
                    {item.text}
                  </p>
                </div>
                <div className={index % 2 ? "lg:order-1" : ""}>
                  <ProductFrame accent={accent}>
                    {item.view === "catalog" && <CatalogView />}
                    {item.view === "pipeline" && <PipelineView />}
                    {item.view === "capabilities" && <CapabilitiesView />}
                    {item.view === "budget" && <BudgetView />}
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

export function CaseHeroVisual({ kind, accent }: ShowcaseProps) {
  const isGreenpac = kind === "greenpac";
  const accentClass = accent === "orange" ? "bg-orange" : "bg-violet";
  const softClass =
    accent === "orange" ? "bg-orange-soft text-orange" : "bg-violet-soft text-violet";

  return (
    <div className="relative mx-auto w-full max-w-[650px] pb-8 sm:pb-10">
      <div className={`absolute -inset-5 rounded-[2.5rem] opacity-25 blur-2xl ${accentClass}`} />
      <div className="relative overflow-hidden rounded-[1.8rem] border border-white/15 bg-[#f6f4ef] p-3 shadow-[0_35px_100px_rgba(0,0,0,.45)] sm:p-4">
        <div className="overflow-hidden rounded-[1.2rem] bg-white text-ink">
          <div className="flex items-center justify-between border-b border-black/8 px-4 py-3 sm:px-5">
            <div className="flex items-center gap-2">
              <span
                className={`grid h-7 w-7 place-items-center rounded-lg text-[8px] font-extrabold text-white ${accentClass}`}
              >
                {isGreenpac ? "GP" : "PV"}
              </span>
              <div>
                <p className="text-[9px] font-extrabold">
                  {isGreenpac ? "Greenpac" : "Patagonia Vessels"}
                </p>
                <p className="font-mono text-[5px] uppercase tracking-[.16em] text-steel">
                  {isGreenpac ? "Catálogo conectado" : "Solicitud técnica"}
                </p>
              </div>
            </div>
            <span className={`rounded-full px-2.5 py-1.5 text-[6px] font-bold ${softClass}`}>
              {isGreenpac ? "Consulta recibida" : "Listo para presupuestar"}
            </span>
          </div>
          {isGreenpac ? (
            <GreenpacInquiry accentClass={accentClass} softClass={softClass} />
          ) : (
            <PatagoniaRequest accentClass={accentClass} softClass={softClass} />
          )}
        </div>
      </div>
      <div
        className={`absolute bottom-0 left-5 rounded-2xl px-4 py-3 text-white shadow-2xl sm:left-8 ${accentClass}`}
      >
        <p className="font-mono text-[6px] uppercase tracking-[.16em] text-white/65">
          Recorrido conectado
        </p>
        <p className="mt-1 text-[9px] font-extrabold sm:text-xs">Sitio → consulta → gestión</p>
      </div>
    </div>
  );
}

function GreenpacInquiry({ accentClass, softClass }: { accentClass: string; softClass: string }) {
  return (
    <div className="grid min-h-[300px] gap-3 bg-[#f3f1ed] p-3 sm:min-h-[355px] sm:grid-cols-[.85fr_1.15fr] sm:p-5">
      <div className="overflow-hidden rounded-xl bg-white">
        <div className="grid h-28 place-items-center bg-orange/10 sm:h-36">
          <Settings2 className="h-12 w-12 text-orange/45" />
        </div>
        <div className="p-4">
          <p className="font-mono text-[6px] uppercase tracking-[.16em] text-orange">
            Producto consultado
          </p>
          <p className="mt-2 text-[11px] font-extrabold sm:text-sm">Tolva autodescargable</p>
          <p className="mt-2 text-[7px] leading-relaxed text-steel">
            Capacidad, aplicación y especificaciones vinculadas a la consulta.
          </p>
        </div>
      </div>
      <div className="rounded-xl bg-white p-4">
        <div className="flex items-center justify-between">
          <p className="text-[9px] font-extrabold">Consulta comercial</p>
          <span className={`rounded-full px-2 py-1 text-[6px] font-bold ${softClass}`}>Nueva</span>
        </div>
        <div className="mt-4 space-y-2">
          {[
            ["Empresa", "Productor regional"],
            ["Zona", "Centro · Buenos Aires"],
            ["Necesidad", "Equipo para campaña 2027"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg bg-[#f3f1ed] px-3 py-2.5">
              <p className="text-[6px] uppercase tracking-wide text-steel">{label}</p>
              <p className="mt-1 text-[8px] font-bold">{value}</p>
            </div>
          ))}
        </div>
        <div
          className={`mt-3 flex items-center justify-between rounded-lg px-3 py-2.5 text-white ${accentClass}`}
        >
          <span className="text-[8px] font-bold">Preparar cotización</span>
          <ArrowRight className="h-3 w-3" />
        </div>
      </div>
    </div>
  );
}

function PatagoniaRequest({ accentClass, softClass }: { accentClass: string; softClass: string }) {
  return (
    <div className="grid min-h-[300px] gap-3 bg-[#f3f1ed] p-3 sm:min-h-[355px] sm:grid-cols-[1.12fr_.88fr] sm:p-5">
      <div className="rounded-xl bg-white p-4">
        <div className="flex items-center justify-between">
          <p className="text-[9px] font-extrabold">Requerimiento industrial</p>
          <span className={`rounded-full px-2 py-1 text-[6px] font-bold ${softClass}`}>
            Revisado
          </span>
        </div>
        <p className="mt-4 text-base font-extrabold leading-tight sm:text-xl">
          Tanque de proceso fabricado a medida.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {[
            ["Capacidad", "12.000 litros"],
            ["Material", "Acero inoxidable"],
            ["Industria", "Alimentos"],
            ["Entrega", "A coordinar"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg bg-[#f3f1ed] p-2.5">
              <p className="text-[6px] uppercase tracking-wide text-steel">{label}</p>
              <p className="mt-1 text-[8px] font-bold">{value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col rounded-xl bg-ink p-4 text-white">
        <FileText className="h-5 w-5 text-violet" />
        <p className="mt-4 font-mono text-[6px] uppercase tracking-[.16em] text-white/45">
          Documentación
        </p>
        <p className="mt-2 text-[10px] font-extrabold">Plano y memoria técnica adjuntos</p>
        <div className="mt-4 space-y-2 text-[7px] text-white/65">
          <p>✓ Contacto centralizado</p>
          <p>✓ Alcance técnico revisado</p>
          <p>✓ Datos listos para cotizar</p>
        </div>
        <div
          className={`mt-auto flex items-center justify-between rounded-lg px-3 py-2.5 text-white ${accentClass}`}
        >
          <span className="text-[8px] font-bold">Crear presupuesto</span>
          <ArrowRight className="h-3 w-3" />
        </div>
      </div>
    </div>
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
    ["Tolva 24 Tn", "Ventas norte", "Pendiente"],
    ["Kit de repuestos", "Distribuidor", "Contactado"],
    ["Equipo a medida", "Administración", "Propuesta enviada"],
  ];
  return (
    <div>
      <div className="grid grid-cols-3 gap-2">
        {[
          ["11", "Cotizaciones"],
          ["5", "Consultas nuevas"],
          ["2", "Miembros"],
        ].map(([value, label]) => (
          <div key={label} className="rounded-xl bg-[#f3f1ed] p-3">
            <p className="text-xl font-extrabold">{value}</p>
            <p className="text-[7px] uppercase tracking-wider text-steel">{label}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-2 overflow-hidden text-[7px] font-bold text-steel">
        <span className="rounded-full bg-orange px-3 py-1.5 text-white">Cotizaciones</span>
        <span className="rounded-full bg-[#f3f1ed] px-3 py-1.5">Consultas</span>
        <span className="rounded-full bg-[#f3f1ed] px-3 py-1.5">Miembros y roles</span>
      </div>
      <div className="mt-4 overflow-hidden rounded-xl border border-black/8">
        <div className="grid grid-cols-[1.15fr_.9fr_auto] gap-3 bg-[#f3f1ed] px-3 py-2 text-[7px] font-bold uppercase tracking-wider text-steel">
          <span>Oportunidad</span>
          <span>Responsable</span>
          <span>Estado</span>
        </div>
        {rows.map(([opportunity, owner, status], index) => (
          <div
            key={opportunity}
            className="grid grid-cols-[1.15fr_.9fr_auto] items-center gap-3 border-t border-black/7 px-3 py-3 text-[8px]"
          >
            <span className="font-bold">{opportunity}</span>
            <span className="text-steel">{owner}</span>
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

function BudgetView() {
  return (
    <div>
      <div className="flex items-center justify-between border-b border-black/8 pb-4">
        <div className="flex items-center gap-2 text-xs font-extrabold">
          <FileText className="h-4 w-4 text-violet" /> Gestión de presupuestos
        </div>
        <span className="rounded-full bg-violet px-3 py-2 text-[7px] font-bold text-white">
          Nuevo presupuesto
        </span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 text-[7px] font-bold text-steel">
        <span className="rounded-full bg-[#171321] px-3 py-1.5 text-white">
          Solicitudes recibidas
        </span>
        <span className="rounded-full bg-[#f3f1ed] px-3 py-1.5">Presupuestos emitidos</span>
        <span className="rounded-full bg-[#f3f1ed] px-3 py-1.5">Contactos comerciales</span>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-[.72fr_1.28fr]">
        <div className="rounded-xl bg-[#171321] p-4 text-white">
          <ClipboardList className="h-5 w-5 text-violet" />
          <p className="mt-4 text-[10px] font-extrabold">Solicitud técnica</p>
          <p className="mt-2 text-[7px] leading-relaxed text-white/55">
            Proyecto y documentación listos para presupuestar.
          </p>
          <div className="mt-4 space-y-2">
            {["Producto definido", "Requerimiento visto", "Contacto centralizado"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-[7px] text-white/70">
                <CheckCircle2 className="h-3 w-3 text-violet" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-black/8 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[9px] font-extrabold">
              <Users className="h-4 w-4 text-violet" /> Preparar propuesta
            </div>
            <span className="rounded-full bg-violet-soft px-2 py-1 text-[6px] font-bold text-violet">
              Borrador
            </span>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {["Moneda", "IVA", "Vigencia"].map((label, index) => (
              <div key={label}>
                <p className="mb-1.5 text-[6px] font-semibold text-steel">{label}</p>
                <div className="rounded-lg bg-[#f3f1ed] px-2 py-2 text-[7px] font-bold">
                  {index === 0 ? "ARS" : index === 1 ? "21%" : "15 días"}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-lg bg-[#f3f1ed] p-3">
            <div className="flex justify-between text-[7px]">
              <span className="font-bold">Concepto y cantidad</span>
              <span className="font-extrabold">$ 3.630,00</span>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-[7px] text-steel">PDF listo para enviar</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-violet px-3 py-2 text-[7px] font-bold text-white">
              <Send className="h-3 w-3" /> Generar y enviar
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
