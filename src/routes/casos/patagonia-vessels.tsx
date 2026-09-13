import { createFileRoute } from "@tanstack/react-router";
import { CaseDetail, type IndustrialCase } from "@/components/case-detail";

const patagoniaCase: IndustrialCase = {
  name: "Patagonia Vessels",
  category: "Equipos industriales",
  eyebrow: "Caso · Fabricación por proyecto",
  summary:
    "Una presencia técnica que ordena trayectoria, capacidades y proceso de fabricación para preparar mejor cada pedido de presupuesto.",
  challenge:
    "Comunicar capacidad técnica, experiencia y fabricación a medida antes del primer contacto con el comprador.",
  solution:
    "Una arquitectura de contenidos que presenta la empresa, sus capacidades, trayectoria, clientes y forma de trabajo alrededor del requerimiento técnico.",
  outcome:
    "El comprador puede validar qué fabrica la empresa y cómo aborda cada proyecto antes de enviar la información necesaria para presupuestar.",
  capabilities: [
    "Presentación clara de capacidades y especialización industrial.",
    "Trayectoria y experiencia integradas como señales de confianza.",
    "Proceso de fabricación explicado antes del primer contacto.",
    "Pedido de presupuesto orientado a proyectos y requerimientos técnicos.",
  ],
  flow: [
    { title: "Capacidades", text: "El comprador identifica si la empresa puede resolver su necesidad." },
    { title: "Proceso", text: "La metodología y la fabricación quedan explicadas con claridad." },
    { title: "Requerimiento", text: "La consulta se enfoca en la necesidad técnica del proyecto." },
    { title: "Presupuesto", text: "El equipo recibe una base más sólida para avanzar comercialmente." },
  ],
  publicUrl: "https://patagoniavessels.com.ar",
  publicLabel: "Visitar Patagonia Vessels",
  accent: "violet",
};

export const Route = createFileRoute("/casos/patagonia-vessels")({
  head: () => ({
    meta: [
      { title: "Caso Patagonia Vessels | Sistema Industrial Velocentum" },
      {
        name: "description",
        content:
          "Caso Patagonia Vessels: capacidades, proceso y pedidos de presupuesto para fabricación industrial por proyecto.",
      },
      { property: "og:title", content: "Caso Patagonia Vessels | Velocentum" },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://velocentum.agency/casos/patagonia-vessels",
      },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: () => <CaseDetail caseStudy={patagoniaCase} />,
});
