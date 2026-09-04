import Image from "next/image";
import Link from "next/link";
import { MapPin, Waves, Calendar, User, CheckCircle2 } from "lucide-react";
import GalleryCarousel from "@/components/GalleryCarousel";
import Header from "@/components/Header";

// lucide-react removed brand icons, so the Instagram glyph lives here as plain SVG
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans text-neutral-900">
      
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section id="inicio" className="relative w-full min-h-[100svh] bg-neutral-900 flex flex-col items-center justify-center overflow-hidden pt-28 pb-12">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image 
            src="/apn-surf-site/img/aula.jpg" 
            alt="Surf APN" 
            fill 
            className="object-cover object-[center_35%] md:object-center"
            priority
          />
        </div>
        <div className="relative z-10 text-center max-w-5xl px-4 flex flex-col items-center mt-auto mb-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tight leading-tight">
            A evolução começa na areia e continua na onda
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-neutral-100/90 mb-8 max-w-2xl mx-auto">
            Aulas de surf no Pico de Matinhos com metodologia de competição, para iniciantes e avançados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <a
              href="https://api.whatsapp.com/send?phone=5548996533892&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20quero%20agendar%20uma%20aula%20de%20surf!"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-neutral-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-neutral-200 transition-colors flex items-center justify-center"
            >
              Agendar uma aula
            </a>
            <a href="#a-escola" className="bg-transparent border border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center">
              Conhecer a escola
            </a>
          </div>
        </div>
      </section>

      {/* About The School */}
      <section id="a-escola" className="scroll-mt-20 pt-6 sm:pt-8 pb-12 sm:pb-16 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">Escola de surf referência no litoral do Paraná</h2>
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                A APN Aulas de Surf é especializada na formação de surfistas com metodologia profissional, segurança e evolução consistente. Entregamos muito mais do que aulas: oferecemos um processo estruturado de evolução que desenvolve desde iniciantes até surfistas avançados, focando em técnica, leitura de mar e posicionamento.
              </p>
              <ul className="space-y-4">
                {[
                  "Metodologia profissional e segura, alinhada aos padrões internacionais",
                  "Treino fora d'água: disciplina e padrão técnico de alto rendimento",
                  "Acompanhamento estratégico, personalizado por nível",
                  "Surf Camps exclusivos com certificados e imersão total"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-neutral-900 shrink-0" />
                    <span className="text-neutral-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[380px] sm:h-[460px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl group border border-neutral-100">
              <Image src="/apn-surf-site/img/barraca_da_escola.jpeg" alt="Estrutura APN na areia" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* The Spot (O Pico) */}
      <section id="o-pico" className="scroll-mt-20 pt-6 sm:pt-8 pb-12 sm:pb-16 bg-neutral-900 text-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-2">Pico de Matinhos</h2>
            <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto">Onde a mágica acontece. Um dos melhores lugares do Brasil para aprender e evoluir.</p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-5 sm:mb-6 aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] max-h-[34vh] sm:max-h-[38vh] w-full">
            <Image
              src="/apn-surf-site/img/pico_amanhecer.jpg"
              alt="Amanhecer no Pico de Matinhos, com o mirante sobre as pedras e o mar ao fundo"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-[center_65%]"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-neutral-900/80 to-transparent" />
            <p className="absolute bottom-4 left-5 text-sm sm:text-base text-white font-semibold drop-shadow">Amanhecer no Pico de Matinhos</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            <div className="bg-neutral-800 p-5 sm:p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-2">
                <Waves className="w-6 h-6 text-neutral-300 shrink-0" />
                <h3 className="text-lg sm:text-xl font-bold">Direita Perfeita</h3>
              </div>
              <p className="text-sm sm:text-base text-neutral-400">Point break clássico de direita, fundo de areia, com ondas longas e manobráveis.</p>
            </div>
            <div className="bg-neutral-800 p-5 sm:p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-6 h-6 text-neutral-300 shrink-0" />
                <h3 className="text-lg sm:text-xl font-bold">Ideal na Maré Seca</h3>
              </div>
              <p className="text-sm sm:text-base text-neutral-400">A onda quebra devagar e é perfeita na última seção para os iniciantes entrarem com segurança.</p>
            </div>
            <a href="#surf-camp" className="bg-neutral-800 p-5 sm:p-6 rounded-2xl relative overflow-hidden group cursor-pointer sm:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <Image src="/apn-surf-site/img/surfcamp_garopaba.jpg" alt="Surf Camp" fill className="object-cover" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-6 h-6 text-neutral-300 shrink-0" />
                  <h3 className="text-lg sm:text-xl font-bold">Surf Camps</h3>
                </div>
                <p className="text-sm sm:text-base text-neutral-400">Já na 5ª edição: a próxima é na Ilha do Mel, no Grajagan Surf Resort. <span className="text-white font-semibold underline underline-offset-4 decoration-white/60 decoration-2">Ver o 5º APN Surf Camp</span></p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Surf Camp */}
      <section id="surf-camp" className="scroll-mt-20 pt-6 sm:pt-8 pb-12 sm:pb-16 bg-white overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* All key info sits above the images so nothing essential hides below the fold */}
          <div className="text-center mb-4">
            <span className="inline-block bg-neutral-900 text-white rounded-full px-4 py-1.5 text-xs sm:text-sm font-bold mb-3">
              Últimas vagas para a 5ª edição
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-2">APN Surf Camp</h2>
            <p className="text-base text-neutral-600 max-w-2xl mx-auto">
              Três dias de imersão total: hospedagem, aulas dentro e fora d&apos;água, vídeo-análise e certificado.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4">
            <span className="inline-flex items-center gap-2 bg-neutral-100 text-neutral-800 rounded-full px-4 py-2 text-sm font-semibold">
              <Calendar className="w-4 h-4" /> 25, 26 e 27 de setembro
            </span>
            <span className="inline-flex items-center gap-2 bg-neutral-100 text-neutral-800 rounded-full px-4 py-2 text-sm font-semibold">
              <MapPin className="w-4 h-4" /> Grajagan Surf Resort, Ilha do Mel (PR)
            </span>
            <span className="inline-flex items-center gap-2 bg-neutral-100 text-neutral-800 rounded-full px-4 py-2 text-sm font-semibold">
              <Waves className="w-4 h-4" /> Todos os níveis
            </span>
          </div>

          <div className="text-center mb-6">
            <a
              href="https://api.whatsapp.com/send?phone=5548996533892&text=Ol%C3%A1%2C%20quero%20garantir%20minha%20vaga%20no%205%C2%BA%20APN%20Surf%20Camp%20na%20Ilha%20do%20Mel!"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-neutral-900 text-white w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-base hover:bg-neutral-800 transition-colors"
            >
              Garantir minha vaga no WhatsApp
            </a>
          </div>

          {/* Promo arts are native 4:5 with text baked in. Width-driven grid fills the
              whole row; the essential info above stays visible without scrolling. */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full mb-6">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl group">
              <Image src="/apn-surf-site/img/ig/surfcamp5_hurley.jpg" alt="5º APN Surf Camp, últimas vagas, apresentado pela Hurley" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl group">
              <Image src="/apn-surf-site/img/ig/surfcamp5_turma.jpg" alt="Turma do APN Surf Camp reunida na areia" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl group">
              <Image src="/apn-surf-site/img/ig/surfcamp5_deck.jpg" alt="Deck do Grajagan Surf Resort, um final de semana pra guardar na memória" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>

          <p className="text-center text-sm text-neutral-500 px-2">Com apoio de Hurley, Back Wash, Grajagan Surf Resort e The Basement</p>
        </div>
      </section>

      {/* Image Gallery / Carousel */}
      <section id="galeria" className="scroll-mt-20 pt-6 sm:pt-8 pb-12 sm:pb-16 bg-neutral-900 border-t border-neutral-800 overflow-hidden relative">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">Galeria</h2>
          <p className="text-neutral-400 mt-3 max-w-xl mx-auto">Momentos reais dentro e fora d&apos;água, direto do nosso Instagram.</p>
        </div>

        {/* Custom Client Carousel Component */}
        <GalleryCarousel />

        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/apnaulasdesurf_picodematinhos/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 border border-neutral-700 text-neutral-300 px-8 py-3.5 rounded-full font-semibold hover:bg-white hover:text-neutral-900 hover:border-white transition-colors"
          >
            <InstagramIcon className="w-5 h-5" /> Ver mais no Instagram
          </a>
        </div>
      </section>

      {/* The Professor */}
      <section id="o-professor" className="scroll-mt-20 pt-6 sm:pt-8 pb-12 sm:pb-16 bg-neutral-100">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl sm:rounded-[3rem] overflow-hidden shadow-xl flex flex-col md:flex-row">
            <div className="md:w-1/2 relative min-h-[280px] sm:min-h-[400px]">
              <Image src="/apn-surf-site/img/Aminandes-Pamplona-tubo.jpg" alt="Aminandes Pamplona Neto no Tubo" fill className="object-cover" />
            </div>
            <div className="md:w-1/2 p-7 sm:p-10 lg:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-neutral-100 rounded-full px-4 py-2 w-max mb-6">
                <User className="w-4 h-4 text-neutral-600" />
                <span className="text-sm font-semibold tracking-wide uppercase text-neutral-600">Fundador & CEO</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">Aminandes Pamplona Neto</h2>
              <a href="https://www.instagram.com/aminandespamplona/" target="_blank" rel="noreferrer" className="text-lg sm:text-xl text-neutral-500 hover:text-neutral-900 transition-colors mb-6 font-light block">@aminandespamplona</a>
              
              <ul className="space-y-4 mb-7">
                <li className="flex gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-black shrink-0" />
                  <div>
                    <strong className="block text-lg">Atleta Profissional</strong>
                    <span className="text-neutral-600">Fundador com múltiplos títulos, incluindo 10x Campeão Paranaense. A mesma disciplina e padrão técnico das competições para o seu ensino.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-black shrink-0" />
                  <div>
                    <strong className="block text-lg">Instrutor Certificado</strong>
                    <span className="text-neutral-600">Certificações oficiais pela Confederação Brasileira de Surf (CBS) e pela International Surfing Association (ISA), garantindo um ensino alinhado com padrões mundiais.</span>
                  </div>
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <a href="https://www.instagram.com/apnaulasdesurf_picodematinhos/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 text-neutral-900 border-2 border-neutral-900 px-6 py-3 rounded-full font-bold hover:bg-neutral-900 hover:text-white transition-colors">
                  <InstagramIcon className="w-5 h-5" /> Instagram da Escola
                </a>
                <a href="https://api.whatsapp.com/send?phone=5548996533892&text=Ol%C3%A1%2C%20vim%20pelo%20Instagram%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20aulas%20de%20surf!" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-neutral-900 text-white px-6 py-3 rounded-full font-bold hover:bg-neutral-800 transition-colors">
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-400 pt-16 pb-10 border-t border-neutral-800">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 mb-12">
            <div>
              <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
                <div className="w-12 h-12 relative overflow-hidden rounded-full border-2 border-neutral-700 group-hover:border-white transition-colors">
                  <Image src="/apn-surf-site/img/logo.jpg" alt="APN Surf Logo" fill className="object-cover" />
                </div>
                <span className="font-bold text-xl tracking-tighter uppercase text-white">APN Surf</span>
              </Link>
              <p className="text-sm leading-relaxed">Formando surfistas preparados, conscientes e capazes de evoluir de forma sólida no Pico de Matinhos, PR.</p>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-5">Navegue</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#a-escola" className="hover:text-white transition-colors">A Escola</a></li>
                <li><a href="#o-pico" className="hover:text-white transition-colors">O Pico de Matinhos</a></li>
                <li><a href="#galeria" className="hover:text-white transition-colors">Galeria</a></li>
                <li><a href="#surf-camp" className="hover:text-white transition-colors">APN Surf Camp</a></li>
                <li><a href="#o-professor" className="hover:text-white transition-colors">O Professor</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-5">Contato</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="https://www.instagram.com/apnaulasdesurf_picodematinhos/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                    <InstagramIcon className="w-4 h-4" /> @apnaulasdesurf_picodematinhos
                  </a>
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send?phone=5548996533892" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">WhatsApp: (48) 99653-3892</a>
                </li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Pico de Matinhos, Matinhos (PR)</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-8 text-center text-sm">
            <p>© 2026 APN Aulas de Surf. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
