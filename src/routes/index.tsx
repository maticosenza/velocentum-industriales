import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Problems } from "@/components/sections/problems";
import { System } from "@/components/sections/system";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Cases } from "@/components/sections/cases";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sistema Industrial por Velocentum" },
      {
        name: "description",
        content:
          "Presencia, contenido, visibilidad en Google y gestión de cotizaciones para empresas industriales.",
      },
      { property: "og:title", content: "Sistema Industrial por Velocentum" },
      {
        property: "og:description",
        content:
          "Presencia, contenido, visibilidad en Google y gestión de cotizaciones para empresas industriales.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://velocentum.agency/" },
      { property: "og:site_name", content: "Velocentum" },
      { name: "robots", content: "index, follow" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sistema Industrial por Velocentum" },
      {
        name: "twitter:description",
        content:
          "Presencia, contenido, visibilidad en Google y gestión de cotizaciones para empresas industriales.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Problems />
        <Services />
        <System />
        <Process />
        <Cases />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
