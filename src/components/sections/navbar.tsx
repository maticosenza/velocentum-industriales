import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Brand } from "@/components/brand";
import { trackMetaContact } from "@/lib/meta-pixel";

const navLinks = [
  { label: "Sistema", href: "#sistema" },
  { label: "Casos", href: "#casos" },
  { label: "Cómo trabajamos", href: "#proceso" },
];

const contactHref =
  "https://wa.me/5491135810100?text=Hola%20Velocentum%2C%20quiero%20conversar%20sobre%20el%20Sistema%20Industrial.";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-paper/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] w-full max-w-[1240px] items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <Brand />
          <span className="hidden border-l border-black/15 pl-3 text-[10px] font-bold uppercase tracking-[0.16em] text-steel sm:inline">
            Sistema Industrial
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
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
          className="inline-flex items-center justify-center rounded-md p-2 text-ink lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
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
