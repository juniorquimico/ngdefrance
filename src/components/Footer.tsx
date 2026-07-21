import Link from "next/link";
import { brand } from "@/config/brand";
import { ecosystemRoutes, institutionalRoutes } from "@/config/routes";

export function Footer() {
  return (
    <footer className="border-t border-brand-champagne bg-brand-graphite text-brand-ivory">
      <div className="mx-auto grid max-w-7xl gap-8 px-[var(--space-page-x)] py-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-lg font-semibold tracking-[0.18em] uppercase">{brand.name}</p>
          <p className="mt-3 max-w-md text-sm text-brand-champagne">{brand.validationNotice}</p>
        </div>
        <nav aria-label="Rodapé institucional" className="grid gap-2 text-sm">
          {institutionalRoutes.map((route) => (
            <Link className="focus-ring hover:text-white" href={route.href} key={route.href}>
              {route.label}
            </Link>
          ))}
        </nav>
        <nav aria-label="Ecossistema" className="grid content-start gap-2 text-sm">
          {ecosystemRoutes.map((route) => (
            <Link className="focus-ring hover:text-white" href={route.href} key={route.href}>
              {route.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
