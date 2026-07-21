export type NavRoute = {
  label: string;
  href: string;
  description?: string;
};

export const institutionalRoutes: NavRoute[] = [
  { label: "Home", href: "/" },
  { label: "História", href: "/historia" },
  { label: "Ciência", href: "/ciencia" },
  { label: "Cleanical Haircare", href: "/cleanical-haircare" },
  { label: "Produtos", href: "/produtos" },
  { label: "Sustentabilidade", href: "/sustentabilidade" },
  { label: "Profissionais", href: "/profissionais" },
  { label: "Journal", href: "/journal" },
  { label: "Onde encontrar", href: "/onde-encontrar" },
  { label: "Contato", href: "/contato" },
  { label: "Legais", href: "/legais" },
];

export const ecosystemRoutes: NavRoute[] = [
  { label: "Loja B2C", href: "/loja", description: "Ambiente de compra para consumidor final." },
  { label: "Portal B2B", href: "/portal-profissional", description: "Ambiente para profissionais parceiros." },
];
