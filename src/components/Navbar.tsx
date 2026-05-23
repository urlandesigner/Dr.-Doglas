"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Procedimentos", href: "#procedimentos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("inicio");
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Fundo do header conforme posição de scroll (sincroniza já na montagem)
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Scroll-spy: marca a seção ativa (usado no destaque do menu mobile)
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // Trava o scroll do body, fecha com Esc e foca o botão fechar ao abrir
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (menuOpen) closeBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-[#0b1c38]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/[0.06] py-2.5"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          className="inline-block transition-transform duration-300 hover:scale-[1.03]"
        >
          <Image
            src="/images/logo-branco.png"
            alt="Dr. Doglas Gobbi – Cirurgia Digestiva"
            width={160}
            height={50}
            className="h-14 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-text-on-dark hover:text-text-on-dark text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-[#38bdf8] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li className="ml-2">
            <a
              href="#contato"
              className="group bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] hover:from-[#38bdf8] hover:to-[#0ea5e9] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-[#0ea5e9]/25 hover:shadow-xl hover:shadow-[#0ea5e9]/40 inline-flex items-center gap-2"
            >
              Agendar Consulta
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </li>
        </ul>

        {/* Mobile toggle — apenas abre; o painel tem seu próprio botão fechar.
            z-[60] garante que fica no topo da pilha (toque sempre acerta o botão);
            some quando aberto para não conflitar com o X do painel. */}
        <button
          className={`lg:hidden relative z-[60] -mr-2 p-2 text-text-on-dark transition-all duration-200 active:scale-90 ${
            menuOpen ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-drawer"
        >
          <span className="flex w-6 flex-col items-end gap-[5px]">
            <span className="block h-0.5 w-6 rounded-full bg-white" />
            <span className="block h-0.5 w-6 rounded-full bg-white" />
            <span className="block h-0.5 w-4 rounded-full bg-brand" />
          </span>
        </button>
      </nav>
    </header>

      {/* Overlay escurecido (fecha ao clicar) */}
      <div
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
        className={`lg:hidden fixed inset-0 z-40 bg-[#040b18]/70 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer lateral direito */}
      <aside
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        inert={!menuOpen}
        className={`lg:hidden fixed top-0 right-0 z-50 flex h-dvh w-80 max-w-[86%] flex-col overflow-hidden bg-[#0b1c38] shadow-2xl shadow-black/60 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Atmosfera: glow azul no topo, glow dourado embaixo, fio dourado na borda */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_70%_at_100%_0%,rgba(14,165,233,0.18),transparent_55%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 bottom-28 h-56 w-56 rounded-full bg-brand/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-brand/40 to-transparent"
        />

        {/* Cabeçalho do painel */}
        <div className="relative flex shrink-0 items-center justify-between border-b border-white/10 px-6 pb-5 pt-6">
          <Image
            src="/images/logo-branco.png"
            alt="Dr. Doglas Gobbi"
            width={140}
            height={44}
            className="h-8 w-auto object-contain"
          />
          <button
            ref={closeBtnRef}
            onClick={() => setMenuOpen(false)}
            aria-label="Fechar menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition-all duration-300 hover:rotate-90 hover:border-brand/50 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <nav className="relative flex flex-1 flex-col overflow-y-auto px-6 py-6">
          <div className="flex flex-col">
            {navLinks.map((link, i) => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive ? "true" : undefined}
                  style={{ transitionDelay: menuOpen ? `${130 + i * 70}ms` : "0ms" }}
                  className={`group relative flex items-center gap-4 border-b border-white/[0.07] py-4 transition-all duration-500 ${
                    menuOpen ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
                  }`}
                >
                  {/* Barra dourada do item ativo */}
                  <span
                    aria-hidden
                    className={`absolute -left-6 top-1/2 h-7 w-0.5 -translate-y-1/2 rounded-full bg-brand transition-all duration-300 ${
                      isActive ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                    }`}
                  />
                  <span
                    className={`font-mono text-xs font-semibold tabular-nums tracking-[0.2em] transition-colors ${
                      isActive ? "text-brand" : "text-white/35"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <span
                    className={`section-heading text-xl transition-colors group-hover:text-white ${
                      isActive ? "text-white" : "text-white/85"
                    }`}
                  >
                    {link.label}
                  </span>
                  <svg
                    aria-hidden
                    className={`ml-auto h-4 w-4 transition-all duration-300 ${
                      isActive
                        ? "translate-x-0 text-brand opacity-100"
                        : "-translate-x-1 text-white/30 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            style={{ transitionDelay: menuOpen ? `${130 + navLinks.length * 70}ms` : "0ms" }}
            className={`mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0ea5e9]/30 transition-all duration-500 hover:from-[#38bdf8] hover:to-[#0ea5e9] ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            Agendar Consulta
            <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </nav>

        {/* Rodapé do painel — contato rápido */}
        <div className="relative shrink-0 border-t border-white/10 px-6 py-5">
          <a
            href="https://www.instagram.com/drdoglasmarchesi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram do Dr. Doglas Marchesi"
            className="group inline-flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-brand"
          >
            <span>@drdoglasmarchesi</span>
            <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white/85 transition-colors group-hover:border-brand/50 group-hover:text-brand">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.5 0-4.74.07-.9.04-1.38.19-1.71.31-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.12.33-.27.81-.31 1.71C3.42 8.5 3.42 8.85 3.42 12s0 3.5.07 4.74c.04.9.19 1.38.31 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.33.12.81.27 1.71.31 1.24.07 1.59.07 4.74.07s3.5 0 4.74-.07c.9-.04 1.38-.19 1.71-.31.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.12-.33.27-.81.31-1.71.07-1.24.07-1.59.07-4.74s0-3.5-.07-4.74c-.04-.9-.19-1.38-.31-1.71a2.86 2.86 0 0 0-.69-1.06 2.86 2.86 0 0 0-1.06-.69c-.33-.12-.81-.27-1.71-.31C15.5 4 15.15 4 12 4Zm0 3.06A4.94 4.94 0 1 1 12 16.94 4.94 4.94 0 0 1 12 7.06Zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28Zm5.14-3.24a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z" />
              </svg>
            </span>
          </a>
        </div>
      </aside>
    </>
  );
}
