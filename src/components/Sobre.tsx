import { ShowcaseCard } from "@/components/ui/showcase-card";

const formacoes = [
  { ano: "2005", titulo: "Graduação em Medicina", inst: "Universidade Federal" },
  { ano: "2008", titulo: "Residência em Cirurgia Geral", inst: "Hospital das Clínicas" },
  { ano: "2010", titulo: "Fellowship em Cirurgia Bariátrica", inst: "Hospital das Clínicas" },
  { ano: "2012", titulo: "Especialização – Aparelho Digestivo", inst: "CBCD" },
];

const memberships = [
  "Conselho Federal de Medicina (CRM)",
  "Colégio Brasileiro de Cirurgiões (CBC)",
  "Sociedade Brasileira de Cirurgia Bariátrica (SBCBM)",
  "Colégio Brasileiro de Cirurgia Digestiva (CBCD)",
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-14 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#B79853] text-sm font-semibold tracking-widest uppercase">
            Conheça o especialista
          </span>
          <h2 className="section-heading text-4xl font-bold text-text-title mt-2">
            Sobre o Dr. Doglas
          </h2>
          <div className="w-16 h-0.5 bg-[#B79853] mx-auto mt-5" />
        </div>

        {/* Card azul — protagonista, centralizado */}
        <div className="max-w-4xl mx-auto">
          <ShowcaseCard
            brandName="CRM 9607 ES · RQE 9954 · RQE 8307"
            heading="Dr. Doglas Gobbi Marchesi"
            description="Com mais de 15 anos dedicados à cirurgia, é referência regional em cirurgia bariátrica e do aparelho digestivo. Compromisso com o melhor tratamento cirúrgico aliado ao acolhimento humano."
            imageUrl="/images/image-doglas.png"
            imageAlt="Dr. Doglas Gobbi Marchesi"
            services={["Cirurgia Geral", "Bariátrica", "Aparelho Digestivo"]}
            ctaText="Agendar consulta"
            ctaHref="#contato"
          />
        </div>

        {/* Credenciais — Formação + Associações lado a lado */}
        <div className="max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Formação Acadêmica */}
          <div>
            <h4 className="text-text-title font-bold text-lg mb-6">Formação Acadêmica</h4>
            <div className="relative">
              <div className="absolute left-[22px] top-0 bottom-0 w-px bg-[#e2e8f0]" />
              <ul className="space-y-7">
                {formacoes.map((f, i) => (
                  <li key={i} className="flex gap-5 relative">
                    <div className="w-11 h-11 rounded-full bg-[#0f2444] border-4 border-white shadow-md flex items-center justify-center shrink-0 z-10">
                      <span className="text-text-on-dark text-[10px] font-bold">{f.ano}</span>
                    </div>
                    <div className="pt-1.5">
                      <p className="font-semibold text-text-title">{f.titulo}</p>
                      <p className="text-text-body text-sm mt-0.5">{f.inst}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Associações e Conselhos + Facilidades */}
          <div>
            <h4 className="text-text-title font-bold text-lg mb-6">Associações e Conselhos</h4>
            <ul className="space-y-4">
              {memberships.map((m) => (
                <li key={m} className="flex items-center gap-3 text-text-body">
                  <span className="w-2 h-2 rounded-full bg-brand shrink-0" />
                  {m}
                </li>
              ))}
            </ul>

            {/* Facilidades de atendimento */}
            <div className="mt-9 space-y-3">
              {[
                { icon: "🏥", label: "Atende em consultório e hospital" },
                { icon: "🔬", label: "Cirurgia laparoscópica" },
                { icon: "💬", label: "Teleconsulta disponível" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 bg-[#f5f5f4] rounded-xl px-4 py-3"
                >
                  <span className="text-xl shrink-0">{item.icon}</span>
                  <span className="text-text-title text-sm font-medium leading-snug">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
