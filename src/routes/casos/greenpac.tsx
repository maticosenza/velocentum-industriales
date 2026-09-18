import { createFileRoute } from "@tanstack/react-router";
import { CaseDetail, type IndustrialCase } from "@/components/case-detail";

const greenpacCase: IndustrialCase = {
  name: "Greenpac",
  category: "Maquinaria agrícola",
  eyebrow: "Caso · Maquinaria agrícola",
  summary:
    "Una presencia de producto conectada con consultas, cotizaciones y gestión comercial para acompañar una venta de catálogo con múltiples variables.",
  challenge:
    "Presentar maquinaria, repuestos y alcance comercial con suficiente claridad para que cada consulta llegue mejor orientada.",
  solution:
    "Un catálogo digital conectado con una operación que centraliza maquinaria, consultas, cotizaciones, clientes, zonas y tiendas.",
  outcome:
    "El equipo puede recibir el pedido con contexto, preparar la cotización y seguir la oportunidad desde una misma lógica comercial.",
  journeyTitle: "Del producto consultado a una gestión comercial compartida.",
  capabilities: [
    "Catálogo de maquinaria y repuestos organizado por producto.",
    "Consultas vinculadas con el interés específico del comprador.",
    "Cotizaciones, clientes y estados comerciales centralizados.",
    "Gestión de zonas, tiendas, miembros y permisos por rol dentro del mismo sistema.",
  ],
  flow: [
    { title: "Catálogo", text: "El comprador entiende el equipo, sus usos y especificaciones." },
    { title: "Consulta", text: "La solicitud llega asociada al producto que originó el interés." },
    {
      title: "Cotización",
      text: "El equipo comercial prepara y registra la propuesta correspondiente.",
    },
    {
      title: "Gestión comercial",
      text: "La oportunidad queda asignada, cambia de estado y conserva su historial dentro del equipo.",
    },
  ],
  publicUrl: "https://greenpac.com.ar",
  publicLabel: "Visitar Greenpac",
  accent: "orange",
  showcase: "greenpac",
};

export const Route = createFileRoute("/casos/greenpac")({
  head: () => ({
    meta: [
      { title: "Caso Greenpac | Sistema Industrial Velocentum" },
      {
        name: "description",
        content:
          "Caso Greenpac: catálogo de maquinaria, consultas, cotizaciones y gestión comercial conectados.",
      },
      { property: "og:title", content: "Caso Greenpac | Velocentum" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://velocentum.agency/casos/greenpac" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://velocentum.agency/casos/greenpac" }],
  }),
  component: () => <CaseDetail caseStudy={greenpacCase} />,
});
