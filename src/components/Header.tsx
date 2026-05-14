"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

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
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-neutral-600 hover:text-black font-medium transition-colors">Início</a>
            <a href="#a-escola" className="text-neutral-600 hover:text-black font-medium transition-colors">A Escola</a>
            <a href="#o-pico" className="text-neutral-600 hover:text-black font-medium transition-colors">O Pico</a>
            <a href="#o-professor" className="text-neutral-600 hover:text-black font-medium transition-colors">O Professor</a>
          </nav>

          <div className="hidden md:flex">
            <a 
              href="https://api.whatsapp.com/send?phone=5548996533892&text=Ol%C3%A1%2C%20vim%20pelo%20Instagram%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20aulas%20de%20surf!" 
              target="_blank" 
              rel="noreferrer"
              className="bg-neutral-900 text-white px-5 py-2.5 rounded-full font-medium hover:bg-neutral-800 transition-colors cursor-pointer text-sm"
            >
              Agendar Aula
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <a 
              href="https://api.whatsapp.com/send?phone=5548996533892&text=Ol%C3%A1%2C%20vim%20pelo%20Instagram%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20aulas%20de%20surf!" 
              target="_blank" 
              rel="noreferrer"
              className="bg-neutral-900 text-white px-4 py-2 rounded-full font-medium hover:bg-neutral-800 transition-colors cursor-pointer text-xs"
            >
              Agendar
            </a>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-900 p-2 hover:bg-neutral-100 rounded-full transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-neutral-200 shadow-xl py-4 flex flex-col items-center gap-6">
          <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-xl text-neutral-900 font-semibold w-full text-center py-2 hover:bg-neutral-50">Início</a>
          <a href="#a-escola" onClick={() => setIsMenuOpen(false)} className="text-xl text-neutral-900 font-semibold w-full text-center py-2 hover:bg-neutral-50">A Escola</a>
          <a href="#o-pico" onClick={() => setIsMenuOpen(false)} className="text-xl text-neutral-900 font-semibold w-full text-center py-2 hover:bg-neutral-50">O Pico</a>
          <a href="#o-professor" onClick={() => setIsMenuOpen(false)} className="text-xl text-neutral-900 font-semibold w-full text-center py-2 hover:bg-neutral-50">O Professor</a>
        </div>
      )}
    </header>
  );
}