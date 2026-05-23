import Image from "next/image";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Procedimentos", href: "#procedimentos" },
];

export default function Footer() {
  return (
    <footer className="bg-[#060f1e] py-12 text-text-on-dark">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Marca */}
          <div className="max-w-sm text-center md:text-left">
            <Image
              src="/images/logo-branco.png"
              alt="Dr. Doglas Gobbi – Cirurgia Digestiva"
              width={144}
              height={45}
              className="mx-auto h-9 w-auto object-contain md:mx-0"
            />
            <p className="mt-4 text-sm font-medium text-white/75">
              CRM 9607 ES · RQE 9954 · RQE 8307
            </p>
            <p className="mt-1 text-sm text-white/50">
              Cirurgião Geral · Bariátrico · Aparelho Digestivo
            </p>

            <a
              href="https://www.instagram.com/drdoglasmarchesi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram do Dr. Doglas Marchesi"
              className="group mt-5 inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/15 transition-all duration-300 group-hover:bg-brand/10 group-hover:text-brand group-hover:ring-brand/50">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.5 0-4.74.07-.9.04-1.38.19-1.71.31-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.12.33-.27.81-.31 1.71C3.42 8.5 3.42 8.85 3.42 12s0 3.5.07 4.74c.04.9.19 1.38.31 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.33.12.81.27 1.71.31 1.24.07 1.59.07 4.74.07s3.5 0 4.74-.07c.9-.04 1.38-.19 1.71-.31.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.12-.33.27-.81.31-1.71.07-1.24.07-1.59.07-4.74s0-3.5-.07-4.74c-.04-.9-.19-1.38-.31-1.71a2.86 2.86 0 0 0-.69-1.06 2.86 2.86 0 0 0-1.06-.69c-.33-.12-.81-.27-1.71-.31C15.5 4 15.15 4 12 4Zm0 3.06A4.94 4.94 0 1 1 12 16.94 4.94 4.94 0 0 1 12 7.06Zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28Zm5.14-3.24a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z" />
                </svg>
              </span>
              <span>@drdoglasmarchesi</span>
            </a>
          </div>

          {/* Navegação (linha) + CTA */}
          <div className="flex flex-col items-center gap-6 md:items-end">
            <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-sm md:justify-end">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contato"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0ea5e9]/25 transition-all duration-300 hover:from-[#38bdf8] hover:to-[#0ea5e9] hover:shadow-xl hover:shadow-[#0ea5e9]/40"
            >
              Agendar Consulta
              <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <hr className="my-8 border-white/10" />

        <div className="flex flex-col gap-2 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Dr. Doglas Gobbi Marchesi. Todos os direitos reservados.</p>
          <div className="flex flex-col gap-1 md:items-end">
            <p>CRM válido junto ao Conselho Regional de Medicina</p>
            <p className="text-white/35">
              Desenvolvido por{" "}
              <a
                href="https://www.urlandipre.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white/55 transition-colors hover:text-brand"
              >
                Urlan Dipré
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
