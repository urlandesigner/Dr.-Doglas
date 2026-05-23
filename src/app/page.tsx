import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Especialidades from "@/components/Especialidades";
import DoencasTratadas from "@/components/DoencasTratadas";
import Procedimentos from "@/components/Procedimentos";
import CirurgiaRobotica from "@/components/CirurgiaRobotica";
import Depoimentos from "@/components/Depoimentos";
import Convenios from "@/components/Convenios";
import FAQ from "@/components/FAQ";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Especialidades />
        <DoencasTratadas />
        <Procedimentos />
        <CirurgiaRobotica />
        <Convenios />
        <Depoimentos />
        <FAQ />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
