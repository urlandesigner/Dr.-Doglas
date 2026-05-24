const convenios = [
  "Bradesco Saúde",
  "Amil",
  "Cassi",
  "Geap Saúde",
  "Unimed Vitória",
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

        <div className="flex flex-wrap justify-center gap-3">
          {convenios.map((conv) => (
            <span
              key={conv}
              className="bg-white border border-[#e7e5e4] text-text-title text-sm font-medium px-5 py-2.5 rounded-full shadow-sm transition-all duration-200 hover:border-[#d6d3d1] hover:shadow-md cursor-default"
            >
              {conv}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
