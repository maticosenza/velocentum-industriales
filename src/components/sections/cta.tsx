import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Cta() {
  return (
    <section className="bg-ink py-20 text-white">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Empezá a transformar tu operación industrial
          </h2>
          <p className="mt-4 text-white/70">
            Conversamos sobre tu empresa y evaluamos cómo Velocentum puede acompañarte.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button className="gap-2 bg-violet text-white hover:bg-violet/90">
              Solicitar propuesta
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="border-white/30 bg-transparent text-white hover:bg-white/10"
            >
              Conversar sobre mi empresa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
