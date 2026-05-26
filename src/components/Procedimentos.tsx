"use client";

import { useState } from "react";

const ACCENT = "#B79853";

const grupos = [
  {
    categoria: "Cirurgia Bariátrica",
    cor: "#0ea5e9",
    items: [
      { nome: "Bypass Gástrico", desc: "Redução e desvio gástrico com excelentes resultados a longo prazo." },
      { nome: "Sleeve Gástrico", desc: "Redução do volume estomacal preservando o funcionamento natural." },
      { nome: "Revisão Bariátrica", desc: "Correção ou conversão de cirurgias bariátricas anteriores." },
    ],
  },
  {
    categoria: "Hérnias e Parede Abdominal",
    cor: "#1b3a6b",
    items: [
      { nome: "Hérnia Inguinal", desc: "Correção por técnica aberta ou minimamente invasiva (vídeo e robótica)." },
      { nome: "Hérnia Umbilical", desc: "Reparo da hérnia da região do umbigo, com ou sem tela." },
      { nome: "Hérnia Epigástrica", desc: "Correção de hérnias da linha média superior do abdome." },
      { nome: "Hérnia Incisional", desc: "Reparo de hérnias surgidas em cicatrizes de cirurgias anteriores." },
      { nome: "Diástase do Reto Abdominal", desc: "Correção do afastamento dos músculos retos do abdome." },
    ],
  },
  {
    categoria: "Aparelho Digestivo",
    cor: "#0f766e",
    items: [
      { nome: "Refluxo Gastroesofágico (DRGE)", desc: "Tratamento cirúrgico da DRGE (fundoplicatura)." },
      { nome: "Colecistectomia", desc: "Retirada da vesícula biliar por videolaparoscopia." },
      { nome: "Cirurgia Oncológica Digestiva", desc: "Tumores de esôfago, estômago, intestinos, fígado, pâncreas e baço." },
    ],
  },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className="w-4 h-4 shrink-0 transition-transform duration-300"
      style={{ transform: open ? "rotate(180deg)" : "none" }}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function Coluna({ grupo }: { grupo: (typeof grupos)[number] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      {/* Category label */}
      <div className="relative flex items-center gap-2.5 mb-1 pb-3">
        <span
          className="w-2 h-2 rounded-full shrink-0"
          style={{ backgroundColor: grupo.cor, opacity: 0.65 }}
        />
        <h3
          className="text-[13px] font-bold uppercase tracking-[0.15em] section-heading"
          style={{ color: grupo.cor, opacity: 0.82 }}
        >
          {grupo.categoria}
        </h3>
        <span
          className="absolute bottom-0 left-0 h-px w-full"
          style={{
            background: `linear-gradient(90deg, ${grupo.cor}88, ${grupo.cor}18 55%, transparent)`,
          }}
        />
      </div>

      {/* Accordion list */}
      <div>
        {grupo.items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.nome} className="border-b border-black/[0.06] last:border-b-0">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="group w-full flex items-center justify-between gap-3 py-3.5 text-left"
              >
                <span
                  className={`text-[15px] font-medium transition-colors duration-200 ${
                    isOpen ? "text-text-title" : "text-text-title/80 group-hover:text-text-title"
                  }`}
                >
                  {item.nome}
                </span>
                <span
                  className="transition-opacity duration-200"
                  style={{ color: ACCENT, opacity: isOpen ? 0.9 : 0.4 }}
                >
                  <Chevron open={isOpen} />
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-[13px] text-text-body/65 leading-relaxed pr-7 pb-4">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Procedimentos() {
  return (
    <section
      id="procedimentos"
      className="relative py-14 md:py-24"
      style={{
        background:
          "radial-gradient(ellipse at 72% 0%, rgba(183,152,83,0.055) 0%, transparent 52%), radial-gradient(ellipse at 4% 100%, rgba(15,36,68,0.04) 0%, transparent 48%), #ffffff",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-[#B79853] text-xs font-semibold tracking-[0.25em] uppercase">
            O que realizamos
          </span>
          <h2 className="section-heading text-4xl md:text-[2.75rem] font-bold text-text-title mt-3 leading-tight">
            Procedimentos
          </h2>
          <div className="w-12 h-0.5 bg-[#B79853] mx-auto mt-5" />
          <p className="text-text-body mt-7 max-w-xl mx-auto leading-relaxed">
            Cirurgias realizadas com técnicas modernas e minimamente invasivas —
            videolaparoscopia e cirurgia robótica — para uma recuperação mais
            rápida e segura.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-x-12 gap-y-14 items-start">
          {grupos.map((grupo) => (
            <Coluna key={grupo.categoria} grupo={grupo} />
          ))}
        </div>

        {/* CTA banner */}
        <div
          className="relative overflow-hidden mt-20 rounded-3xl px-8 py-8 text-center text-text-on-dark shadow-[0_36px_80px_-36px_rgba(15,36,68,0.55)]"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(56,189,248,0.18), transparent 55%), linear-gradient(135deg, #0f2444, #1b3a6b 55%, #0f2444)",
          }}
        >
          <h3 className="section-heading text-2xl font-bold text-text-on-dark mb-2.5">
            Precisa de uma avaliação cirúrgica?
          </h3>
          <p className="text-text-on-dark mb-5 max-w-lg mx-auto leading-relaxed">
            Agende sua consulta e receba uma avaliação completa e individualizada
            com o Dr. Doglas Marchesi.
          </p>
          <a
            href="#contato"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] px-8 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg shadow-[#0ea5e9]/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#0ea5e9]/35"
          >
            Agendar Agora
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
