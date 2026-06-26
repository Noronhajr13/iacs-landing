import type { Metadata } from "next";
import { Archivo, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-family-archivo",
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-family-hanken",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IACS — Instituto Artes Cultura e Serviços",
  description:
    "Restauração e conservação de patrimônio histórico em Minas Gerais. Conheça nossos projetos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${hanken.variable}`}>
      <body>{children}</body>
    </html>
  );
}
