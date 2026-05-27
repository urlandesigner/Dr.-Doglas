import { DotPattern } from "./ui/dot-pattern";

const depoimentos = [
  {
    nome: "Luciane Rodrigues",
    cirurgia: "Cirurgia Bariátrica",
    texto:
      "O Dr. Douglas fiz bariátrica e estou ótima dr. Está de parabéns maravilhosa cirurgia. Tudo maravilhoso. Queria muito falar qualquer ora sobre isso. Sobre a bariátrica. Que para mim foi muito importante.",
    estrelas: 5,
  },
  {
    nome: "Cirlene Pires Schuberth",
    cirurgia: "Acompanhamento cirúrgico",
    texto:
      "Vc e Dr Otávio foram um anjo na minha vida nas minhas orações nunca vou esquecer de pedir a Deus por vcs",
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

function Card({ dep }: { dep: typeof depoimentos[0] }) {
  return (
    <div className="bg-[#f5f5f4] rounded-2xl p-6 flex flex-col">
      <Estrelas n={dep.estrelas} />
      <p className="text-text-body text-sm leading-relaxed mt-4 mb-6 flex-1">
        &ldquo;{dep.texto}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-black/5">
        <div className="w-9 h-9 rounded-full bg-[#0f2444] flex items-center justify-center shrink-0">
          <span className="text-text-on-dark text-xs font-bold">{dep.nome[0]}</span>
        </div>
        <div>
          <p className="font-semibold text-text-title text-sm">{dep.nome}</p>
          <p className="text-[#0ea5e9] text-xs">{dep.cirurgia}</p>
        </div>
      </div>
    </div>
  );
}

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-14 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[#B79853] text-sm font-semibold tracking-widest uppercase">
            Histórias reais
          </span>
          <h2 className="section-heading text-4xl font-bold text-text-title mt-2">
            O que dizem nossos pacientes
          </h2>
          <div className="w-16 h-0.5 bg-[#B79853] mx-auto mt-5" />
        </div>
      </div>

      {/* Mobile: marquee automático */}
      <div className="md:hidden">
        <div className="flex animate-depo-scroll gap-4 w-max">
          {[...depoimentos, ...depoimentos].map((dep, i) => (
            <div key={i} className="w-[272px] shrink-0">
              <Card dep={dep} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: grid */}
      <div className="hidden md:block max-w-7xl mx-auto px-6">
        <div className="relative">
          <DotPattern className="-top-7 -left-7 w-24 h-24 opacity-50" />
          <DotPattern className="-bottom-7 -right-7 w-24 h-24 opacity-50" />
          <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {depoimentos.map((dep) => (
              <Card key={dep.nome} dep={dep} />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
