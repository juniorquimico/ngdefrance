import { PageShell } from "@/components/PageShell";
import { brand } from "@/config/brand";

export default function HomePage() {
  return (
    <PageShell title={`${brand.name}: ${brand.concept}`}>
      <p>conteúdo a validar: página inicial institucional reservada para a Fase 2.</p>
    </PageShell>
  );
}
