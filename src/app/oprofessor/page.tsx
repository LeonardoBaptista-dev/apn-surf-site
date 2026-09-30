import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import InViewVideo from "@/components/InViewVideo";

export const metadata: Metadata = {
  title: "Aminandes Pamplona Neto | APN Surf Escola",
  description:
    "A trajetória de Aminandes Pamplona Neto: do projeto Surf na Escola em Matinhos a 10x campeão paranaense, QS da WSL e fundador da APN Aulas de Surf.",
};

const V = "/apn-surf-site/video/professor";
const IMG = "/apn-surf-site/img/professor";
const WHATSAPP =
  "https://api.whatsapp.com/send?phone=5548996533892&text=Ol%C3%A1%2C%20vi%20a%20trajet%C3%B3ria%20do%20Aminandes%20no%20site%20e%20quero%20treinar%20com%20ele!";

const trajetoria = [
  {
    marco: "Aos 5 anos",
    titulo: "De Curitiba para o mar",
    texto:
      "Nascido no bairro Santa Felicidade, em Curitiba, muda com a família para Matinhos. O pai era pescador, e o mar vira o quintal de casa.",
  },
  {
    marco: "Aos 8 anos",
    titulo: "Surf na Escola",
    texto:
      "Troca o futebol pelo surf no projeto social Surf na Escola, que dava aulas para alunos com bom desempenho na escola. Um casal de surfistas da cidade banca as primeiras inscrições, e no primeiro ano de campeonatos ele já é vice na categoria iniciante.",
  },
  {
    marco: "Circuitos do Sul",
    titulo: "10 títulos paranaenses",
    texto:
      "Representando o Paraná, soma dez títulos estaduais, o título catarinense e o vice gaúcho. São centenas de troféus espalhados pela casa, cada um com uma história.",
  },
  {
    marco: "A volta por cima",
    titulo: "18 meses previstos, 3 e meio de verdade",
    texto:
      "Num aéreo na Ilha do Mel, fratura a tíbia e a fíbula. O prognóstico era de um ano e meio longe das competições. Com fisioterapia todos os dias, volta à água em três meses e meio.",
  },
  {
    marco: "2023",
    titulo: "Campeão do Eco Ilha Open",
    texto:
      "Vence a categoria Open, a principal do evento, e leva uma passagem para o Peru, uma prancha nova e outras premiações.",
    foto: { src: `${IMG}/eco-ilha-2023.jpg`, alt: "Aminandes no pódio do Eco Ilha Open 2023, com a prancha de premiação" },
  },
  {
    marco: "2024",
    titulo: "Estreia no QS da World Surf League",
    texto:
      "Disputa o Circuito Banco do Brasil em Torres (RS), etapa da divisão de acesso da liga mundial, com nota 7,40 na bateria.",
  },
  {
    marco: "Hoje",
    titulo: "Fundador da APN Aulas de Surf",
    texto:
      "No Pico de Matinhos, ensina crianças a partir de 5 anos até surfistas avançados, e já realizou cinco edições do APN Surf Camp.",
  },
];

const clipes = [
  { src: `${V}/clip-camera-lenta.mp4`, poster: `${V}/clip-camera-lenta.jpg`, legenda: "Câmera lenta no quintal de casa", data: "2024" },
  { src: `${V}/clip-free-surf.mp4`, poster: `${V}/clip-free-surf.jpg`, legenda: "Free surf na Barrinha", data: "Agosto de 2026" },
  { src: `${V}/clip-aereo.mp4`, poster: `${V}/clip-aereo.jpg`, legenda: "Aéreo na mesma sessão", data: "Agosto de 2026" },
];

const marcas = [
  { nome: "Hike Brava", handle: "hikebrava" },
  { nome: "Simões Surfboards", handle: "simoes.surfboards" },
  { nome: "Surfview Brasil", handle: "surfview_brasil" },
];

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function OProfessor() {
  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col font-sans text-white">
      <Header />

      {/* Hero: name as a championship poster, slow-motion aerial in its native vertical frame */}
      <section className="relative overflow-hidden pt-28 pb-16 lg:pb-20">
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute -left-6 top-20 lg:top-12 text-[11rem] sm:text-[16rem] lg:text-[24rem] font-black leading-none text-transparent"
          style={{ WebkitTextStroke: "2px rgba(255,255,255,0.07)" }}
        >
          10×
        </span>

        <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[minmax(0,1fr)_auto] gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-neutral-400 font-medium mb-4">Free surfer, coach e fundador da APN</p>
            <h1 className="font-black uppercase tracking-tight leading-[0.9] text-5xl sm:text-7xl xl:text-8xl mb-8">
              Aminandes
              <br />
              Pamplona Neto
            </h1>
            <blockquote className="border-l-2 border-white/30 pl-5 mb-10 max-w-xl">
              <p className="text-xl sm:text-2xl font-light text-white/90 leading-snug">
                &ldquo;Eu durmo pensando em surf e acordo pensando em surf.&rdquo;
              </p>
            </blockquote>

            <dl className="grid grid-cols-3 gap-4 sm:gap-8 max-w-xl mb-10">
              <div>
                <dt className="text-sm text-neutral-400">Títulos paranaenses</dt>
                <dd className="text-4xl sm:text-5xl font-black">10</dd>
              </div>
              <div>
                <dt className="text-sm text-neutral-400">Surfando desde os</dt>
                <dd className="text-4xl sm:text-5xl font-black">8</dd>
              </div>
              <div>
                <dt className="text-sm text-neutral-400">APN Surf Camps</dt>
                <dd className="text-4xl sm:text-5xl font-black">5</dd>
              </div>
            </dl>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-white text-neutral-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ease-in-out hover:bg-neutral-100 hover:-translate-y-0.5">
                Treinar com o Aminandes
              </a>
              <a href="https://www.instagram.com/aminandespamplona/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ease-in-out hover:bg-white/20 hover:-translate-y-0.5">
                <InstagramIcon className="w-5 h-5" /> @aminandespamplona
              </a>
            </div>
          </div>

          <figure className="mx-auto w-full max-w-sm lg:max-w-none lg:w-auto">
            <div className="relative aspect-[9/16] w-full lg:w-auto lg:h-[72vh] lg:max-h-[760px] rounded-[2rem] overflow-hidden ring-1 ring-white/15 shadow-2xl shadow-black/50">
              <InViewVideo
                src={`${V}/hero-aereo.mp4`}
                poster={`${V}/hero-aereo.jpg`}
                label="Aminandes surfando em câmera lenta, com um aéreo"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <figcaption className="text-sm text-neutral-400 mt-3 text-center">Aéreo em câmera lenta, no quintal de casa</figcaption>
          </figure>
        </div>
      </section>

      {/* Career: a real sequence, so a numbered timeline earns its place */}
      <section className="bg-neutral-50 text-neutral-900 py-16 sm:py-24">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-10 lg:gap-16">
          <div className="lg:sticky lg:top-28 self-start">
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight mb-4">Trajetória</h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-md">
              Do projeto social na escola ao QS da liga mundial, sempre com o Pico de Matinhos como casa.
            </p>
            <div className="relative aspect-[4/5] w-full max-w-sm rounded-2xl overflow-hidden ring-1 ring-neutral-900/10">
              <Image src={`${IMG}/retrato.jpg`} alt="Retrato de Aminandes Pamplona Neto sorrindo com a prancha na praia" fill sizes="(max-width: 1024px) 90vw, 30vw" className="object-cover" />
            </div>
          </div>

          <ol className="relative border-l-2 border-neutral-200 ml-3">
            {trajetoria.map((item, i) => (
              <li key={item.titulo} className="relative pl-8 sm:pl-10 pb-12 last:pb-0">
                <span className="absolute -left-[17px] top-0 flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900 text-white text-sm font-bold">
                  {i + 1}
                </span>
                <p className="text-sm font-semibold text-neutral-500 mb-1">{item.marco}</p>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-3">{item.titulo}</h3>
                <p className="text-neutral-700 text-base sm:text-lg leading-relaxed max-w-2xl">{item.texto}</p>
                {item.foto && (
                  <div className="relative mt-5 aspect-[4/5] w-full max-w-xs rounded-2xl overflow-hidden ring-1 ring-neutral-900/10">
                    <Image src={item.foto.src} alt={item.foto.alt} fill sizes="320px" className="object-cover" />
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* In the water: clips play only while visible */}
      <section className="py-16 sm:py-24">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight mb-3">Na água</h2>
            <p className="text-lg text-neutral-400 max-w-xl">O estilo que ele leva para as aulas, direto do Instagram dele.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {clipes.map((c) => (
              <figure key={c.src} className="group">
                <div className="relative aspect-[9/16] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-800">
                  <InViewVideo src={c.src} poster={c.poster} label={c.legenda} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
                  <figcaption className="absolute bottom-0 inset-x-0 p-5">
                    <span className="block font-bold text-lg">{c.legenda}</span>
                    <span className="block text-sm text-white/70">{c.data}</span>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching */}
      <section className="bg-neutral-100 text-neutral-900 py-16 sm:py-24">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight mb-6">Como ele ensina</h2>
            <blockquote className="text-2xl sm:text-3xl font-light leading-snug mb-8">
              &ldquo;Todo mundo que chega aqui fica de pé na primeira aula.&rdquo;
            </blockquote>
            <ul className="space-y-5">
              <li>
                <strong className="block text-lg">Instrutor certificado</strong>
                <span className="text-neutral-600">Certificações da Confederação Brasileira de Surf (CBS) e da International Surfing Association (ISA).</span>
              </li>
              <li>
                <strong className="block text-lg">Método de competição</strong>
                <span className="text-neutral-600">A mesma disciplina e o padrão técnico dos campeonatos, adaptados a cada nível, de crianças a partir de 5 anos até avançados.</span>
              </li>
              <li>
                <strong className="block text-lg">Treino fora d&apos;água</strong>
                <span className="text-neutral-600">Aquecimento, mobilidade e técnica na areia antes de cada sessão.</span>
              </li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-neutral-900/10">
            <Image src="/apn-surf-site/img/foto_conceito_aminandes_menina_atras_2.jpeg" alt="Aminandes orientando uma aluna na areia" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Sponsors + closing CTA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neutral-400 mb-4">Marcas que acreditam no Aminandes</p>
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {marcas.map((m) => (
              <a key={m.handle} href={`https://www.instagram.com/${m.handle}/`} target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-full border border-white/15 bg-white/5 font-semibold transition-all duration-300 ease-in-out hover:bg-white/15 hover:border-white/30">
                {m.nome}
              </a>
            ))}
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-6">Bora pra água?</h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-white text-neutral-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ease-in-out hover:bg-neutral-100 hover:-translate-y-0.5">
              Agendar uma aula
            </a>
            <a href="/apn-surf-site/" className="inline-flex items-center justify-center border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ease-in-out hover:bg-white/10">
              Voltar para o início
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-neutral-500 px-4">
        <p className="mb-1">© 2026 APN Aulas de Surf. Pico de Matinhos, Matinhos (PR).</p>
        <p>
          Fontes:{" "}
          <a className="underline underline-offset-2 hover:text-white" href="https://ric.com.br/entretenimento/surfista-faz-do-mar-de-matinhos-sua-segunda-casa-conheca/" target="_blank" rel="noreferrer">reportagem da RIC (janeiro de 2026)</a>
          {" "}e{" "}
          <a className="underline underline-offset-2 hover:text-white" href="https://www.worldsurfleague.com/athletes/19098/aminandes-pamplona" target="_blank" rel="noreferrer">perfil na World Surf League</a>.
        </p>
      </footer>
    </div>
  );
}
