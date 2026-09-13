const ecosystem = [
  { name: "Velocentum", role: "Sistemas industriales" },
  { name: "Velocentum Academy", role: "Capacitación" },
  { name: "Velocentum Ventures", role: "Inversiones industriales" },
];

const footerLinks = [
  { label: "Sistema", href: "#sistema" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Casos", href: "#casos" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-tight section-padding">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-2xl font-bold tracking-tight text-ink">Velocentum</span>
            <p className="mt-4 max-w-sm text-sm text-steel">
              Sistemas industriales integrados para empresas que buscan operar mejor.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-ink">Navegación</h4>
              <ul className="mt-4 space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-steel hover:text-ink">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-ink">
                Ecosistema Velocentum
              </h4>
              <ul className="mt-4 space-y-3">
                {ecosystem.map((item) => (
                  <li key={item.name}>
                    <span className="block text-sm font-medium text-ink">{item.name}</span>
                    <span className="text-xs text-steel">{item.role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-steel">© {new Date().getFullYear()} Velocentum. Todos los derechos reservados.</p>
          <p className="text-xs text-steel">Landing preparada para conectar a GitHub.</p>
        </div>
      </div>
    </footer>
  );
}
