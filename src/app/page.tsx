import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Especialidades from "@/components/Especialidades";
import DoencasTratadas from "@/components/DoencasTratadas";
import Procedimentos from "@/components/Procedimentos";
import CirurgiaRobotica from "@/components/CirurgiaRobotica";
import TransplanteOrgaos from "@/components/TransplanteOrgaos";
import Depoimentos from "@/components/Depoimentos";
import Convenios from "@/components/Convenios";
import FAQ from "@/components/FAQ";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function Home() {
  const physicianJsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr. Doglas Gobbi Marchesi",
    medicalSpecialty: ["GeneralSurgery", "BariatricSurgery", "Gastroenterologic"],
    areaServed: "Espírito Santo, Brasil",
    sameAs: ["https://www.instagram.com/drdoglasmarchesi/"],
  };

  const clinicJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Dr. Doglas Gobbi Marchesi",
    telephone: "+55 27 2122-4000",
    areaServed: "Espírito Santo, Brasil",
    department: [
      {
        "@type": "Hospital",
        name: "Hospital Meridional Cariacica",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rua Meridional, 200",
          addressLocality: "Cariacica",
          addressRegion: "ES",
          addressCountry: "BR",
        },
      },
      {
        "@type": "MedicalClinic",
        name: "Centro de Especialidades Praia da Costa",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rua Castelo Branco, 676",
          addressLocality: "Vila Velha",
          addressRegion: "ES",
          addressCountry: "BR",
        },
      },
      {
        "@type": "MedicalClinic",
        name: "NeuroMind",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Ed. Master Place, sala 810",
          addressLocality: "Vitória",
          addressRegion: "ES",
          addressCountry: "BR",
        },
      },
      {
        "@type": "Hospital",
        name: "Hospital Meridional de Vitória",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rua Des. José Fortunato Ribeiro, 30",
          addressLocality: "Vitória",
          addressRegion: "ES",
          addressCountry: "BR",
        },
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "O Dr. Doglas atende por convênio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Os convênios variam por unidade de atendimento, incluindo Meridional Cariacica, Meridional Vitória e Meridional Praia da Costa.",
        },
      },
      {
        "@type": "Question",
        name: "As cirurgias são minimamente invasivas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sempre que indicado, os procedimentos são realizados por videolaparoscopia, com recuperação mais rápida e segura.",
        },
      },
      {
        "@type": "Question",
        name: "Como faço para agendar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O agendamento pode ser feito por telefone ou WhatsApp das unidades de atendimento.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(physicianJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(clinicJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Especialidades />
        <DoencasTratadas />
        <Procedimentos />
        <CirurgiaRobotica />
        <TransplanteOrgaos />
        {/* <Convenios /> */}
        <Depoimentos />
        <FAQ />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
