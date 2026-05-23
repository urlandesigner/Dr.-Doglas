# Medical Site Strategy — Dr. Doglas Gobbi Marchesi

> **Documento vivo.** Referência única para implementações e refinamentos AI-first deste projeto.
> Sempre que uma decisão de produto, UX ou Design System for tomada, **atualize este arquivo** na mesma tarefa.
>
> - **Projeto:** Landing page institucional médica (single-page)
> - **Stack:** Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript
> - **Local:** `src/` (App Router) · dev em `localhost:3000`
> - **Última atualização:** 2026-05-21
> - **Idioma do produto:** pt-BR

---

## 1. Objetivo do projeto

Site institucional de conversão para o **Dr. Doglas Gobbi Marchesi** — Cirurgião Geral, Bariátrico e do Aparelho Digestivo (Grande Vitória/ES).

**Metas, em ordem de prioridade:**

1. **Gerar agendamentos.** Todo CTA principal aponta para `#contato` (ou WhatsApp). A jornada inteira é desenhada para levar o visitante ao contato.
2. **Transmitir autoridade médica e confiança.** Registro profissional, formação, associações, depoimentos e convênios reduzem fricção de decisão.
3. **Esclarecer dúvidas pré-consulta.** FAQ e seção de doenças tratadas respondem objeções comuns antes do contato.
4. **Presença digital premium.** Percepção de clínica high-end via acabamento visual sofisticado.

**Público:** pacientes adultos da Grande Vitória buscando cirurgia bariátrica, geral ou do aparelho digestivo — e familiares pesquisando em nome deles. Sensibilidade alta a confiança e clareza.

**Não-objetivos (hoje):** e-commerce, área logada, blog/CMS, multi-idioma, backend/API. É um site estático de marketing.

---

## 2. Estratégia de UX

**Princípio central:** *single-page de conversão com leitura linear*. O visitante rola de cima a baixo numa narrativa que constrói confiança e termina em ação.

**Arco narrativo (ordem das seções):**

`Hero (quem + promessa)` → `Sobre (credibilidade)` → `Especialidades (o que faz)` → `Doenças tratadas (cobertura clínica)` → `Procedimentos (profundidade técnica)` → `Depoimentos (prova social)` → `Convênios (remoção de barreira financeira)` → `FAQ (remoção de objeções)` → `Contato (conversão)`.

**Diretrizes de UX adotadas:**

- **CTA onipresente, destino único.** "Agendar Consulta" reaparece na Navbar, Hero e banner de Procedimentos — todos para `#contato`. Reduz carga de decisão.
- **Navegação por âncoras + scroll suave** (`scroll-behavior: smooth` no `html`). A Navbar fixa permite saltar para qualquer etapa.
- **Conteúdo colapsável é sempre coluna única.** Ver [Decisão #2](#8-decisões-importantes-decision-log). Acordeão em duas colunas quebra o layout ao expandir.
- **Densidade > altura.** Refinamentos recentes reduziram padding e altura de cards para melhorar escaneabilidade e densidade premium.
- **Hierarquia clara em cada bloco:** label sobrescrito → título → divisor → conteúdo. Padrão repetido em todas as seções.
- **Microcópia orientada à ação e ao acolhimento** ("Cuidado cirúrgico de excelência", "Fale com a nossa equipe").

---

## 3. Direção visual

**Conceito:** *medicina high-end, editorial e clean*. Referências: Apple-like minimalism, Stripe, Linear, clínicas premium.

**Pilares:**

- **Profundidade sutil, nunca chapado.** Fundos usam gradientes radiais leves + textura de pontos quase imperceptível. Sombras são *difusas* ("sentidas, não vistas").
- **Azul como sotaque, navy como base.** Navy profundo (`#0f2444`) ancora; sky (`#0ea5e9`/`#38bdf8`) destaca e dirige a ação.
- **Tipografia com contraste de papéis.** Serifa (Merriweather) para títulos = autoridade/editorial; sans (Inter) para corpo = legibilidade/modernidade.
- **Movimento discreto.** Hover com elevação mínima, glow azul suave, setas que deslizam. Tudo `duration-300`. Nada neon, nada futurista.
- **Respiro generoso** entre seções, com ritmo de fundo alternado (claro/escuro) para separar blocos.

---

## 4. Estrutura das páginas

Single-page renderizada em `src/app/page.tsx`. Layout global em `src/app/layout.tsx` (fontes + metadata + `lang="pt-BR"`).

**Ordem de montagem (`page.tsx`):**

| # | Componente | `id` âncora | Fundo | Papel |
|---|------------|-------------|-------|-------|
| — | `Navbar` | — | transparente → navy/blur | Navegação fixa + CTA |
| 1 | `Hero` | `#inicio` | navy cinematográfico | Apresentação + promessa + métricas |
| 2 | `Sobre` | `#sobre` | branco | Credibilidade (bio, formação, associações) |
| 3 | `Especialidades` | `#especialidades` | `#f8fafc` | 3 áreas de atuação |
| 4 | `DoencasTratadas` | `#doencas` | `#f0f9ff` + gradiente | 15 condições tratadas |
| 5 | `Procedimentos` | `#procedimentos` | branco + gradiente | Procedimentos por categoria + CTA |
| 6 | `Depoimentos` | `#depoimentos` | `#f8fafc` | Prova social + trust badges |
| 7 | `Convenios` | _(sem id)_ | navy | Planos aceitos |
| 8 | `FAQ` | `#faq` | `#f8fafc` + gradiente | Acordeão de dúvidas |
| 9 | `Contato` | `#contato` | branco | 3 unidades de atendimento (conversão) |
| — | `Footer` | — | `#060f1e` | Marca, Instagram, créditos |

> ⚠️ **Inconsistência conhecida:** `Convenios` não tem `id` e não está no menu (é um interlúdio). A Navbar lista: Início, Sobre, Especialidades, Doenças, Procedimentos, Depoimentos, Dúvidas, Contato.

---

## 5. Componentes reutilizáveis

**Estado atual:** os componentes são **seções monolíticas**; os elementos visuais (header de seção, cards, botões, chips) estão **duplicados inline** em cada arquivo, não extraídos. Isso é a maior dívida técnica de UI do projeto — ver [Oportunidades](#10-oportunidades-futuras).

**Inventário de componentes (todos em `src/components/`):**

| Componente | Tipo | Interatividade | Observações |
|------------|------|----------------|-------------|
| `Navbar.tsx` | Client | `useState` (scroll + menu) | Único com estado de scroll; menu mobile hamburger |
| `Hero.tsx` | Server | — | `next/image` `priority`; camadas de glow/vinheta |
| `Sobre.tsx` | Server | — | Profile card + timeline de formação |
| `Especialidades.tsx` | Server | — | 3 cards, 1 em destaque (ring/elevação) |
| `DoencasTratadas.tsx` | Server | — | Grid 3-col compacto, marcador discreto |
| `Procedimentos.tsx` | Server | — | 3 colunas por categoria + banner CTA |
| `Depoimentos.tsx` | Server | — | Subcomponente local `Estrelas` |
| `Convenios.tsx` | Server | — | Chips sobre navy |
| `FAQ.tsx` | Client | `useState` (item aberto) | Acordeão coluna única; subcomponente `ChevronIcon` |
| `Contato.tsx` | Server | — | Dados reais; ícones SVG locais (`Pin/Phone/WhatsApp`) |
| `Footer.tsx` | Server | — | Instagram + crédito do desenvolvedor |

**Padrões de "quase-componente" a extrair:**

- **SectionHeading** (label + h2 + divisor) — repetido em 7+ seções, com 2 variações conflitantes.
- **Button** (variantes: `primary` gradiente, `outline`, `ghost`).
- **Card** (variantes: `flat`, `elevated`, `interactive`).
- **Chip / Pill** (especialidades, convênios, registros).
- **Ícones SVG** (check, seta, chevron, pin, phone, whatsapp, instagram) — hoje espalhados inline.

---

## 6. Padrões visuais (como o código realmente faz hoje)

### Container & espaçamento
- Largura: `max-w-7xl mx-auto px-6` (exceção: `FAQ` usa `max-w-3xl` para legibilidade do acordeão).
- Padding vertical de seção: `py-24` padrão · `py-28` (Especialidades) · `py-16` (Convenios).

### Header de seção — ⚠️ **DUAS variantes coexistem**
- **Variante "refinada" (alvo / canônica):** label `text-xs tracking-[0.25em] uppercase` + `h2 ... md:text-[2.75rem] mt-3` + divisor `w-12 h-px`. Usada em **Especialidades, DoencasTratadas, Procedimentos, FAQ**.
- **Variante "legada":** label `text-sm tracking-widest` + `h2 text-4xl mt-2` + divisor `w-16 h-1 rounded-full`. Ainda em **Sobre, Depoimentos, Convenios, Contato**.
- **Regra:** ao tocar uma seção legada, **migrar para a variante refinada**.

### Sombras — ⚠️ **DUAS gerações coexistem**
- **Geração nova (alvo):** sombras difusas customizadas com blur amplo, baixa opacidade e *spread negativo*:
  - Repouso: `shadow-[0_22px_60px_-34px_rgba(15,36,68,0.16)]`
  - Hover: `shadow-[0_34px_80px_-38px_rgba(15,36,68,0.18)]`
  - Glow azul (estado ativo): `shadow-[0_24px_60px_-32px_rgba(14,165,233,0.30)]`
- **Geração legada:** `shadow-sm` / `shadow-md` / `shadow-lg` (em Depoimentos, Contato). **Migrar ao tocar.**

### Fundos & profundidade
- Ritmo alternado: `branco` ↔ `#f8fafc` ↔ `#f0f9ff` ↔ `navy`.
- Profundidade premium: gradientes radiais opostos + grade de pontos `radial-gradient(rgba(14,165,233,0.05) 1px, transparent 1px); background-size: 24px 24px` em `opacity-[0.5]`.

### Botões
- **Primário:** `bg-gradient-to-r from-[#0ea5e9] to-[#0284c7]`, `rounded-full`, `shadow-lg shadow-[#0ea5e9]/25`, hover `-translate-y-0.5` + glow; ícone de seta com `group-hover:translate-x-1`.
- **Outline:** `border border-[#0f2444] hover:bg-[#0f2444] hover:text-white`.
- **Ghost (sobre navy):** `border-white/25 hover:bg-white/[0.04]`.

### Cards
- Raio: `rounded-2xl` / `rounded-3xl`. Chips: `rounded-full`. Ícones internos: `rounded-lg`/`rounded-xl`.
- Borda: `ring-1` (novo) ou `border` (legado) em tons `#eef2f7`/`#e2e8f0`; hover clareia para `#bae6fd`/`#dbeafe`.
- Hover: `-translate-y-0.5`/`-translate-y-1` + transição da sombra. Sempre `transition-all duration-300`.

### Movimento
- Duração padrão: `duration-300`; easing `ease-out` em acordeão.
- Acordeão sem medir altura: técnica `grid-rows-[0fr] → grid-rows-[1fr]` com `overflow-hidden` no filho.
- Ícones de seta/chevron animam posição/rotação no hover/estado.

---

## 7. Tokens / Design System (fonte: `src/app/globals.css`)

Tokens declarados em `@theme inline` (Tailwind v4):

```
--color-navy-900: #0f2444   (base primária / texto títulos)
--color-navy-800: #1b3a6b   (gradientes navy)
--color-navy-700: #1e4080
--color-navy-600: #2952a3
--color-sky-500:  #0ea5e9   (sotaque / CTA)
--color-sky-400:  #38bdf8   (sotaque claro / hover)
--color-sky-100:  #e0f2fe   (fundos suaves)
--color-gold-500: #d4a827   (⚠️ definido, NÃO usado)
--color-gold-400: #e2be4a   (⚠️ definido, NÃO usado)
--font-sans:    var(--font-inter)
--font-heading: var(--font-merriweather)
```

**Cores fora dos tokens (hardcoded recorrentes — candidatas a tokenizar):**
`#0284c7` (gradiente CTA), `#0b1c38`/`#060f1e` (navy escuro Hero/Footer), `#f8fafc`/`#f0f9ff` (fundos), `#475569`/`#64748b`/`#334155` (texto secundário), `#25d366` (WhatsApp), `#f59e0b` (estrelas), `emerald-500` (status disponível).

**Tipografia:**
- Títulos/destaques numéricos: `.section-heading` → Merriweather (serifa). Pesos 300/400/700.
- Corpo: Inter, `-webkit-font-smoothing: antialiased`. Texto base `#1a1a2e`.
- Carregadas via `next/font/google` com `display: "swap"` e expostas por CSS var.

**Regras de Design System (obrigatórias para novas implementações):**

1. **Use tokens semânticos**, não hex avulso, sempre que existir token. Navy = estrutura; Sky = ação/realce.
2. **Títulos sempre `.section-heading`** (Merriweather). Nunca serifa no corpo.
3. **Header de seção = variante refinada** (§6). Não criar uma terceira variação.
4. **Sombras = geração nova difusa** (§6). Proibido `shadow-md`/`lg` em código novo.
5. **CTA principal = botão primário gradiente** apontando para `#contato`/WhatsApp.
6. **Toda transição = `duration-300`**; hover de card = elevação ≤ `translate-y-1`.
7. **Links externos:** `target="_blank"` + `rel="noopener noreferrer"` + `aria-label` quando o texto não basta.
8. **Imagens:** `next/image` sempre; `priority` apenas no Hero; `alt` descritivo.
9. **Acessibilidade:** controles interativos com `aria-expanded`/estado; respeitar contraste AA.
10. **pt-BR** em todo texto de produto.

---

## 8. Decisões importantes (decision log)

| # | Decisão | Racional | Status |
|---|---------|----------|--------|
| 1 | **Single-page por âncoras** (sem rotas) | Jornada de conversão linear; SEO local concentrado | Ativo |
| 2 | **FAQ em coluna única**, não 2 colunas | Acordeão em 2 colunas desalinha ao expandir; referências premium usam 1 coluna | Ativo |
| 3 | **Acordeão abre 1 item por vez** | Foco e previsibilidade de leitura | Ativo (revisável) |
| 4 | **Sombras difusas substituem `shadow-*`** | Profundidade orgânica "sentida, não vista" | Em migração |
| 5 | **Badge "Destaque" removido** de Especialidades | Reduzir ruído; manter realce só por ring/elevação | Ativo |
| 6 | **Dados de contato reais** (3 unidades) + convênios + RQE/CRM | Confiança e precisão | Ativo |
| 7 | **Sem formulário de contato** (só telefone/WhatsApp/mapa) | Menos fricção; canais que o paciente já usa | Ativo |
| 8 | **Crédito do desenvolvedor no footer** → `urlandipre.com` | Assinatura profissional | Ativo |
| 9 | **next/font + tokens em `@theme inline`** | Performance de fonte + Design System nativo Tailwind v4 | Ativo |

---

## 9. Estratégia mobile

**Abordagem:** mobile-first com breakpoints Tailwind (`md:` ≈ 768px, `lg:` ≈ 1024px).

- **Navbar:** menu hamburger abaixo de `lg`; painel mobile com links empilhados + CTA. Header fixo encolhe ao rolar (`py-5` → `py-2.5`).
- **Hero:** `grid md:grid-cols-2` → empilha no mobile. Texto centralizado no mobile (`text-center md:text-left`); foto abaixo. Métricas em `grid-cols-3` sempre.
- **Grids de seção:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` (Doenças/Depoimentos) e `md:grid-cols-3` (Especialidades/Contato) colapsam graciosamente.
- **Alvos de toque:** telefones (`tel:`), WhatsApp (`wa.me`) e mapa são botões/links amplos — bom para dedo.
- **Tipografia fluida:** títulos `text-4xl md:text-5xl lg:text-6xl` (Hero) e `text-4xl md:text-[2.75rem]` (seções).
- **Footer:** `flex-col md:flex-row`; conteúdo centralizado no mobile, distribuído no desktop.

**Lacunas mobile a auditar:** estados de foco em teclado, `prefers-reduced-motion`, tamanho mínimo de toque (44px) nos chips/ícones pequenos, e overflow horizontal das grades de pontos de fundo.

---

## 10. Oportunidades futuras

**Design System / código (prioridade alta):**
- [ ] **Extrair `SectionHeading`, `Button`, `Card`, `Chip`, `Icon`** — eliminar duplicação inline.
- [ ] **Migrar seções legadas** (Sobre, Depoimentos, Convenios, Contato) para header refinado + sombras difusas.
- [ ] **Tokenizar** cores hardcoded recorrentes e sombras (CSS vars/`@theme`).
- [ ] **Decidir sobre o gold** (`--color-gold-*`): usar como sotaque de luxo ou remover.

**Conteúdo (substituir placeholders — ver §11):**
- [ ] Formação acadêmica real (datas/instituições).
- [ ] Depoimentos reais (com consentimento) + trust badges verificáveis.
- [ ] Métricas do Hero verificadas (anos, nº de cirurgias, satisfação).
- [ ] Preencher número de CRM no subtítulo do Footer (hoje "CRM •").

**Acessibilidade & qualidade:**
- [ ] Auditoria de contraste AA; estados `focus-visible`; suporte a `prefers-reduced-motion`.
- [ ] `alt` revisados; skip-link para conteúdo.

**SEO & dados estruturados:**
- [ ] JSON-LD `Physician`/`MedicalClinic` (nome, especialidade, endereços, telefones).
- [ ] Open Graph / imagem de compartilhamento; `metadataBase`, canonical.
- [ ] `sitemap.ts` + `robots.ts` (App Router).

**Performance:**
- [ ] Conferir `sizes` das imagens; lazy onde não for crítico (apenas Hero `priority`).
- [ ] Evitar custo de re-render no `Navbar` (scroll listener) — throttle se necessário.

**Produto (médio prazo):**
- [ ] Integração de agendamento online (1 clique → calendário).
- [ ] Analytics/eventos de conversão nos CTAs.
- [ ] Conteúdo educativo (blog) para SEO de cauda longa, se virar objetivo.

---

## 11. Status de conteúdo (real vs. placeholder)

> ⚠️ **Crítico para um site médico:** dados fictícios podem ter implicações éticas/regulatórias (CFM). Validar com o cliente antes de publicar.

| Conteúdo | Onde | Status |
|----------|------|--------|
| Nome, especialidades, CRM 9607 ES, RQE 9954/8307 | Hero, Sobre | ✅ Real |
| 3 unidades de atendimento (endereço/telefone/WhatsApp/mapa) | Contato | ✅ Real |
| Convênios (Bradesco, Amil, Cassi, Geap, Unimed Vitória) | Convenios | ✅ Real |
| Instagram `@drdoglasmarchesi` | Footer | ✅ Real |
| Doenças tratadas (15) e procedimentos | Doenças, Procedimentos | ✅ Plausível (validar) |
| **Formação acadêmica** (anos/instituições) | Sobre | ❌ Placeholder genérico |
| **Depoimentos** (6) + trust badges (4.9/5, 500+, 98%) | Depoimentos | ❌ Exemplos fictícios |
| **Métricas do Hero** (15+, 2.000+, 98%) | Hero | ❌ Não verificadas |
| Subtítulo "CRM •" do Footer | Footer | ⚠️ Número faltando |

---

## 12. Guia AI-first (como trabalhar neste repo)

Para qualquer agente/IA que for implementar ou refinar:

1. **Leia este documento primeiro.** Ele é a fonte de verdade de UX e Design System.
2. **Respeite as regras do §7** (tokens, header canônico, sombras difusas, motion 300ms).
3. **Ao tocar uma seção legada, migre-a** para os padrões novos (não propague o legado).
4. **Refinamentos premium são sutis:** elevação mínima, glow discreto, nada neon. "Sentido, não visto."
5. **Nunca invente dados médicos.** Conteúdo placeholder (§11) só é substituído com informação fornecida pelo cliente.
6. **Componentes interativos exigem `"use client"`** (padrão: Navbar, FAQ). O resto é Server Component.
7. **Atualize as seções relevantes deste arquivo** (decision log §8, status §11, oportunidades §10) na mesma tarefa em que mudar o site.
8. **Verifique em `localhost:3000`** após mudanças visuais; confira mobile (`md`/`lg`).

---

*Fim do documento. Mantenha-o vivo.*
