"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";

const items = [
  { src: "/apn-surf-site/img/aula_grupo_foto_horizontal.jpeg", alt: "Turma na praia" },
  { src: "/apn-surf-site/img/foto_conceito_aminandes_menina_atras_2.jpeg", alt: "Foco e mentoria" },
  { src: "/apn-surf-site/img/ig/aula_pico_prancha_amarela.jpg", alt: "Primeiras ondas no Pico" },
  { src: "/apn-surf-site/img/aula_familia_foto_em_pe.jpeg", alt: "Surf em família" },
  { src: "/apn-surf-site/img/ig/aula_pico_pedras.jpg", alt: "Dropando com o Pico ao fundo" },
  { src: "/apn-surf-site/img/aula_individual.jpeg", alt: "Aula individual" },
  { src: "/apn-surf-site/img/ig/aluna_onda_apn.jpg", alt: "Evolução nas aulas do APN" },
  { src: "/apn-surf-site/img/foto_conceito_aminandes_menina_atras.jpeg", alt: "Atenção aos detalhes" },
  { src: "/apn-surf-site/img/ig/aluna_experiencia.jpg", alt: "Sorriso de quem viveu a experiência" },
  { src: "/apn-surf-site/img/aminandes_tubo_em_pe.webp", alt: "Aminandes no tubo" },
  { src: "/apn-surf-site/img/aula.jpg", alt: "Treino na areia" }
];

export default function GalleryCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateArrows = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scroll = (direction: "left" | "right") => {
    const el = carouselRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: direction === "left" ? -step * 2 : step * 2, behavior: "smooth" });
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
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Navigation Arrows */}
        <button
          onClick={() => scroll("left")}
          aria-label="Fotos anteriores"
          className={`hidden md:flex absolute top-1/2 -translate-y-1/2 -left-5 z-20 bg-white text-neutral-900 w-12 h-12 items-center justify-center rounded-full shadow-xl border border-neutral-200 transition-all hover:scale-110 ${canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => scroll("right")}
          aria-label="Próximas fotos"
          className={`hidden md:flex absolute top-1/2 -translate-y-1/2 -right-5 z-20 bg-white text-neutral-900 w-12 h-12 items-center justify-center rounded-full shadow-xl border border-neutral-200 transition-all hover:scale-110 ${canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Uniform 4:5 cards, cropped consistently */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 sm:px-6 lg:px-8 hide-scrollbars w-full pb-2"
        >
          {items.map((item, i) => (
            <button
              key={i}
              data-card
              onClick={() => openModal(i)}
              aria-label={`Ampliar foto: ${item.alt}`}
              className="relative flex-none w-[72%] sm:w-[44%] lg:w-[30%] aspect-[4/5] shrink-0 snap-start rounded-2xl overflow-hidden group shadow-lg cursor-pointer bg-neutral-800 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 72vw, (max-width: 1024px) 44vw, 30vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Permanent caption gradient */}
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-3">
                <span className="text-white font-semibold text-sm sm:text-base leading-snug drop-shadow">{item.alt}</span>
                <Maximize2 className="w-4 h-4 text-white/70 shrink-0 mb-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
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
            aria-label="Fechar"
            className="absolute top-6 right-6 z-50 text-white/50 hover:text-white p-3 rounded-full"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={prevImage}
            aria-label="Foto anterior"
            className="absolute left-2 md:left-8 z-50 text-white/50 hover:text-white p-4"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={nextImage}
            aria-label="Próxima foto"
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

            <div className="mt-6 flex flex-col items-center justify-center pointer-events-none">
              <div className="bg-neutral-900/80 backdrop-blur-md border border-neutral-700/50 px-8 py-3 rounded-full shadow-2xl flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
                <h4 className="text-white text-lg font-semibold tracking-wide">{items[selectedIndex].alt}</h4>
                <div className="hidden sm:block w-[1px] h-5 bg-neutral-600"></div>
                <p className="text-neutral-400 text-sm uppercase tracking-widest font-medium">{selectedIndex + 1} / {items.length}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
