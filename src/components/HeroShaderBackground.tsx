"use client";

import dynamic from "next/dynamic";

// Carrega a cena WebGL inteira apenas no browser (sem SSR), evitando erros
// de contexto WebGL no servidor e mantendo o reconciler do R3F intacto.
const HeroShaderScene = dynamic(() => import("./HeroShaderScene"), {
  ssr: false,
});

export default function HeroShaderBackground() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <HeroShaderScene />
    </div>
  );
}
