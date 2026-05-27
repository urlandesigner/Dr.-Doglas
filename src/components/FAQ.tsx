"use client";

import { useState } from "react";
import { faqs } from "@/lib/faq";

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
