import Image from "next/image";
import Link from "next/link";
import { MapPin, Waves, Calendar, User, ArrowRight, CheckCircle2, Instagram } from "lucide-react";
import GalleryCarousel from "@/components/GalleryCarousel";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans text-neutral-900">
      
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section id="inicio" className="relative w-full h-[90vh] bg-neutral-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image 
            src="/apn-surf-site/img/aula.jpg" 
            alt="Surf APN" 
            fill 
            className="object-cover object-[center_30%] md:object-center"
            priority
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 uppercase tracking-tight">
            A evolução começa na areia e <span className="text-neutral-300">continua na onda.</span>
          </h1>
          <p className="text-lg md:text-2xl text-neutral-200 mb-10 font-light max-w-2xl mx-auto">
            A APN não forma apenas alunos — forma surfistas preparados, conscientes e capazes de evoluir de forma sólida no surf.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#a-escola" className="bg-white text-neutral-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
              Quero evoluir <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#o-professor" className="bg-transparent border border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
              Conhecer o Método
            </a>
          </div>
        </div>
      </section>

      {/* About The School */}
      <section id="a-escola" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold uppercase tracking-tight">Escola de Surf Referência</h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
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
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl group border border-neutral-100">
              <Image src="/apn-surf-site/img/barraca_da_escola.jpeg" alt="Estrutura APN na areia" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* The Spot (O Pico) */}
      <section id="o-pico" className="py-24 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold uppercase tracking-tight mb-4">Pico de Matinhos</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">Onde a mágica acontece. Um dos melhores lugares do Brasil para aprender e evoluir.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-800 p-8 rounded-2xl flex flex-col items-center text-center">
              <Waves className="w-12 h-12 mb-6 text-neutral-300" />
              <h3 className="text-2xl font-bold mb-3">Direita Perfeita</h3>
              <p className="text-neutral-400">Point break clássico de direita, fundo de areia, com ondas longas e manobráveis.</p>
            </div>
            <div className="bg-neutral-800 p-8 rounded-2xl flex flex-col items-center text-center">
              <MapPin className="w-12 h-12 mb-6 text-neutral-300" />
              <h3 className="text-2xl font-bold mb-3">Ideal na Maré Seca</h3>
              <p className="text-neutral-400">A onda quebra devagar e é perfeita na última seção para os iniciantes entrarem com segurança.</p>
            </div>
            <div className="bg-neutral-800 p-8 rounded-2xl flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-20">
                <Image src="/apn-surf-site/img/surfcamp_garopaba.jpg" alt="Surf Camp" fill className="object-cover" />
              </div>
              <div className="relative z-10">
                <Calendar className="w-12 h-12 mb-6 text-neutral-300 mx-auto" />
                <h3 className="text-2xl font-bold mb-3">Surf Camps</h3>
                <p className="text-neutral-400">Edições passadas e futuras, como Garopaba e em breve Ilha do Mel. Imersão total.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery / Carousel */}
      <section className="py-24 bg-neutral-900 border-t border-neutral-800 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <h2 className="text-3xl font-bold text-white uppercase tracking-tight">Galeria & Lifestyle</h2>
          <p className="text-neutral-400 mt-4">Momentos irados dentro e fora d'água.</p>
        </div>
        
        {/* Custom Client Carousel Component */}
        <GalleryCarousel />
      </section>

      {/* The Professor */}
      <section id="o-professor" className="py-24 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl flex flex-col md:flex-row">
            <div className="md:w-1/2 relative min-h-[400px]">
              <Image src="/apn-surf-site/img/Aminandes-Pamplona-tubo.jpg" alt="Aminandes Pamplona Neto no Tubo" fill className="object-cover" />
            </div>
            <div className="md:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-neutral-100 rounded-full px-4 py-2 w-max mb-6">
                <User className="w-4 h-4 text-neutral-600" />
                <span className="text-sm font-semibold tracking-wide uppercase text-neutral-600">Fundador & CEO</span>
              </div>
              <h2 className="text-4xl font-bold mb-2">Aminandes Pamplona Neto</h2>
              <a href="https://www.instagram.com/aminandespamplona/" target="_blank" rel="noreferrer" className="text-xl text-neutral-500 hover:text-neutral-900 transition-colors mb-8 font-light block">@aminandespamplona</a>
              
              <ul className="space-y-6 mb-8">
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
              
              <div className="flex flex-wrap gap-4">
                <a href="https://www.instagram.com/apnaulasdesurf_picodematinhos/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 text-neutral-900 border-2 border-neutral-900 px-6 py-3 rounded-full font-bold hover:bg-neutral-900 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" /> Instagram da Escola
                </a>
                <a href="https://api.whatsapp.com/send?phone=5548996533892&text=Ol%C3%A1%2C%20vim%20pelo%20Instagram%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20aulas%20de%20surf!" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-neutral-900 text-white px-6 py-3 rounded-full font-bold hover:bg-neutral-800 transition-colors">
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Coming Soon */}
      <footer className="bg-neutral-900 text-neutral-400 py-12 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/" className="inline-block">
            <div className="w-16 h-16 relative overflow-hidden rounded-full mx-auto mb-6 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer">
              <Image src="/apn-surf-site/img/logo.jpg" alt="APN Surf Logo" fill className="object-cover" />
            </div>
          </Link>
          <p className="mb-4">© 2026 APN Aulas de Surf. Pico de Matinhos, PR.</p>
          <p className="text-sm">Em breve: Sistema de login de alunos e agendamento de aulas.</p>
        </div>
      </footer>
    </div>
  );
}
