# Novo Site NG de France

Fundação navegável do novo ecossistema digital da NG de France, com três ambientes planejados sobre um único design system:

- Site institucional
- Loja B2C
- Portal profissional B2B

## Stack

- Next.js com App Router
- TypeScript
- Tailwind CSS
- ESLint

## Como executar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Scripts

```bash
npm run build
npm run lint
npm run start
```

## Estrutura criada na Fase 1

- `src/app`: rotas do App Router, metadata, sitemap e robots.
- `src/components`: componentes globais de layout, header, footer e shell de páginas.
- `src/config`: configuração de marca e rotas compartilhadas.
- `src/app/globals.css`: tokens globais provisórios de cor, tipografia e espaçamento.

## Premissas adotadas

- Não foram encontrados diretórios `/content-source` ou `/brand-assets` no repositório durante a Fase 1.
- Por isso, os tokens visuais são neutros e marcados como provisórios/conteúdo a validar.
- Claims, certificações, números, ingredientes e textos proprietários não foram inventados.
- As rotas são placeholders navegáveis, sem homepage completa, hero cinematográfico, loja funcional ou portal B2B funcional.

## Rotas iniciais

### Institucional

- `/`
- `/historia`
- `/ciencia`
- `/cleanical-haircare`
- `/produtos`
- `/sustentabilidade`
- `/profissionais`
- `/journal`
- `/onde-encontrar`
- `/contato`
- `/legais`

### Ecossistema comercial

- `/loja`
- `/portal-profissional`

## Falta para a Fase 2

- Validar manual de marca, paleta, tipografia, grid e assets oficiais.
- Ingerir conteúdo oficial de `/content-source` quando disponível.
- Definir arquitetura de catálogo, produto, checkout e integrações da loja B2C.
- Definir autenticação, perfis, regras comerciais e fluxos do portal B2B.
- Criar homepage completa, narrativa visual, hero e páginas com conteúdo final aprovado.
