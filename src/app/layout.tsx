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
  title: "Dr. Doglas Gobbi Marchesi | Cirurgião Geral, Bariátrico e do Aparelho Digestivo",
  description:
    "Dr. Doglas Gobbi Marchesi – especialista em Cirurgia Geral, Cirurgia Bariátrica e Cirurgia do Aparelho Digestivo. Agende sua consulta.",
  keywords: [
    "cirurgião bariátrico",
    "cirurgia bariátrica",
    "cirurgia geral",
    "aparelho digestivo",
    "Dr. Doglas Marchesi",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Dr. Doglas Gobbi Marchesi",
    title: "Dr. Doglas Gobbi Marchesi | Cirurgião Geral, Bariátrico e do Aparelho Digestivo",
    description:
      "Especialista em Cirurgia Geral, Bariátrica e do Aparelho Digestivo em Vitória e região. Agende sua consulta.",
    images: [
      {
        url: "/images/image-doglas.png",
        width: 1200,
        height: 630,
        alt: "Dr. Doglas Gobbi Marchesi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Doglas Gobbi Marchesi | Cirurgião Geral e Bariátrico",
    description:
      "Atendimento em cirurgia geral, bariátrica e do aparelho digestivo em Vitória e região.",
    images: ["/images/image-doglas.png"],
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
