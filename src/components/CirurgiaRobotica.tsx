import Image from "next/image";

// Troque por "/images/medico5.mp4" se preferir o vídeo maior em destaque.
const VIDEO_DESTAQUE = "/images/medico4.mp4";

const beneficios = [
  "Precisão milimétrica com os braços robóticos",
  "Visão tridimensional ampliada em alta definição",
  "Incisões menores e cicatrizes discretas",
  "Menos dor e menor perda de sangue",
  "Recuperação mais rápida e retorno precoce às atividades",
  "Menor risco de complicações e infecções",
];

const galeria = [
  {
    src: "/images/medico1.jpeg",
    legenda: "Procedimento com o sistema cirúrgico robótico",
  },
  {
    src: "/images/mdico2.jpeg",
    legenda: "No console, controlando os braços robóticos",
  },
  {
    src: "/images/medico3.jpeg",
    legenda: "Treinamento contínuo em simulador robótico",
  },
];

function Check() {
  return (
    <svg
      className="h-3 w-3"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function CirurgiaRobotica() {
  return (
    <section
      id="robotica"
      className="relative overflow-hidden bg-[#0b1c38] py-14 md:py-28"
    >
      {/* Glows ambiente */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-[#0ea5e9]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-16 bottom-1/4 h-72 w-72 rounded-full bg-brand/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Cabeçalho */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
            Tecnologia de ponta
          </span>
          <h2 className="section-heading mt-3 text-4xl font-bold leading-tight text-white md:text-[2.75rem]">
            Cirurgia Robótica
          </h2>
          <div className="mx-auto mt-5 h-0.5 w-12 bg-brand" />
          <p className="mx-auto mt-7 leading-relaxed text-white/65">
            O que há de mais avançado em cirurgia minimamente invasiva. Com o
            sistema cirúrgico robótico, o Dr. Doglas realiza procedimentos com
            precisão milimétrica — mais segurança no centro cirúrgico e uma
            recuperação mais tranquila para você.
          </p>
        </div>

        {/* Vídeo em destaque + benefícios */}
        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-14">
          {/* Vídeo */}
          <div className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl shadow-2xl shadow-black/50 ring-1 ring-white/10 md:mx-0">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/images/medico1.jpeg"
                aria-label="Cirurgia robótica em andamento"
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src={VIDEO_DESTAQUE} type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1c38]/45 via-transparent to-transparent" />
              <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#38bdf8] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0ea5e9]" />
                </span>
                Ao vivo no centro cirúrgico
              </span>
            </div>
          </div>

          {/* Benefícios */}
          <div className="text-center md:text-left">
            <h3 className="section-heading text-2xl font-bold text-white md:text-3xl">
              Por que a cirurgia robótica?
            </h3>
            <p className="mt-3 text-white/60">
              Mais controle para o cirurgião, menos impacto para o paciente.
            </p>
            <ul className="mt-7 grid gap-3.5 text-left sm:grid-cols-1">
              {beneficios.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-[15px] leading-snug text-white/85"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <Check />
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <a
              href="#contato"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0ea5e9]/25 transition-all duration-300 hover:from-[#38bdf8] hover:to-[#0ea5e9] hover:shadow-xl hover:shadow-[#0ea5e9]/40"
            >
              Converse sobre a cirurgia robótica
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

        {/* Galeria — provas reais */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3 md:mt-20">
          {galeria.map((g) => (
            <figure
              key={g.src}
              className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={g.src}
                  alt={g.legenda}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 flex items-start gap-2.5 p-5 text-sm font-medium leading-snug text-white">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                {g.legenda}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
