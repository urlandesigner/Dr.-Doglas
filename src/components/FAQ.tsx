"use client";

import { useState } from "react";

const faqs = [
  {
    pergunta: "O Dr. Doglas atende por convênio?",
    resposta:
      "Sim. Atendemos os principais planos de saúde, incluindo Bradesco Saúde, Amil, Cassi, Geap Saúde e Unimed Vitória. Recomendamos confirmar a cobertura do seu plano no momento do agendamento.",
  },
  {
    pergunta: "Como funciona a primeira consulta?",
    resposta:
      "Na primeira consulta é feita uma avaliação clínica completa: histórico de saúde, exame físico e análise de exames anteriores. A partir disso, definimos um plano de tratamento individualizado e esclarecemos todas as suas dúvidas.",
  },
  {
    pergunta: "As cirurgias são minimamente invasivas?",
    resposta:
      "Sempre que indicado, os procedimentos são realizados por videolaparoscopia — técnica minimamente invasiva que proporciona menos dor, cicatrizes menores, internação mais curta e recuperação mais rápida.",
  },
  {
    pergunta: "Quais são os critérios para a cirurgia bariátrica?",
    resposta:
      "A indicação considera o IMC, condições associadas (como diabetes e hipertensão) e o histórico de tratamentos clínicos. A avaliação é multidisciplinar e cada caso é analisado individualmente antes da decisão cirúrgica.",
  },
  {
    pergunta: "A cirurgia bariátrica é coberta pelo convênio?",
    resposta:
      "A cobertura depende do seu plano e do cumprimento dos critérios exigidos. Nossa equipe orienta sobre a documentação e os exames necessários para solicitar a autorização junto ao convênio.",
  },
  {
    pergunta: "Onde são realizados os atendimentos e as cirurgias?",
    resposta:
      "Os atendimentos acontecem no Hospital Meridional (Cariacica), no Centro de Especialidades Praia da Costa (Vila Velha) e na NeuroMind (Vitória). As cirurgias são realizadas em ambiente hospitalar com estrutura completa.",
  },
  {
    pergunta: "Preciso de encaminhamento para marcar a consulta?",
    resposta:
      "Não é obrigatório. Você pode agendar diretamente a sua consulta. Caso possua encaminhamento ou exames recentes, traga-os para enriquecer a avaliação.",
  },
  {
    pergunta: "A consulta inclui retorno?",
    resposta:
      "Sim. O acompanhamento pós-consulta faz parte do cuidado. O retorno é orientado conforme cada caso, garantindo a continuidade e a segurança do tratamento.",
  },
  {
    pergunta: "Como faço para agendar?",
    resposta:
      "O agendamento pode ser feito por telefone ou WhatsApp das unidades de atendimento. Basta acessar a seção de contato e escolher a unidade mais próxima de você.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <span
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ring-1 transition-all duration-300 ${
        open
          ? "bg-brand text-white ring-brand"
          : "bg-brand-light text-brand ring-brand/20 group-hover:ring-brand/40"
      }`}
    >
      <svg
        className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
      </svg>
    </span>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-14 md:py-24 bg-white">
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <div className="text-center mb-14">
          <span className="text-[#B79853] text-xs font-semibold tracking-[0.25em] uppercase">
            Tire suas dúvidas
          </span>
          <h2 className="section-heading text-4xl md:text-[2.75rem] font-bold text-text-title mt-3 leading-tight">
            Perguntas Frequentes
          </h2>
          <div className="w-12 h-0.5 bg-[#B79853] mx-auto mt-5" />
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div
                key={faq.pergunta}
                className="group rounded-2xl bg-[#f5f5f4] transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : index)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-[15px] font-semibold text-text-title">
                    {faq.pergunta}
                  </span>
                  <ChevronIcon open={open} />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-text-body">
                      {faq.resposta}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-text-body text-sm mt-12">
          Ainda com dúvidas?{" "}
          <a href="#contato" className="text-[#0ea5e9] font-medium hover:underline">
            Fale com a nossa equipe
          </a>
          .
        </p>
      </div>
    </section>
  );
}
