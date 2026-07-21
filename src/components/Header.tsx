import Link from "next/link";
import { ecosystemRoutes, institutionalRoutes } from "@/config/routes";

export function Header() {
  return (
    <header className="border-b border-brand-champagne/70 bg-brand-ivory/95">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-[var(--space-page-x)] py-5 lg:flex-row lg:items-center lg:justify-between">
        <Link className="focus-ring text-xl font-semibold tracking-[0.18em] uppercase" href="/">
          NG de France
        </Link>
        <nav aria-label="Navegação institucional" className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {institutionalRoutes.map((route) => (
            <Link className="focus-ring hover:text-brand-espresso" href={route.href} key={route.href}>
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-wrap gap-3">
          <Link className="focus-ring rounded-full bg-brand-graphite px-4 py-2 text-sm font-medium text-white" href={ecosystemRoutes[0].href}>
            Comprar para mim
          </Link>
          <Link className="focus-ring rounded-full border border-brand-graphite px-4 py-2 text-sm font-medium" href={ecosystemRoutes[1].href}>
            Sou profissional
          </Link>
        </div>
      </div>
    </header>
  );
}
