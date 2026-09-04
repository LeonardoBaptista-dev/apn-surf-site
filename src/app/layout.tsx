import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "APN Aulas de Surf | Pico de Matinhos",
  description: "Treino fora d'água também é surf. Aprenda a surfar no Pico de Matinhos com Aminandes Pamplona Neto - 10x Campeão Paranaense.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}