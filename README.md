# Novo Site NG de France

Fundação navegável do novo ecossistema digital da NG de France, com três ambientes planejados sobre um único design system:

- Site institucional
- Loja B2C
- Portal profissional B2B

## Stack

- Next.js 15.4.2 com App Router
- React 19.1.0
- TypeScript 5.8.3
- Tailwind CSS 4.1.11
- ESLint 9.31.0 com `eslint-config-next` 15.4.2

## Como executar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Scripts

```bash
npm run lint
npm run typecheck
npm run build
npm run verify:foundation
npm run start
```

- `lint`: executa o ESLint real sobre o projeto (`eslint .`).
- `typecheck`: executa `tsc --noEmit`.
- `build`: executa `next build`, sem fallback ou simulação de sucesso.
- `verify:foundation`: executa apenas a verificação estrutural auxiliar da Fase 1.

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

As páginas institucionais estão organizadas com route group do App Router em `src/app/(institucional)`. O segmento entre parênteses não faz parte da URL pública; portanto, as URLs públicas esperadas são:

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

## Validações técnicas

Os scripts reais estão configurados e não simulam sucesso. Neste ambiente, `npm install` não concluiu porque o acesso ao registro npm retornou `403 Forbidden` via proxy ao consultar `https://registry.npmjs.org/@eslint%2feslintrc`. Consequentemente, `package-lock.json` não pôde ser gerado aqui e `lint`, `typecheck` e `build` dependem da instalação das dependências em um ambiente com acesso ao registro npm.

Comandos a executar em ambiente com acesso ao npm:

```bash
npm install
npm run lint
npm run typecheck
npm run build
npm run verify:foundation
```

## Falta para a Fase 2

- Validar manual de marca, paleta, tipografia, grid e assets oficiais.
- Ingerir conteúdo oficial de `/content-source` quando disponível.
- Definir arquitetura de catálogo, produto, checkout e integrações da loja B2C.
- Definir autenticação, perfis, regras comerciais e fluxos do portal B2B.
- Criar homepage completa, narrativa visual, hero e páginas com conteúdo final aprovado.
