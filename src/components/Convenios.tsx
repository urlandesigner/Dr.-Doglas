const conveniosPorLocal = [
  {
    local: "Meridional Cariacica",
    planos: [
      "Amil",
      "Arcelor",
      "Bradesco",
      "Cassi",
      "Cesan",
      "Codesa",
      "Gama",
      "Medservice",
      "Postal Saúde",
    ],
  },
  {
    local: "Meridional Vitória",
    planos: [
      "Assefaz",
      "Banescaixa",
      "Bradesco",
      "Capesaúde",
      "Cedoes",
      "Cesan",
      "Codesa",
      "Gama",
      "Geap",
      "Life Empresarial",
      "Marinha do Brasil",
      "Meridional Saúde",
      "Postal Saúde",
      "Saúde Caixa",
      "Sepaco",
    ],
  },
  {
    local: "Meridional Praia da Costa",
    planos: ["Petrobras", "Saúde Caixa", "Cesan", "Medservice", "Vale/Pasa", "Sul América"],
  },
];

export default function Convenios() {
  return (
    <section className="py-10 md:py-16 bg-[#f6f6f4]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-[#B79853] text-sm font-semibold tracking-widest uppercase">
            Facilidade para você
          </span>
          <h2 className="section-heading text-3xl font-bold text-text-title mt-2">
            Planos de saúde aceitos
          </h2>
          <div className="w-16 h-0.5 bg-[#B79853] mx-auto mt-5" />
          <p className="text-text-body text-sm mt-6 max-w-2xl mx-auto leading-relaxed">
            Os planos de saúde são aceitos, mas a cobertura varia de acordo com o
            local e o serviço.{" "}
            <span className="text-text-title font-semibold">
              Confirme durante a etapa de agendamento!
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {conveniosPorLocal.map((item) => (
            <article
              key={item.local}
              className="bg-white border border-[#e7e5e4] rounded-2xl p-5 shadow-sm"
            >
              <h3 className="text-text-title font-semibold text-base">{item.local}</h3>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {item.planos.map((plano) => (
                  <li
                    key={`${item.local}-${plano}`}
                    className="bg-[#f6f6f4] border border-[#eceae8] text-text-title text-sm font-medium px-3.5 py-1.5 rounded-full"
                  >
                    {plano}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
