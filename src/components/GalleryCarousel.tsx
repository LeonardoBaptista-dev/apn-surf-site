"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
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
      const scrollTo = direction === "left" ? scrollLeft - clientWidth * 0.8 : scrollLeft + clientWidth * 0.8;
      
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

  // Keyboard navigation & lock body scroll
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
      <div className="relative w-full max-w-[100vw]">
        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-8 z-20 pointer-events-none">
          <button 
            onClick={() => scroll("left")} 
            className="bg-white/80 hover:bg-white text-neutral-900 w-12 h-12 flex items-center justify-center rounded-full shadow-lg backdrop-blur transition-all pointer-events-auto"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>
        
        <div className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-8 z-20 pointer-events-none">
          <button 
            onClick={() => scroll("right")} 
            className="bg-white/80 hover:bg-white text-neutral-900 w-12 h-12 flex items-center justify-center rounded-full shadow-lg backdrop-blur transition-all pointer-events-auto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel Container */}
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 pb-8 px-4 sm:px-16 lg:px-24 hide-scrollbars"
        >
          {items.map((item, i) => (
            <div 
              key={i} 
              onClick={() => openModal(i)}
              className="relative w-[85vw] max-w-[320px] sm:max-w-[400px] aspect-[4/5] sm:h-[32rem] shrink-0 snap-center rounded-2xl overflow-hidden group shadow-xl cursor-pointer"
            >
              <Image 
                src={item.src} 
                alt={item.alt} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 md:p-8">
                <div className="flex justify-between items-end w-full">
                  <span className="text-white font-bold text-xl md:text-2xl drop-shadow-md">{item.alt}</span>
                  <span className="text-white/80 text-sm font-medium border border-white/30 rounded-full px-3 py-1 backdrop-blur-sm">Ampliar</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
          onClick={closeModal}
        >
          <button 
            onClick={closeModal}
            className="absolute top-6 right-6 z-50 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-md"
          >
            <X className="w-8 h-8" />
          </button>

          <button 
            onClick={prevImage}
            className="absolute left-4 sm:left-12 z-50 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 sm:p-4 rounded-full backdrop-blur-md transition-all flex items-center justify-center"
          >
            <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>

          <button 
            onClick={nextImage}
            className="absolute right-4 sm:right-12 z-50 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 sm:p-4 rounded-full backdrop-blur-md transition-all flex items-center justify-center"
          >
            <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>

          <div 
            className="relative w-full max-w-6xl h-[70vh] sm:h-[85vh] mx-16 outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src={items[selectedIndex].src} 
              alt={items[selectedIndex].alt} 
              fill 
              className="object-contain"
              priority
            />
            <div className="absolute -bottom-10 left-0 right-0 text-center">
              <span className="text-white/90 text-lg sm:text-xl font-medium tracking-wide">
                {items[selectedIndex].alt}
                <span className="opacity-50 text-sm ml-4">
                  {selectedIndex + 1} / {items.length}
                </span>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
