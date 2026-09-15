import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Brand } from "@/components/brand";
import { trackMetaContact } from "@/lib/meta-pixel";

const navLinks = [
  { label: "Sistema", href: "#sistema" },
  { label: "Cómo trabajamos", href: "#proceso" },
  { label: "Casos", href: "#casos" },
];

const contactHref =
  "https://wa.me/5491135810100?text=Hola%20Velocentum%2C%20quiero%20conversar%20sobre%20el%20Sistema%20Industrial.";

export function Navbar({ basePath = "" }: { basePath?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full px-3 py-3 sm:px-5">
      <nav className="mx-auto flex h-16 w-full max-w-[1240px] items-center justify-between rounded-full border border-black/10 bg-white/95 px-5 shadow-[0_12px_35px_rgba(15,10,25,0.14)] backdrop-blur-xl sm:px-7">
        <a href={`${basePath}#inicio`} className="flex items-center gap-3">
          <Brand />
          <span className="hidden border-l border-black/15 pl-3 text-[10px] font-bold uppercase tracking-[0.16em] text-steel sm:inline">
            Sistema Industrial
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`${basePath}${link.href}`}
              className="text-sm font-medium text-steel transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button
            asChild
            className="h-11 rounded-full bg-violet px-6 text-white shadow-none hover:bg-violet/90"
          >
            <a
              href={contactHref}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackMetaContact("navbar_desktop")}
            >
              Solicitar propuesta
            </a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-violet/25 bg-violet-soft p-2 text-violet lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 w-full max-w-[1240px] overflow-hidden rounded-[1.5rem] border border-black/10 bg-white/98 shadow-[0_18px_45px_rgba(15,10,25,0.16)] backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-4 px-5 py-5 sm:px-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`${basePath}${link.href}`}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-steel hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="w-full bg-violet text-white hover:bg-violet/90">
              <a
                href={contactHref}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackMetaContact("navbar_mobile")}
              >
                Solicitar propuesta
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
