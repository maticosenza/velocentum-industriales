import { Brand } from "@/components/brand";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const footerLinks = [
  { label: "Sistema", href: "#sistema" },
  { label: "Casos", href: "#casos" },
  { label: "Cómo trabajamos", href: "#proceso" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/velocentum/",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/velocentum/",
    icon: Facebook,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/velocentum/",
    icon: Linkedin,
  },
];

export function Footer({ basePath = "" }: { basePath?: string }) {
  return (
    <footer className="bg-ink text-white">
      <div className="border-b border-white/12 bg-[#1d172e]">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-5 px-5 py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[.18em] text-white/55">
            Parte del ecosistema Velocentum
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold">
            <a href="https://velocentum.com" className="text-white/65 transition hover:text-white">
              Sitio principal ↗
            </a>
            <a
              href="https://ecommerce.velocentum.com"
              className="text-white/65 transition hover:text-white"
            >
              Sistema E-commerce ↗
            </a>
            <span className="inline-flex items-center gap-2 text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" /> Sistema Industrial
            </span>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[1240px] px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Brand inverse />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              <span className="sm:hidden">
                <span className="block whitespace-nowrap">Presencia, contenido, visibilidad y</span>
                <span className="block whitespace-nowrap">
                  gestión comercial para empresas industriales.
                </span>
              </span>
              <span className="hidden sm:inline">
                Presencia, contenido, visibilidad y gestión comercial para empresas industriales.
              </span>
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h4 className="font-mono text-[10px] font-semibold uppercase tracking-[.18em] text-white/35">
                Navegación
              </h4>
              <ul className="mt-4 space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={`${basePath}${link.href}`}
                      className="text-sm text-white/65 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-[10px] font-semibold uppercase tracking-[.18em] text-white/35">
                Contacto
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-white/65">
                <li>
                  <a href="mailto:marketing@velocentum.com" className="hover:text-white">
                    marketing@velocentum.com
                  </a>
                </li>
                <li>
                  <a href="tel:+5491135810100" className="hover:text-white">
                    +54 9 11 3581 0100
                  </a>
                </li>
                <li>Buenos Aires, Argentina</li>
              </ul>
              <div className="mt-6 flex items-center gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white/65 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/12 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} Velocentum. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/35">Sistema Industrial por Velocentum</p>
        </div>
      </div>
    </footer>
  );
}
