import { DotPattern } from "./ui/dot-pattern";

const depoimentos = [
  {
    nome: "Maria S.",
    cirurgia: "Bypass Gástrico",
    texto:
      "O Dr. Doglas transformou minha vida. Perdi 45kg em um ano e hoje tenho saúde e disposição que não tinha há décadas. O acompanhamento foi impecável do início ao fim.",
    estrelas: 5,
  },
  {
    nome: "Roberto A.",
    cirurgia: "Colecistectomia",
    texto:
      "Fui operado de urgência pelo Dr. Doglas e fiquei impressionado com a competência e tranquilidade que ele transmitiu. Recuperação rápida e sem complicações.",
    estrelas: 5,
  },
  {
    nome: "Carla M.",
    cirurgia: "Sleeve Gástrico",
    texto:
      "Tentei emagrecer por anos sem sucesso. Com o sleeve e o suporte do Dr. Marchesi, alcancei meu peso ideal e resolvi o diabetes tipo 2. Recomendo de olhos fechados.",
    estrelas: 5,
  },
  {
    nome: "José L.",
    cirurgia: "Fundoplicatura",
    texto:
      "Sofria com refluxo severo há mais de 10 anos. Após a cirurgia com o Dr. Doglas, minha qualidade de vida melhorou imensamente. Profissional excepcional.",
    estrelas: 5,
  },
  {
    nome: "Ana P.",
    cirurgia: "Herniorrafia",
    texto:
      "Cirurgia minimamente invasiva, sem dor no pós-operatório e retornei ao trabalho em uma semana. O Dr. Doglas é muito atencioso e cuidadoso com os pacientes.",
    estrelas: 5,
  },
  {
    nome: "Fernando R.",
    cirurgia: "Bypass Gástrico",
    texto:
      "Já faz 3 anos da minha cirurgia bariátrica e mantive o resultado. O Dr. Doglas me acompanhou em cada etapa. É um profissional que se importa de verdade.",
    estrelas: 5,
  },
];

function Estrelas({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#f59e0b]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#B79853] text-sm font-semibold tracking-widest uppercase">
            Histórias reais
          </span>
          <h2 className="section-heading text-4xl font-bold text-text-title mt-2">
            O que dizem nossos pacientes
          </h2>
          <div className="w-16 h-0.5 bg-[#B79853] mx-auto mt-5" />
        </div>

        <div className="relative">
          <DotPattern className="-top-7 -left-7 w-24 h-24 opacity-50" />
          <DotPattern className="-bottom-7 -right-7 w-24 h-24 opacity-50" />
          <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {depoimentos.map((dep) => (
            <div
              key={dep.nome}
              className="bg-[#f5f5f4] rounded-2xl p-6 hover:-translate-y-1 transition-all duration-200"
            >
              <Estrelas n={dep.estrelas} />

              <p className="text-text-body text-sm leading-relaxed mt-4 mb-6">
                &ldquo;{dep.texto}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4">
                <div className="w-9 h-9 rounded-full bg-[#0f2444] flex items-center justify-center">
                  <span className="text-text-on-dark text-xs font-bold">{dep.nome[0]}</span>
                </div>
                <div>
                  <p className="font-semibold text-text-title text-sm">{dep.nome}</p>
                  <p className="text-[#0ea5e9] text-xs">{dep.cirurgia}</p>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {[
            { valor: "4.9/5", desc: "Avaliação média" },
            { valor: "500+", desc: "Avaliações verificadas" },
            { valor: "98%", desc: "Recomendariam o Dr. Doglas" },
          ].map((badge) => (
            <div key={badge.desc} className="text-center">
              <div className="text-text-title font-bold text-2xl section-heading">{badge.valor}</div>
              <div className="text-text-body text-sm">{badge.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
