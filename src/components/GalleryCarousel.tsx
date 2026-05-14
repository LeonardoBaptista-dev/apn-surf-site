"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        {/* Modern Navigation Arrows */}
        <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-6 z-20">
          <button 
            onClick={() => scroll("left")} 
            className="group bg-neutral-900/80 hover:bg-white text-white hover:text-neutral-900 w-14 h-14 flex items-center justify-center rounded-full shadow-[0_0_20px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 border border-white/10"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-6 z-20">
          <button 
            onClick={() => scroll("right")} 
            className="group bg-neutral-900/80 hover:bg-white text-white hover:text-neutral-900 w-14 h-14 flex items-center justify-center rounded-full shadow-[0_0_20px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 border border-white/10"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Cinematic Carousel Container */}
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 sm:gap-8 pb-12 px-[10vw] sm:px-[calc(50%-190px)] lg:px-[calc(50%-225px)] hide-scrollbars items-center"
        >
          {items.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => openModal(i)}
              className="relative w-[80vw] sm:w-[380px] lg:w-[450px] aspect-[4/5] sm:h-[40rem] shrink-0 snap-center rounded-[2rem] overflow-hidden group shadow-2xl cursor-pointer bg-neutral-800"
            >
              <Image 
                src={item.src} 
                alt={item.alt} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-[1.2s] ease-out" 
              />
              {/* Premium Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-white font-black text-2xl md:text-3xl tracking-tight mb-2 leading-tight drop-shadow-lg">
                    {item.alt}
                  </h3>
                  <div className="flex items-center gap-2 text-white/80 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <Maximize2 className="w-4 h-4" />
                    <span>Visualizar</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modern Cinematic Lightbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl"
            onClick={closeModal}
          >
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 sm:top-10 sm:right-10 z-50 text-white/50 hover:text-white transition-colors bg-white/5 hover:bg-white/20 p-3 rounded-full backdrop-blur-md"
            >
              <X className="w-8 h-8" />
            </button>

            <button 
              onClick={prevImage}
              className="absolute left-2 sm:left-12 z-50 text-white/50 hover:text-white bg-transparent hover:bg-white/10 p-4 sm:p-5 rounded-full transition-all"
            >
              <ChevronLeft className="w-10 h-10 sm:w-14 sm:h-14" />
            </button>

            <button 
              onClick={nextImage}
              className="absolute right-2 sm:right-12 z-50 text-white/50 hover:text-white bg-transparent hover:bg-white/10 p-4 sm:p-5 rounded-full transition-all"
            >
              <ChevronRight className="w-10 h-10 sm:w-14 sm:h-14" />
            </button>

            <motion.div 
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-7xl h-[75vh] sm:h-[85vh] mx-4 sm:mx-32 outline-none flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden shrink-0">
                <Image 
                  src={items[selectedIndex].src} 
                  alt={items[selectedIndex].alt} 
                  fill 
                  className="object-contain"
                  priority
                />
              </div>
              <div className="absolute -bottom-16 sm:-bottom-12 left-0 right-0 text-center">
                <h4 className="text-white text-xl sm:text-2xl font-bold tracking-wide">
                  {items[selectedIndex].alt}
                </h4>
                <p className="text-white/40 text-sm mt-1 uppercase tracking-widest font-semibold flex items-center justify-center gap-3">
                  <span className="w-8 h-[1px] bg-white/20" />
                  {selectedIndex + 1} DE {items.length}
                  <span className="w-8 h-[1px] bg-white/20" />
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
