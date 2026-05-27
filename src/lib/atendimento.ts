export type ConvenioLocal = {
  local: string;
  planos: string[];
};

export type UnidadeAtendimento = {
  nome: string;
  convenioLocal?: string;
  endereco: string;
  bairro: string;
  cidade: string;
  telefones: { label: string; tel: string }[];
  whatsapp?: string;
  maps: string;
};

export const conveniosPorLocal: ConvenioLocal[] = [
  {
    local: "Hospital Meridional Cariacica",
    planos: [
      "Amil",
      "Arcelor",
      "Bradesco",
      "Cassi",
      "Cesan",
      "Codesa",
      "Gama",
      "Medservice",
      "Postal Saúde",
    ],
  },
  {
    local: "Hospital Meridional de Vitória",
    planos: [
      "Assefaz",
      "Banescaixa",
      "Bradesco",
      "Capesaúde",
      "Cedoes",
      "Cesan",
      "Codesa",
      "Gama",
      "Geap",
      "Life Empresarial",
      "Marinha do Brasil",
      "Meridional Saúde",
      "Postal Saúde",
      "Saúde Caixa",
      "Sepaco",
    ],
  },
  {
    local: "Centro de Especialidades Praia da Costa",
    planos: ["Petrobras", "Saúde Caixa", "Cesan", "Medservice", "Vale/Pasa", "Sul América"],
  },
  {
    local: "NeuroMind",
    planos: ["Unimed"],
  },
];

export const unidades: UnidadeAtendimento[] = [
  {
    nome: "Hospital Meridional Cariacica",
    convenioLocal: "Hospital Meridional Cariacica",
    endereco: "Rua Meridional, 200",
    bairro: "Trevo de Alto Laje",
    cidade: "Cariacica - ES",
    telefones: [
      { label: "027 3345-2010", tel: "+552733452010" },
      { label: "027 3346-2015", tel: "+552733462015" },
    ],
    maps: "https://www.google.com/maps/search/?api=1&query=Hospital+Meridional+Cariacica+Rua+Meridional+200+Trevo+de+Alto+Laje",
  },
  {
    nome: "Centro de Especialidades Praia da Costa",
    convenioLocal: "Centro de Especialidades Praia da Costa",
    endereco: "Rua Castelo Branco, 676",
    bairro: "Praia da Costa",
    cidade: "Vila Velha - ES",
    telefones: [{ label: "027 2121-0200", tel: "+552721210200" }],
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+Castelo+Branco+676+Praia+da+Costa+Vila+Velha+ES",
  },
  {
    nome: "NeuroMind",
    convenioLocal: "NeuroMind",
    endereco: "Ed. Master Place, sala 810",
    bairro: "Santa Lúcia",
    cidade: "Vitória - ES",
    telefones: [
      { label: "027 3315-5228", tel: "+552733155228" },
      { label: "027 98808-9679", tel: "+5527988089679" },
    ],
    whatsapp: "5527988089679",
    maps: "https://www.google.com/maps/search/?api=1&query=Edificio+Master+Place+Santa+Lucia+Vitoria+ES",
  },
  {
    nome: "Hospital Meridional de Vitória",
    convenioLocal: "Hospital Meridional de Vitória",
    endereco: "Rua Des. José Fortunato Ribeiro, 30",
    bairro: "Mata da Praia",
    cidade: "Vitória - ES",
    telefones: [{ label: "(27) 2122-4000", tel: "+552721224000" }],
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+Des.+Jose+Fortunato+Ribeiro+30+Mata+da+Praia+Vitoria+ES",
  },
];

export function getPlanosDaUnidade(unidade: UnidadeAtendimento) {
  return conveniosPorLocal.find((item) => item.local === unidade.convenioLocal)?.planos ?? [];
}
