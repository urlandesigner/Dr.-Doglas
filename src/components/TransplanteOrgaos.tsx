import Image from "next/image";

const destaques = [
  {
    titulo: "Uma missão coletiva",
    descricao:
      "A captação de órgãos envolve muitos profissionais capacitados — cirurgiões, anestesiologistas, intensivistas e coordenadores atuando em conjunto.",
  },
  {
    titulo: "Logística ágil e precisa",
    descricao:
      "Cada etapa é executada com velocidade para que o tempo de isquemia de cada órgão não seja ultrapassado — do hospital doador ao receptor.",
  },
  {
    titulo: "Captação em todo o Brasil",
    descricao:
      "A equipe da qual o Dr. Doglas faz parte atua em hospitais de diversas regiões do país, seguindo os critérios do Sistema Nacional de Transplantes.",
  },
];

function IconEquipe() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 20h5v-2a4 4 0 00-5.656-3.657M9 20H4v-2a4 4 0 015.656-3.657M15 7a4 4 0 11-8 0 4 4 0 018 0zm6 3a3 3 0 11-6 0 3 3 0 016 0zm-18 0a3 3 0 116 0 3 3 0 01-6 0z"
      />
    </svg>
  );
}

function IconMapa() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
      />
    </svg>
  );
}

function IconProtocolo() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );
}

const icones = [IconEquipe, IconMapa, IconProtocolo];

export default function TransplanteOrgaos() {
  return (
    <section id="transplante" className="relative overflow-hidden bg-white py-14 md:py-28">
      {/* Faixa decorativa lateral */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#0ea5e9]/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-20">
          {/* Imagem */}
          <div className="relative order-2 md:order-1">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-[#0b1c38]/15 ring-1 ring-[#0b1c38]/8">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/captacao.webp"
                  alt="Equipe de captação de órgãos em atuação"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c38]/60 via-transparent to-transparent" />
              </div>

              {/* Badge flutuante */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl bg-white/90 px-5 py-3.5 shadow-lg backdrop-blur-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0b1c38] text-white">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-[13px] font-bold text-[#0b1c38]">Transplante de Órgãos</p>
                  <p className="text-[11px] text-[#64748b]">Captação em todo o território nacional</p>
                </div>
              </div>
            </div>

            {/* Detalhe geométrico */}
            <div className="pointer-events-none absolute -bottom-6 -left-6 h-36 w-36 rounded-3xl border-2 border-[#0ea5e9]/20 -z-10" />
            <div className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-2xl bg-[#B79853]/8 -z-10" />
          </div>

          {/* Conteúdo */}
          <div className="order-1 md:order-2">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B79853]">
              Alta complexidade
            </span>
            <h2 className="section-heading mt-3 text-4xl font-bold leading-tight text-[#0b1c38] md:text-[2.6rem]">
              Transplante de Órgãos
            </h2>
            <div className="mt-5 h-0.5 w-12 bg-[#B79853]" />

            <p className="mt-7 leading-relaxed text-[#475569]">
              A captação de órgãos para os transplantes é uma missão que envolve
              muitos profissionais capacitados. O Dr. Doglas Gobbi Marchesi integra
              essa equipe, atuando ativamente em captações realizadas em hospitais
              de diversas regiões do Brasil.
            </p>

            <p className="mt-4 leading-relaxed text-[#475569]">
              A logística deve ser executada de maneira ágil para que o tempo de
              isquemia de cada órgão não seja ultrapassado — da captação até o
              receptor, cada minuto importa.
            </p>

            <p className="mt-5 text-[15px] font-semibold italic text-[#0b1c38]">
              &ldquo;O transplante renova a vida.&rdquo;
            </p>

            {/* Destaques */}
            <ul className="mt-9 space-y-5">
              {destaques.map((d, i) => {
                const Icone = icones[i];
                return (
                  <li key={d.titulo} className="flex gap-4">
                    <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0b1c38] text-white">
                      <Icone />
                    </span>
                    <div>
                      <p className="font-semibold text-[#0b1c38]">{d.titulo}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-[#64748b]">
                        {d.descricao}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contato"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0ea5e9]/20 transition-all duration-300 hover:from-[#38bdf8] hover:to-[#0ea5e9] hover:shadow-xl hover:shadow-[#0ea5e9]/35"
              >
                Entre em contato
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
