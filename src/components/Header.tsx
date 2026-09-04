"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5548996533892&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20aulas%20de%20surf!";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#a-escola", label: "A Escola" },
  { href: "#o-pico", label: "O Pico" },
  { href: "#galeria", label: "Galeria" },
  { href: "#surf-camp", label: "Surf Camp", badge: "5ª" },
  { href: "#o-professor", label: "O Professor" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="/apn-surf-site/" className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 md:w-12 md:h-12 relative overflow-hidden rounded-full border-2 border-neutral-900 group-hover:scale-105 transition-transform">
              <Image src="/apn-surf-site/img/logo.jpg" alt="APN Surf Logo" fill className="object-cover" />
            </div>
            <span className="font-bold text-xl md:text-2xl tracking-tighter uppercase group-hover:opacity-80 transition-opacity">APN Surf</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${link.badge ? "text-neutral-900 font-semibold" : "text-neutral-600 font-medium"} hover:text-black transition-colors flex items-center gap-1.5 text-sm xl:text-base`}
              >
                {link.label}
                {link.badge && (
                  <span className="bg-neutral-900 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">{link.badge}</span>
                )}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="bg-neutral-900 text-white px-5 py-2.5 rounded-full font-medium hover:bg-neutral-800 transition-colors cursor-pointer text-sm"
            >
              Agendar Aula
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="bg-neutral-900 text-white px-4 py-2 rounded-full font-medium hover:bg-neutral-800 transition-colors cursor-pointer text-xs"
            >
              Agendar
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              className="text-neutral-900 p-2 hover:bg-neutral-100 rounded-full transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-neutral-200 shadow-xl py-4 flex flex-col items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg text-neutral-900 font-semibold w-full text-center py-2.5 hover:bg-neutral-50"
            >
              {link.label}
              {link.badge && (
                <span className="bg-neutral-900 text-white text-xs font-bold px-2 py-0.5 rounded-full align-middle ml-2">{link.badge} edição</span>
              )}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
