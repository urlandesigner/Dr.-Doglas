import Image from "next/image";
import HeroShaderBackground from "./HeroShaderBackground";
import { DotPattern } from "./ui/dot-pattern";
import CountUp from "./ui/CountUp";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b1c38]"
    >
      {/* Animated shader gradient – cinematic living base */}
      <HeroShaderBackground />

      {/* Readability overlay – keeps left-column text legible over the shader */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a35]/85 via-[#0a1a35]/45 to-transparent" />

      {/* Subtle top-bottom darkening for cohesion */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a35]/30 via-transparent to-[#091627]/55" />

      {/* Vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_45%,_#040b18aa_100%)]" />

      {/* Decorative rings – more subtle */}
      <div className="absolute top-24 right-12 w-72 h-72 rounded-full border border-white/[0.04]" />
      <div className="absolute top-36 right-24 w-48 h-48 rounded-full border border-[#0ea5e9]/[0.08]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-28 grid md:grid-cols-2 gap-8 md:gap-12 items-end">

        {/* Left – text */}
        <div className="text-center md:text-left md:self-center">
          <span className="inline-flex items-center gap-2 bg-white/[0.06] backdrop-blur-sm text-text-on-dark text-[11px] font-semibold tracking-[0.22em] uppercase px-4 py-1.5 rounded-full mb-7 border border-[#0ea5e9]/25">
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            Cirurgião Especialista
          </span>

          <h1 className="section-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-on-dark leading-tight mb-4">
            Dr. Doglas
            <br />
            <span className="text-text-on-dark">Gobbi Marchesi</span>
          </h1>

          {/* Premium specialty badges */}
          <div className="flex flex-wrap items-center justify-center md:justify-start mb-7">
            {["Cirurgia Geral", "Cirurgia Bariátrica", "Aparelho Digestivo"].map((esp, i) => (
              <span key={esp} className="inline-flex items-center">
                {i > 0 && <span aria-hidden className="mx-4 h-4 w-px bg-white/20" />}
                <span className="inline-flex items-center gap-2 text-sm text-text-on-dark">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                  {esp}
                </span>
              </span>
            ))}
          </div>

          <p className="text-text-on-dark text-lg leading-relaxed mb-9 max-w-xl mx-auto md:mx-0">
            Cuidado cirúrgico de excelência com foco no seu bem-estar. Tratamentos
            modernos e seguros para sua saúde digestiva e qualidade de vida.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contato"
              className="group bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] hover:from-[#38bdf8] hover:to-[#0ea5e9] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#0ea5e9]/25 hover:shadow-xl hover:shadow-[#0ea5e9]/40 text-center inline-flex items-center justify-center gap-2"
            >
              Agendar Consulta
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#sobre"
              className="border border-white/25 hover:border-white/50 hover:bg-white/[0.04] text-text-on-dark font-semibold px-8 py-4 rounded-full transition-all duration-300 text-center"
            >
              Conhecer o Dr. Doglas
            </a>
          </div>
        </div>

        {/* Right – doctor photo */}
        <div className="flex justify-center md:justify-end items-end relative">
          {/* Ambient glow behind photo */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-[#0ea5e9]/20 blur-[90px]" />
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-56 h-56 rounded-full bg-[#7dd3fc]/15 blur-3xl" />

          <div className="relative z-10 w-72 md:w-80 lg:w-96">
            <DotPattern className="-top-8 -left-8 w-28 h-28 opacity-40 z-0" />
            <Image
              src="/images/image-doglas.png"
              alt="Dr. Doglas Gobbi Marchesi"
              width={420}
              height={560}
              className="relative z-10 w-full object-contain drop-shadow-2xl [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]"
              style={{ height: "auto" }}
              priority
            />

            {/* Floating metric badges – same style as the availability badge */}
            {[
              {
                to: 2000,
                suffix: "+",
                label: "Cirurgias realizadas",
                pos: "bottom-28 -left-2 md:-left-10",
                icon: (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h4l2 6 4-15 2 9h6" />
                  </svg>
                ),
              },
              {
                to: 15,
                suffix: "+",
                label: "Anos de experiência",
                pos: "bottom-2 md:bottom-14 -right-1 md:-right-5",
                icon: (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14a5 5 0 100-10 5 5 0 000 10z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.6 13.2L7 21l5-2.8L17 21l-1.6-7.8" />
                  </svg>
                ),
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`absolute ${stat.pos} z-20 flex items-center gap-3 bg-white/75 backdrop-blur-md rounded-2xl px-4 py-3 ring-1 ring-black/5 shadow-[0_16px_36px_-18px_rgba(15,36,68,0.55)]`}
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand">
                  {stat.icon}
                </span>
                <div>
                  <div className="text-navy-900 text-2xl font-bold section-heading leading-none">
                    <CountUp to={stat.to} suffix={stat.suffix} />
                  </div>
                  <div className="text-text-body text-[14px] font-medium mt-1 leading-tight whitespace-nowrap">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
