import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Especialidades from "@/components/Especialidades";
import DoencasTratadas from "@/components/DoencasTratadas";
import Procedimentos from "@/components/Procedimentos";
import CirurgiaRobotica from "@/components/CirurgiaRobotica";
import TransplanteOrgaos from "@/components/TransplanteOrgaos";
import Depoimentos from "@/components/Depoimentos";
import FAQ from "@/components/FAQ";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import { faqs } from "@/lib/faq";
import { unidades } from "@/lib/atendimento";

export default function Home() {
  const siteUrl = "https://www.drdoglasgobbi.com.br";
  const physicianId = `${siteUrl}/#physician`;
  const clinicId = `${siteUrl}/#clinic`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Dr. Doglas Gobbi Marchesi",
        inLanguage: "pt-BR",
        publisher: { "@id": physicianId },
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: "Dr. Doglas Marchesi | Cirurgião Bariátrico em Vitória ES",
        description:
          "Cirurgião geral, bariátrico e do aparelho digestivo no Espírito Santo, com atendimento em Vitória, Vila Velha e Cariacica.",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": physicianId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${siteUrl}/images/image-doglas.png`,
        },
        inLanguage: "pt-BR",
      },
      {
        "@type": "Physician",
        "@id": physicianId,
        name: "Dr. Doglas Gobbi Marchesi",
        alternateName: "Dr. Doglas Marchesi",
        url: siteUrl,
        image: `${siteUrl}/images/image-doglas.png`,
        jobTitle: "Cirurgião geral, bariátrico e do aparelho digestivo",
        description:
          "Médico cirurgião com atuação em cirurgia geral, cirurgia bariátrica, cirurgia do aparelho digestivo, cirurgia robótica e captação de órgãos.",
        identifier: [
          { "@type": "PropertyValue", name: "CRM", value: "9607 ES" },
          { "@type": "PropertyValue", name: "RQE", value: "9954" },
          { "@type": "PropertyValue", name: "RQE", value: "8307" },
        ],
        medicalSpecialty: [
          "Cirurgia Geral",
          "Cirurgia Bariátrica",
          "Cirurgia do Aparelho Digestivo",
          "Cirurgia Robótica",
        ],
        knowsAbout: [
          "Bypass gástrico",
          "Sleeve gástrico",
          "Revisão bariátrica",
          "Hérnias da parede abdominal",
          "Refluxo gastroesofágico",
          "Colecistectomia",
          "Endometriose intestinal",
          "Cirurgia oncológica digestiva",
          "Transplante de órgãos",
        ],
        alumniOf: [
          { "@type": "CollegeOrUniversity", name: "Universidade Federal do Espírito Santo" },
          { "@type": "Hospital", name: "Hospital Heliópolis" },
        ],
        memberOf: [
          { "@type": "Organization", name: "Colégio Brasileiro de Cirurgiões" },
          { "@type": "Organization", name: "Sociedade Brasileira de Cirurgia Bariátrica e Metabólica" },
          { "@type": "Organization", name: "Colégio Brasileiro de Cirurgia Digestiva" },
        ],
        sameAs: ["https://www.instagram.com/drdoglasmarchesi/"],
        worksFor: { "@id": clinicId },
        areaServed: [
          { "@type": "City", name: "Vitória" },
          { "@type": "City", name: "Vila Velha" },
          { "@type": "City", name: "Cariacica" },
          { "@type": "State", name: "Espírito Santo" },
        ],
      },
      {
        "@type": "MedicalClinic",
        "@id": clinicId,
        name: "Dr. Doglas Gobbi Marchesi",
        url: siteUrl,
        image: `${siteUrl}/images/image-doglas.png`,
        telephone: "+55 27 2122-4000",
        medicalSpecialty: ["Cirurgia Geral", "Cirurgia Bariátrica", "Cirurgia do Aparelho Digestivo"],
        areaServed: "Espírito Santo, Brasil",
        department: unidades.map((unidade) => ({
          "@type": unidade.nome.includes("Hospital") ? "Hospital" : "MedicalClinic",
          name: unidade.nome,
          telephone: unidade.telefones.map((telefone) => telefone.tel),
          hasMap: unidade.maps,
          address: {
            "@type": "PostalAddress",
            streetAddress: unidade.endereco,
            addressLocality: unidade.cidade.replace(" - ES", ""),
            addressRegion: "ES",
            addressCountry: "BR",
          },
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.pergunta,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.resposta,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
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
        <Depoimentos />
        <FAQ />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
