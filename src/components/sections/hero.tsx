import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="border-b border-border bg-background py-20">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-violet/20 bg-violet-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet">
              Transformación industrial
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Operaciones industriales más limpias, seguras y rentables
            </h1>
            <p className="mt-6 text-lg text-steel">
              Velocentum diseña e implementa sistemas industriales integrados para empresas que
              necesitan escalar sin perder control.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button className="gap-2 bg-violet text-white hover:bg-violet/90">
                Solicitar una propuesta
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-ink text-ink hover:bg-steel-light">
                Conversar sobre mi empresa
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-steel-light lg:aspect-square">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-steel">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-violet/10" />
                <p className="text-sm font-medium">Imagen hero industrial</p>
                <p className="text-xs">(placeholder)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
