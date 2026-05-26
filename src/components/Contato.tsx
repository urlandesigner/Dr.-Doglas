import Image from "next/image";
import { DotPattern } from "./ui/dot-pattern";
import ConveniosModalButton from "./ConveniosModalButton";
import { getPlanosDaUnidade, unidades } from "@/lib/atendimento";

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
    <section id="contato" className="py-14 md:py-24 bg-white">
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
            O Dr. Doglas atende em quatro unidades. Escolha a mais próxima de você
            e entre em contato para marcar sua consulta.
          </p>
        </div>

        {/* Unidades */}
        <div className="relative">
          <DotPattern className="-top-7 -left-7 w-24 h-24 opacity-50" />
          <DotPattern className="-bottom-7 -right-7 w-24 h-24 opacity-50" />
          <div className="relative grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {unidades.map((u) => {
              const contatoHref = u.whatsapp
                ? `https://wa.me/${u.whatsapp}`
                : `tel:${u.telefones[0].tel}`;
              const contatoLabel = u.whatsapp ? "Conversar no WhatsApp" : "Ligar agora";

              return (
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
                    <div className="flex items-start gap-3 mb-4">
                      <span className="text-brand mt-0.5 shrink-0">
                        <PinIcon />
                      </span>
                      <div className="text-sm text-text-body leading-relaxed">
                        <p className="text-[11px] uppercase tracking-[0.16em] text-text-body/70 mb-1">
                          Endereço
                        </p>
                        <p className="font-medium text-text-title">{u.endereco}</p>
                        <p className="text-text-body/85">{u.bairro}</p>
                        <p>{u.cidade}</p>
                      </div>
                    </div>

                    {/* Telefones */}
                    <div className="flex items-start gap-3 mb-5">
                      <span className="text-brand mt-0.5 shrink-0">
                        <PhoneIcon />
                      </span>
                      <div className="space-y-1.5">
                        <p className="text-[11px] uppercase tracking-[0.16em] text-text-body/70">
                          Telefone
                        </p>
                        {u.telefones.map((t) => (
                          <a
                            key={t.tel}
                            href={`tel:${t.tel}`}
                            className="block text-sm text-text-title hover:text-brand transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
                          >
                            {t.label}
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Ações */}
                    <div className="mt-auto space-y-3.5">
                      <div>
                        {u.whatsapp ? (
                          <a
                            href={contatoHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center gap-2 bg-[#25d366] hover:bg-[#1ebe5d] text-white font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                          >
                            <WhatsAppIcon />
                            WhatsApp
                          </a>
                        ) : (
                          <a
                            href={contatoHref}
                            className="inline-flex w-full items-center justify-center gap-2 bg-[#0f2444] hover:bg-[#1b3a6b] text-white font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                          >
                            <PhoneIcon />
                            Ligar agora
                          </a>
                        )}
                      </div>

                      <div className="pt-1 flex items-center gap-3">
                        <ConveniosModalButton
                          unidade={u.nome}
                          planos={getPlanosDaUnidade(u)}
                          contatoHref={contatoHref}
                          contatoLabel={contatoLabel}
                          triggerClassName="inline-flex whitespace-nowrap items-center text-[13px] font-medium text-text-body hover:text-text-title transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 rounded-md"
                        />
                        <span aria-hidden className="h-3.5 w-px bg-[#d9dce1]" />
                        <a
                          href={u.maps}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex whitespace-nowrap items-center text-[13px] font-medium text-text-body hover:text-text-title transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 rounded-md"
                        >
                          Ver no mapa
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
