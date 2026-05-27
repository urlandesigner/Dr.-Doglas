import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.drdoglasgobbi.com.br"),
  applicationName: "Dr. Doglas Gobbi Marchesi",
  title: {
    default: "Dr. Doglas Marchesi | Cirurgião Bariátrico em Vitória ES",
    template: "%s | Dr. Doglas Marchesi",
  },
  description:
    "Cirurgião geral, bariátrico e do aparelho digestivo no ES. Atendimento em Vitória, Vila Velha e Cariacica. Agende sua consulta com Dr. Doglas.",
  keywords: [
    "Dr. Doglas Gobbi Marchesi",
    "Dr. Doglas Marchesi",
    "cirurgião bariátrico em Vitória",
    "cirurgião bariátrico Espírito Santo",
    "cirurgião bariátrico",
    "cirurgia bariátrica",
    "cirurgia geral",
    "cirurgia do aparelho digestivo",
    "cirurgia robótica",
    "hérnia abdominal",
    "endometriose intestinal",
    "transplante de órgãos",
  ],
  authors: [{ name: "Dr. Doglas Gobbi Marchesi", url: "https://www.drdoglasgobbi.com.br" }],
  creator: "Dr. Doglas Gobbi Marchesi",
  publisher: "Dr. Doglas Gobbi Marchesi",
  category: "healthcare",
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Dr. Doglas Gobbi Marchesi",
    title: "Dr. Doglas Marchesi | Cirurgião Bariátrico em Vitória ES",
    description:
      "Cirurgia geral, bariátrica, robótica e do aparelho digestivo em Vitória, Vila Velha e Cariacica.",
    images: [
      {
        url: "/images/image-doglas.png",
        width: 1200,
        height: 630,
        alt: "Dr. Doglas Gobbi Marchesi, cirurgião geral e bariátrico no Espírito Santo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Doglas Marchesi | Cirurgião Bariátrico em Vitória ES",
    description:
      "Atendimento em cirurgia geral, bariátrica e do aparelho digestivo em Vitória, Vila Velha e Cariacica.",
    images: ["/images/image-doglas.png"],
  },
  other: {
    "geo.region": "BR-ES",
    "geo.placename": "Vitória, Vila Velha e Cariacica",
    "medical-specialty": "Cirurgia Geral, Cirurgia Bariátrica, Cirurgia do Aparelho Digestivo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn(dmSans.variable, dmSerifDisplay.variable, "font-sans")}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
