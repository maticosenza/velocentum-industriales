import { createFileRoute } from "@tanstack/react-router";
import { CaseDetail, type IndustrialCase } from "@/components/case-detail";

const patagoniaCase: IndustrialCase = {
  name: "Patagonia Vessels",
  category: "Equipos industriales",
  eyebrow: "Caso · Fabricación por proyecto",
  summary:
    "Una presencia técnica conectada con un sistema de presupuestos para convertir cada requerimiento en una propuesta lista para enviar.",
  challenge:
    "Comunicar capacidad técnica, experiencia y fabricación a medida antes del primer contacto con el comprador.",
  solution:
    "Una arquitectura de contenidos conectada con un panel que centraliza solicitudes, contactos comerciales y presupuestos emitidos.",
  outcome:
    "El comprador puede validar la capacidad técnica y el equipo puede preparar, generar en PDF y enviar el presupuesto desde una misma operación.",
  journeyTitle: "De la capacidad técnica al presupuesto enviado.",
  capabilities: [
    "Presentación clara de capacidades y especialización industrial.",
    "Solicitudes y contactos comerciales centralizados por estado.",
    "Presupuestos con conceptos, moneda, IVA, vigencia y condiciones.",
    "Generación de PDF, envío por email, edición y reenvío desde el panel.",
  ],
  flow: [
    {
      title: "Capacidades",
      text: "El comprador identifica si la empresa puede resolver su necesidad.",
    },
    {
      title: "Requerimiento",
      text: "La solicitud llega enfocada en la necesidad técnica del proyecto.",
    },
    {
      title: "Presupuesto",
      text: "El equipo prepara conceptos, cantidades, condiciones y totales.",
    },
    {
      title: "Envío y seguimiento",
      text: "La propuesta se genera en PDF, se envía por email y conserva su estado.",
    },
  ],
  publicUrl: "https://patagoniavessels.com.ar",
  publicLabel: "Visitar Patagonia Vessels",
  accent: "violet",
  showcase: "patagonia",
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
    links: [
      {
        rel: "canonical",
        href: "https://velocentum.agency/casos/patagonia-vessels",
      },
    ],
  }),
  component: () => <CaseDetail caseStudy={patagoniaCase} />,
});
