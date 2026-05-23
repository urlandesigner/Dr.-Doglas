import Image from "next/image";
import { DotPattern } from "./ui/dot-pattern";

type Unidade = {
  nome: string;
  endereco: string;
  bairro: string;
  cidade: string;
  telefones: { label: string; tel: string }[];
  whatsapp?: string;
  maps: string;
};

const unidades: Unidade[] = [
  {
    nome: "Hospital Meridional Cariacica",
    endereco: "Rua Meridional, 200",
    bairro: "Trevo de Alto Laje",
    cidade: "Cariacica – ES",
    telefones: [
      { label: "(27) 3345-2010", tel: "+552733452010" },
      { label: "(27) 3346-2015", tel: "+552733462015" },
    ],
    maps: "https://www.google.com/maps/search/?api=1&query=Hospital+Meridional+Cariacica+Rua+Meridional+200+Trevo+de+Alto+Laje",
  },
  {
    nome: "Centro de Especialidades Praia da Costa",
    endereco: "Rua Castelo Branco, 676",
    bairro: "Praia da Costa",
    cidade: "Vila Velha – ES",
    telefones: [{ label: "(27) 2121-0200", tel: "+552721210200" }],
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+Castelo+Branco+676+Praia+da+Costa+Vila+Velha+ES",
  },
  {
    nome: "NeuroMind",
    endereco: "Ed. Master Place, sala 810",
    bairro: "Santa Lúcia",
    cidade: "Vitória – ES",
    telefones: [
      { label: "(27) 3315-5228", tel: "+552733155228" },
      { label: "(27) 98808-9679", tel: "+5527988089679" },
    ],
    whatsapp: "5527988089679",
    maps: "https://www.google.com/maps/search/?api=1&query=Edificio+Master+Place+Santa+Lucia+Vitoria+ES",
  },
];

const PinIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Contato() {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#B79853] text-sm font-semibold tracking-widest uppercase">
            Onde atendemos
          </span>
          <h2 className="section-heading text-4xl font-bold text-text-title mt-2">
            Agende sua Consulta
          </h2>
          <div className="w-16 h-0.5 bg-[#B79853] mx-auto mt-5" />
          <p className="text-text-body mt-6 max-w-xl mx-auto">
            O Dr. Doglas atende em três unidades. Escolha a mais próxima de você
            e entre em contato para marcar sua consulta.
          </p>
        </div>

        {/* Unidades */}
        <div className="relative">
          <DotPattern className="-top-7 -left-7 w-24 h-24 opacity-50" />
          <DotPattern className="-bottom-7 -right-7 w-24 h-24 opacity-50" />
          <div className="relative grid md:grid-cols-3 gap-6">
          {unidades.map((u) => (
            <div
              key={u.nome}
              className="group flex flex-col bg-[#f5f5f4] rounded-3xl hover:-translate-y-1 transition-all duration-200 overflow-hidden"
            >
              <div className="relative h-28 overflow-hidden">
                <Image
                  src="/images/maps.png"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2444] via-[#0f2444]/70 to-[#0f2444]/20" />
                <h3 className="absolute inset-x-0 bottom-0 px-6 py-4 text-text-on-dark font-bold section-heading text-lg leading-snug">
                  {u.nome}
                </h3>
              </div>

              <div className="flex flex-col flex-1 p-6">
                {/* Endereço */}
                <div className="flex items-start gap-3 mb-5">
                  <span className="text-brand mt-0.5 shrink-0">
                    <PinIcon />
                  </span>
                  <div className="text-sm text-text-body leading-relaxed">
                    <p className="font-medium text-text-title">{u.endereco}</p>
                    <p>{u.bairro}</p>
                    <p>{u.cidade}</p>
                  </div>
                </div>

                {/* Telefones */}
                <div className="flex flex-col gap-2 mb-6">
                  {u.telefones.map((t) => (
                    <a
                      key={t.tel}
                      href={`tel:${t.tel}`}
                      className="flex items-center gap-3 text-sm text-text-body hover:text-brand transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
                    >
                      <span className="text-brand shrink-0">
                        <PhoneIcon />
                      </span>
                      {t.label}
                    </a>
                  ))}
                </div>

                {/* Ações — primário consistente + "Ver no mapa" secundário */}
                <div className="mt-auto flex flex-col gap-2">
                  {u.whatsapp ? (
                    <a
                      href={`https://wa.me/${u.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#1ebe5d] text-white font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                    >
                      <WhatsAppIcon />
                      WhatsApp
                    </a>
                  ) : (
                    <a
                      href={`tel:${u.telefones[0].tel}`}
                      className="inline-flex items-center justify-center gap-2 bg-[#0f2444] hover:bg-[#1b3a6b] text-white font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                    >
                      <PhoneIcon />
                      Ligar agora
                    </a>
                  )}
                  <a
                    href={u.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-[#0f2444] text-text-title hover:bg-[#0f2444] hover:text-white font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                  >
                    <span className="text-brand">
                      <PinIcon />
                    </span>
                    Ver no mapa
                  </a>
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
