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
  const touchX = useRef<number | null>(null);
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
              className="relative flex-none w-[68%] sm:w-[38%] lg:w-[24%] aspect-[4/5] shrink-0 snap-start rounded-2xl overflow-hidden group shadow-lg cursor-pointer bg-neutral-800 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
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
          className="fixed inset-0 z-[100] flex flex-col bg-neutral-900/95 backdrop-blur-md"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={items[selectedIndex].alt}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 sm:px-8 h-16 shrink-0" onClick={(e) => e.stopPropagation()}>
            <p className="text-neutral-400 text-sm font-medium tabular-nums">{selectedIndex + 1} de {items.length}</p>
            <button
              onClick={closeModal}
              aria-label="Fechar galeria"
              className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white hover:text-neutral-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Stage */}
          <div
            className="relative flex-1 min-h-0 px-4 sm:px-20 pb-4"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (dx < -48) nextImage();
              if (dx > 48) prevImage();
              touchX.current = null;
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              {/* Plain img so the frame hugs the photo itself: rounded corners, shadow
                  and ring land on the visible image, not on an invisible letterbox. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={items[selectedIndex].src}
                alt={items[selectedIndex].alt}
                draggable={false}
                className="max-w-full max-h-full w-auto h-auto rounded-2xl shadow-2xl shadow-black/60 ring-1 ring-white/15 select-none"
              />
            </div>

            <button
              onClick={prevImage}
              aria-label="Foto anterior"
              className="hidden sm:flex absolute left-5 top-1/2 -translate-y-1/2 items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white hover:text-neutral-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              aria-label="Próxima foto"
              className="hidden sm:flex absolute right-5 top-1/2 -translate-y-1/2 items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white hover:text-neutral-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Caption + thumbnails */}
          <div className="shrink-0 pb-5 px-4" onClick={(e) => e.stopPropagation()}>
            <p className="text-white text-center text-base sm:text-lg font-semibold mb-4">{items[selectedIndex].alt}</p>
            <div className="flex justify-center gap-2 overflow-x-auto hide-scrollbars py-1">
              {items.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedIndex(i)}
                  aria-label={`Ver foto: ${item.alt}`}
                  className={`relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-lg overflow-hidden transition-all ${i === selectedIndex ? "ring-2 ring-white opacity-100" : "opacity-40 hover:opacity-80"}`}
                >
                  <Image src={item.src} alt="" fill sizes="56px" className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
