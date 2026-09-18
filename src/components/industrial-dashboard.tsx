import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CalendarClock,
  Check,
  Clock3,
  FileText,
  Mail,
  Search,
  UserRound,
} from "lucide-react";

const quotes = [
  {
    company: "Empresa agrícola",
    request: "Equipo de producción",
    status: "Propuesta enviada",
    tone: "violet",
  },
  {
    company: "Fabricante industrial",
    request: "Proyecto a medida",
    status: "En preparación",
    tone: "orange",
  },
  {
    company: "Distribuidor regional",
    request: "Repuestos y servicio",
    status: "Nueva consulta",
    tone: "green",
  },
];

export function IndustrialDashboard({ compact = false }: { compact?: boolean }) {
  return (
    <div className="min-w-0 overflow-hidden rounded-[1.35rem] border border-white/12 bg-[#f7f6f3] text-ink shadow-2xl shadow-black/25">
      <div className="flex items-center justify-between border-b border-black/8 bg-white px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-ink text-[10px] font-bold text-white">
            VI
          </span>
          <div>
            <p className="text-[11px] font-bold leading-none">Velocentum Industrial</p>
            <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-steel">
              Panel comercial
            </p>
          </div>
        </div>
        <span className="rounded-full bg-violet-soft px-2 py-1 text-[8px] font-bold text-violet">
          Vista demostrativa
        </span>
      </div>

      <div className="grid gap-3 p-4 sm:p-5">
        <p className="font-mono text-[7px] font-semibold uppercase tracking-[0.16em] text-steel">
          Datos ilustrativos
        </p>

        <div className="grid grid-cols-3 gap-2">
          {[
            ["12", "Consultas", Search],
            ["7", "En proceso", Clock3],
            ["4", "Propuestas", FileText],
          ].map(([value, label, Icon]) => {
            const MetricIcon = Icon as typeof Search;
            return (
              <div key={label as string} className="rounded-xl border border-black/7 bg-white p-3">
                <MetricIcon className="h-3.5 w-3.5 text-violet" />
                <p className="mt-2 text-xl font-extrabold tracking-tight sm:text-2xl">
                  {value as string}
                </p>
                <p className="text-[8px] font-semibold uppercase tracking-wider text-steel">
                  {label as string}
                </p>
              </div>
            );
          })}
        </div>

        <div className="overflow-hidden rounded-xl border border-black/7 bg-white">
          <div className="flex items-center justify-between border-b border-black/7 px-3 py-2.5">
            <p className="text-[10px] font-bold">Cotizaciones recientes</p>
            <span className="flex items-center gap-1 text-[8px] font-semibold text-violet">
              Ver todas <ArrowUpRight className="h-2.5 w-2.5" />
            </span>
          </div>
          <div className="divide-y divide-black/6">
            {quotes.slice(0, compact ? 2 : 3).map((quote) => (
              <div
                key={quote.company}
                className="grid grid-cols-[1fr_auto] items-center gap-3 px-3 py-2.5"
              >
                <div className="min-w-0">
                  <p className="truncate text-[9px] font-bold">{quote.company}</p>
                  <p className="mt-0.5 truncate text-[8px] text-steel">{quote.request}</p>
                </div>
                <span
                  className={`status-${quote.tone} rounded-full px-2 py-1 text-[7px] font-bold`}
                >
                  {quote.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {!compact && (
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-2 rounded-xl border border-black/7 bg-white p-3">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-violet-soft text-violet">
                <UserRound className="h-3.5 w-3.5" />
              </span>
              <div>
                <p className="text-[8px] text-steel">Seguimiento</p>
                <p className="text-[9px] font-bold">Responsables asignados</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-black/7 bg-white p-3">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-orange-soft text-orange">
                <Check className="h-3.5 w-3.5" />
              </span>
              <div>
                <p className="text-[8px] text-steel">Actividad</p>
                <p className="text-[9px] font-bold">Historial centralizado</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function OpportunityDetail({ compact = false }: { compact?: boolean }) {
  return (
    <div className="min-w-0 overflow-hidden rounded-[1.35rem] border border-black/8 bg-[#f7f6f3] text-ink shadow-[0_24px_70px_rgba(25,18,39,0.12)]">
      <div className="flex items-center justify-between border-b border-black/8 bg-white px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-ink text-[10px] font-bold text-white">
            VI
          </span>
          <div>
            <p className="text-[11px] font-bold leading-none">Nueva oportunidad</p>
            <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-steel">Consulta #0248</p>
          </div>
        </div>
        <span className="rounded-full bg-orange-soft px-2 py-1 text-[8px] font-bold text-orange">
          Requiere respuesta
        </span>
      </div>

      <div className="grid gap-3 p-4 sm:p-5">
        <div className="grid gap-3 sm:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-xl border border-black/7 bg-white p-4">
            <p className="font-mono text-[7px] font-semibold uppercase tracking-[0.16em] text-steel">
              Datos de la consulta
            </p>
            <div className="mt-4 space-y-3">
              {[
                [Building2, "Empresa", "Metalúrgica del Sur"],
                [UserRound, "Contacto", "Mariano López"],
                [Search, "Interés", "Equipo de producción a medida"],
              ].map(([Icon, label, value]) => {
                const DetailIcon = Icon as typeof Search;
                return (
                  <div key={label as string} className="flex items-start gap-3">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-violet-soft text-violet">
                      <DetailIcon className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <p className="text-[7px] uppercase tracking-wider text-steel">
                        {label as string}
                      </p>
                      <p className="mt-0.5 text-[9px] font-bold sm:text-[10px]">
                        {value as string}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-xl border border-black/7 bg-white p-4">
            <p className="font-mono text-[7px] font-semibold uppercase tracking-[0.16em] text-steel">
              Origen y responsable
            </p>
            <div className="mt-4 rounded-lg bg-[#f3f1ed] p-3">
              <p className="text-[7px] text-steel">Canal de ingreso</p>
              <p className="mt-1 text-[10px] font-bold">Google · Formulario web</p>
            </div>
            <div className="mt-2 rounded-lg bg-[#f3f1ed] p-3">
              <p className="text-[7px] text-steel">Responsable asignado</p>
              <p className="mt-1 text-[10px] font-bold">Equipo comercial</p>
            </div>
          </div>
        </div>

        {!compact && (
          <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
            <div className="rounded-xl border border-black/7 bg-white p-4">
              <div className="flex items-center justify-between">
                <p className="text-[9px] font-bold">Próximo paso</p>
                <span className="flex items-center gap-1 text-[7px] font-semibold text-violet">
                  <CalendarClock className="h-3 w-3" /> Hoy, 16:30
                </span>
              </div>
              <div className="mt-3 flex items-center gap-2 text-[8px] text-steel">
                <Check className="h-3.5 w-3.5 text-violet" /> Revisar requerimiento y preparar una
                propuesta inicial.
              </div>
            </div>
            <div className="flex gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-steel">
                <Mail className="h-4 w-4" />
              </span>
              <span className="inline-flex h-10 items-center gap-2 rounded-xl bg-violet px-4 text-[9px] font-bold text-white">
                Preparar propuesta <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
