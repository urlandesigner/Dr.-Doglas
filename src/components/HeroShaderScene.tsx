"use client";

import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

// Cena R3F com imports normais — o ShaderGradient é um nó three válido
// dentro do Canvas. Este arquivo inteiro é carregado via dynamic({ ssr:false })
// pelo HeroShaderBackground, então o three.js nunca roda no servidor.
export default function HeroShaderScene() {
  return (
    <ShaderGradientCanvas
      style={{ width: "100%", height: "100%" }}
      pointerEvents="none"
      lazyLoad={false}
      pixelDensity={1}
      fov={45}
    >
      <ShaderGradient
        control="props"
        type="waterPlane"
        animate="on"
        uSpeed={0.18}
        uStrength={1.6}
        uDensity={1.5}
        uFrequency={5.5}
        uAmplitude={0}
        positionX={0}
        positionY={0}
        positionZ={0}
        rotationX={50}
        rotationY={0}
        rotationZ={-60}
        color1="#0a1a35"
        color2="#0ea5e9"
        color3="#15315c"
        reflection={0.1}
        cAzimuthAngle={180}
        cPolarAngle={80}
        cDistance={3.6}
        cameraZoom={1}
        lightType="3d"
        brightness={1.05}
        envPreset="city"
        grain="on"
      />
    </ShaderGradientCanvas>
  );
}
