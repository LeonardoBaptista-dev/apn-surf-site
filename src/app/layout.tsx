import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

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
    <html lang="pt-BR" data-scroll-behavior="smooth" className={archivo.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
