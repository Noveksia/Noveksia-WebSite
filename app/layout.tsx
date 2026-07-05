import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Noveksia — Automatización con IA para cualquier negocio",
  description:
    "Atendemos a tus clientes, captamos leads y mantenemos tu negocio activo con IA. Recupera horas y vende más, sin contratar a nadie.",
  openGraph: {
    title: "Noveksia — Automatización con IA para cualquier negocio",
    description:
      "Atendemos a tus clientes, captamos leads y mantenemos tu negocio activo con IA.",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${manrope.variable} ${inter.variable}`}
    >
      <body className="min-h-screen antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
