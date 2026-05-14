"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const items = [
  { src: "/apn-surf-site/img/aula_grupo_foto_horizontal.jpeg", alt: "Turma na praia" },
  { src: "/apn-surf-site/img/foto_conceito_aminandes_menina_atras_2.jpeg", alt: "Foco e Mentoria" },
  { src: "/apn-surf-site/img/aula_familia_foto_em_pe.jpeg", alt: "Surf em família" },
  { src: "/apn-surf-site/img/aula_individual.jpeg", alt: "Aula individual" },
  { src: "/apn-surf-site/img/foto_conceito_aminandes_menina_atras.jpeg", alt: "Atenção aos detalhes" },
  { src: "/apn-surf-site/img/aminandes_tubo_em_pe.webp", alt: "Aminandes Tubo" },
  { src: "/apn-surf-site/img/aula.jpg", alt: "Treino na areia" }
];

export default function GalleryCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      
      carouselRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth"
      });
    }
  };

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <div className="relative w-full max-w-7xl mx-auto mt-10">
        {/* Navigation Arrows */}
        <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-6 z-20">
          <button 
            onClick={() => scroll("left")} 
            className="bg-neutral-900 hover:bg-neutral-800 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>
        
        <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-6 z-20">
          <button 
            onClick={() => scroll("right")} 
            className="bg-neutral-900 hover:bg-neutral-800 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Simple & Clean Carousel Container */}
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 hide-scrollbars w-full"
        >
          {items.map((item, i) => (
            <div 
              key={i} 
              onClick={() => openModal(i)}
              // Mobile: 100% width (1 item). Desktop: 33.333% width minus gap (3 items).
              className="relative flex-none w-[100%] md:w-[calc(33.333%-0.75rem)] h-[50vh] sm:h-[60vh] shrink-0 snap-center rounded-xl overflow-hidden group shadow-md cursor-pointer bg-neutral-950"
            >
              {/* object-contain ensures the image is NEVER cropped */}
              <Image 
                src={item.src} 
                alt={item.alt} 
                fill 
                className="object-contain" 
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <Maximize2 className="w-8 h-8 text-white mb-2" />
                <h3 className="text-white font-bold text-center px-4">
                  {item.alt}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={closeModal}
        >
          <button 
            onClick={closeModal}
            className="absolute top-6 right-6 z-50 text-white/50 hover:text-white p-3 rounded-full"
          >
            <X className="w-8 h-8" />
          </button>

          <button 
            onClick={prevImage}
            className="absolute left-2 md:left-8 z-50 text-white/50 hover:text-white p-4"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button 
            onClick={nextImage}
            className="absolute right-2 md:right-8 z-50 text-white/50 hover:text-white p-4"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div 
            className="relative w-full max-w-6xl h-[80vh] flex flex-col items-center justify-center px-12"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[calc(100%-80px)]">
              <Image 
                src={items[selectedIndex].src} 
                alt={items[selectedIndex].alt} 
                fill 
                className="object-contain"
                priority
              />
            </div>
            
            {/* Elegant Caption Area */}
            <div className="mt-6 flex flex-col items-center justify-center pointer-events-none">
              <div className="bg-neutral-900/80 backdrop-blur-md border border-neutral-700/50 px-8 py-3 rounded-full shadow-2xl flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
                <h4 className="text-white text-xl font-semibold tracking-wide capitalize">{items[selectedIndex].alt}</h4>
                <div className="hidden sm:block w-[1px] h-5 bg-neutral-600"></div>
                <p className="text-neutral-400 text-sm uppercase tracking-widest font-medium">Foto {selectedIndex + 1} de {items.length}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
