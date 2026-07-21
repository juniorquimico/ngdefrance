type PageShellProps = {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
};

export function PageShell({ eyebrow = "Fundação navegável", title, children }: PageShellProps) {
  return (
    <section className="mx-auto min-h-[55vh] max-w-7xl px-[var(--space-page-x)] py-[var(--space-section-y)]">
      <p className="text-sm font-semibold tracking-[0.22em] text-brand-espresso uppercase">{eyebrow}</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.03em] md:text-6xl">{title}</h1>
      <div className="mt-6 max-w-2xl text-base leading-7 text-brand-espresso">
        {children ?? <p>conteúdo a validar: placeholder de rota para a Fase 1.</p>}
      </div>
    </section>
  );
}
