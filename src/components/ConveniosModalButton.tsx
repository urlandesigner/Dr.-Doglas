"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";

type ConveniosModalButtonProps = {
  unidade: string;
  planos: string[];
  contatoHref: string;
  contatoLabel: string;
  triggerClassName?: string;
};

function CloseIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3l7 3v5c0 4.7-2.8 8-7 10-4.2-2-7-5.3-7-10V6l7-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-5" />
    </svg>
  );
}

export default function ConveniosModalButton({
  unidade,
  planos,
  contatoHref,
  contatoLabel,
  triggerClassName,
}: ConveniosModalButtonProps) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const modal =
    open
      ? createPortal(
          <div
            className="fixed inset-0 z-[999] flex items-end justify-center bg-[#040b18]/75 px-3 pb-3 pt-10 backdrop-blur-md sm:items-center sm:p-6"
            role="presentation"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setOpen(false);
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              aria-describedby={descriptionId}
              className="relative flex max-h-[88dvh] w-full max-w-xl flex-col overflow-hidden rounded-t-[28px] bg-white shadow-2xl shadow-black/35 animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-6 duration-200 sm:max-h-[82vh] sm:rounded-3xl sm:slide-in-from-bottom-0"
              onMouseDown={(event) => event.stopPropagation()}
            >
              <div className="relative overflow-hidden bg-[#0f2444] px-6 pb-6 pt-7 text-text-on-dark">
                <div className="pointer-events-none absolute -right-16 -top-24 h-48 w-48 rounded-full bg-[#0ea5e9]/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 left-8 h-40 w-40 rounded-full bg-[#B79853]/20 blur-3xl" />

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Fechar convênios"
                  className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  <CloseIcon />
                </button>

                <div className="relative z-10">
                  <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d8bd75]">
                    <ShieldIcon />
                    Planos de saúde
                  </span>
                  <h3 id={titleId} className="section-heading mt-3 pr-10 text-2xl font-bold leading-tight">
                    {unidade}
                  </h3>
                  <p id={descriptionId} className="mt-3 max-w-md text-sm leading-relaxed text-white/80">
                    A cobertura pode variar conforme o plano, procedimento e autorização.
                    Confirme no momento do agendamento.
                  </p>
                </div>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6">
                {planos.length > 0 ? (
                  <ul className="flex flex-wrap gap-2.5">
                    {planos.map((plano) => (
                      <li
                        key={`${unidade}-${plano}`}
                        className="rounded-full border border-[#eceae8] bg-[#f6f6f4] px-3.5 py-1.5 text-sm font-medium text-text-title"
                      >
                        {plano}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="rounded-2xl bg-[#f6f6f4] p-5 text-sm leading-relaxed text-text-body">
                    Esta unidade não possui uma lista pública de convênios no momento.
                    Entre em contato para confirmar disponibilidade e condições de atendimento.
                  </div>
                )}

                {/* Adendo reembolso */}
                <div className="mt-5 flex items-start gap-3 rounded-2xl border border-[#d8bd75]/40 bg-[#fdf8ee] px-4 py-3.5">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#B79853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z" />
                  </svg>
                  <p className="text-[13px] leading-relaxed text-[#7a5c1e]">
                    <span className="font-semibold">Atendemos outros planos via reembolso</span> em todos os
                    locais. Consulte as condições no momento do agendamento.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 border-t border-[#eceae8] bg-[#fafaf9] px-6 py-5 sm:flex-row">
                <a
                  href={contatoHref}
                  target={contatoHref.startsWith("http") ? "_blank" : undefined}
                  rel={contatoHref.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex flex-1 items-center justify-center rounded-xl bg-[#0f2444] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1b3a6b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                >
                  {contatoLabel}
                </a>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex flex-1 items-center justify-center rounded-xl border border-[#0f2444] px-4 py-3 text-sm font-semibold text-text-title transition-colors hover:bg-[#0f2444] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                >
                  Voltar
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          triggerClassName ??
          "inline-flex items-center justify-center gap-2 border border-[#e2e8f0] text-text-title hover:border-[#0f2444] hover:bg-[#0f2444] hover:text-white font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        }
      >
        Convênios aceitos
      </button>

      {modal}
    </>
  );
}
