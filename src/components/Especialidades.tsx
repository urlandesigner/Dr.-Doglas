import Image from "next/image";
import { DotPattern } from "./ui/dot-pattern";

type Especialidade = {
  icon: string;
  image?: string;
  titulo: string;
  descricao: string;
  procedimentos: string[];
  destaque: boolean;
};

const especialidades: Especialidade[] = [
  {
    icon: "⚕️",
    image: "/images/digestive1.png",
    titulo: "Hérnias e Parede Abdominal",
    descricao:
      "Hérnias e diástase abdominal por via minimamente invasiva (vídeo e robótica).",
    procedimentos: ["Hérnias inguinais e umbilicais", "Hérnias incisionais", "Diástase do reto abdominal"],
    destaque: false,
  },
  {
    icon: "⚖️",
    image: "/images/scale.png",
    titulo: "Cirurgia Bariátrica",
    descricao:
      "Técnicas modernas e seguras para tratamento da obesidade.",
    procedimentos: ["Bypass gástrico", "Sleeve gástrico", "Revisão bariátrica"],
    destaque: true,
  },
  {
    icon: "🩺",
    image: "/images/stomach.png",
    titulo: "Aparelho Digestivo",
    descricao:
      "Esôfago, estômago, intestinos, fígado, pâncreas e baço — doenças benignas e oncológicas.",
    procedimentos: ["Refluxo gastroesofágico", "Colecistectomia (vesícula)", "Cirurgia oncológica digestiva"],
    destaque: false,
  },
];

const headerBase =
  "radial-gradient(circle at 22% 18%, rgba(56,189,248,0.16), transparent 55%), radial-gradient(circle at 85% 95%, rgba(14,165,233,0.10), transparent 50%), linear-gradient(145deg, #112a4d, #0b1d38)";
const headerDestaque =
  "radial-gradient(circle at 22% 18%, rgba(56,189,248,0.28), transparent 55%), radial-gradient(circle at 85% 95%, rgba(14,165,233,0.18), transparent 52%), linear-gradient(145deg, #163a66, #0d2347)";

function Check() {
  return (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg
      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

export default function Especialidades() {
  return (
    <section id="especialidades" className="py-14 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[#B79853] text-xs font-semibold tracking-[0.25em] uppercase">
            Áreas de atuação
          </span>
          <h2 className="section-heading text-4xl md:text-[2.75rem] font-bold text-text-title mt-4 leading-tight">
            Especialidades
          </h2>
          <div className="w-12 h-0.5 bg-[#B79853] mx-auto mt-5" />
          <p className="text-text-body mt-8 leading-relaxed">
            Tratamentos cirúrgicos especializados com as mais modernas técnicas
            minimamente invasivas.
          </p>
        </div>

        {/* Cards */}
        <div className="relative">
          <DotPattern className="-top-7 -left-7 w-24 h-24 opacity-50" />
          <DotPattern className="-bottom-7 -right-7 w-24 h-24 opacity-50" />
          <div className="relative grid md:grid-cols-3 gap-6 items-stretch">
          {especialidades.map((esp) => (
            <div
              key={esp.titulo}
              className={`group/card flex flex-col rounded-3xl overflow-hidden bg-[#f5f5f4] transition-all duration-300 ${
                esp.destaque ? "lg:-translate-y-3" : "hover:-translate-y-1"
              }`}
            >
              {/* Header */}
              <div
                className="relative px-7 pt-7 pb-6 text-text-on-dark"
                style={{ background: esp.destaque ? headerDestaque : headerBase }}
              >
                <div className="flex items-center mb-5">
                  <span className="relative inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 text-2xl overflow-hidden">
                    {esp.image ? (
                      <Image
                        src={esp.image}
                        alt=""
                        fill
                        sizes="48px"
                        className="object-contain p-1"
                      />
                    ) : (
                      esp.icon
                    )}
                  </span>
                </div>
                <h3 className="section-heading text-xl font-bold text-text-on-dark mb-2">{esp.titulo}</h3>
                <p className="text-text-on-dark text-[13px] leading-relaxed">{esp.descricao}</p>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 px-7 pt-6 pb-7">
                <h4 className="text-text-body font-semibold text-[11px] uppercase tracking-[0.16em] mb-4">
                  Principais procedimentos
                </h4>
                <ul className="space-y-3 mb-7">
                  {esp.procedimentos.map((proc) => (
                    <li key={proc} className="flex items-center gap-3 text-text-body text-sm">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-light text-brand shrink-0">
                        <Check />
                      </span>
                      {proc}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contato"
                  className={`group mt-auto w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    esp.destaque
                      ? "bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] text-white shadow-md shadow-[#0ea5e9]/20 hover:shadow-lg hover:shadow-[#0ea5e9]/30"
                      : "border border-[#e2e8f0] text-text-title hover:border-[#0f2444] hover:bg-[#0f2444] hover:text-white"
                  }`}
                >
                  Agendar Consulta
                  <Arrow />
                </a>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
