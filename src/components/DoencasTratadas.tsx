const doencas = [
  "Esôfago",
  "Estômago",
  "Intestinos",
  "Fígado",
  "Pâncreas",
  "Baço",
];

export default function DoencasTratadas() {
  return (
    <section id="doencas" className="relative py-24 bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-[#B79853] text-xs font-semibold tracking-[0.25em] uppercase">
            Condições que tratamos
          </span>
          <h2 className="section-heading text-4xl md:text-[2.75rem] font-bold text-text-title mt-3 leading-tight">
            Doenças do aparelho digestivo
          </h2>
          <div className="w-12 h-0.5 bg-[#B79853] mx-auto mt-5" />
          <p className="text-text-body mt-7 max-w-xl mx-auto leading-relaxed">
            Diagnóstico e tratamento cirúrgico especializado para doenças
            benignas e oncológicas (câncer) dos órgãos do aparelho digestivo e
            do abdome.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand text-xs font-semibold px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              Doenças benignas
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0f2444]/10 text-[#0f2444] text-xs font-semibold px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0f2444]" />
              Oncológicas — Câncer
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {doencas.map((doenca) => (
            <div
              key={doenca}
              className="group relative overflow-hidden flex items-center gap-3 rounded-xl bg-[#f5f5f4] border border-[#e7e5e4] px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#e7e5e4] hover:shadow-[0_14px_34px_-20px_rgba(15,36,68,0.18)]"
            >
              {/* Acento lateral editorial — cresce no hover */}
              <span className="absolute left-0 top-1/2 h-0 w-[2px] -translate-y-1/2 rounded-full bg-gradient-to-b from-brand to-brand-dark transition-all duration-300 group-hover:h-7" />

              {/* Marcador discreto — secundário ao nome */}
              <span className="inline-flex w-7 h-7 items-center justify-center rounded-lg bg-brand/10 text-brand shrink-0 transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:scale-105">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>

              <span className="text-text-title font-semibold text-[13px] leading-snug tracking-[-0.01em] transition-transform duration-300 group-hover:translate-x-0.5">
                {doenca}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-text-body text-sm mt-12">
          Não encontrou sua condição?{" "}
          <a href="#contato" className="text-[#0ea5e9] font-medium hover:underline">
            Entre em contato
          </a>{" "}
          para uma avaliação individualizada.
        </p>
      </div>
    </section>
  );
}
