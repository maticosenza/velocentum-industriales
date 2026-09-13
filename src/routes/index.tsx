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
      { title: "Velocentum — Sistemas industriales integrados" },
      {
        name: "description",
        content:
          "Velocentum diseña e implementa sistemas industriales para operaciones más limpias, seguras y rentables.",
      },
      { property: "og:title", content: "Velocentum — Sistemas industriales integrados" },
      {
        property: "og:description",
        content:
          "Velocentum diseña e implementa sistemas industriales para operaciones más limpias, seguras y rentables.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
        <System />
        <Services />
        <Process />
        <Cases />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
