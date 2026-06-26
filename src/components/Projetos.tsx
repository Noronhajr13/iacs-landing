import Image from "next/image";
import ProjetoCard from "./ProjetoCard";

const projetos = [
  {
    ano: "2022/2025",
    titulo: "Pesquisa Histórica e Conservação de Acervos Documentais",
    subtitulo: "Arquivo Público Mineiro",
    cor: "var(--color-teal)",
    imagem: "/arquivo-publico-mineiro.png",
  },
  {
    ano: "2023/2024",
    titulo: "Revitalização do complexo da Usina de Marmelos Zero",
    subtitulo: "Restauração, conservação e segurança",
    cor: "var(--color-orange)",
    imagem: "/usina-marmelos.png",
  },
  {
    ano: "2024",
    titulo: "Grupo Cultural Meninas de Sinhá",
    subtitulo:
      "Assistência social e cultural — Cantadeiras Meninas de Sinhá e atividades comunitárias",
    cor: "var(--color-yellow)",
    anoColor: "var(--color-yellow-text)",
    imagem: "/meninas-de-sinha.png",
  },
  {
    ano: "2024/2025",
    titulo: "AVCB e Revitalização do Complexo Arquitetônico",
    subtitulo: "Arquivo Público Mineiro",
    cor: "var(--color-blue-dot)",
    imagem: "/arquivo-publico-mineiro.png",
  },
];

export default function Projetos() {
  return (
    <section
      id="projetos"
      className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,64px)] pb-[clamp(56px,6vw,84px)]"
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="w-7 h-1 bg-teal block" />
        <span className="font-bold text-xs tracking-[.12em] uppercase text-[#8a8a80]">
          Portfólio
        </span>
      </div>
      <h2 className="text-[clamp(28px,3.6vw,36px)] font-[900] tracking-[-0.02em] mb-[30px] font-[family-name:var(--font-archivo)]">
        Projetos realizados
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[22px]">
        {projetos.map((p) => (
          <ProjetoCard key={p.titulo} {...p} />
        ))}

        {/* Card 5 — destaque largo */}
        <div className="col-span-full border border-card-border rounded-xl overflow-hidden bg-surface hover:shadow-[0_10px_24px_rgba(0,0,0,.09)] transition-shadow grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
          <div className="relative bg-card-border min-h-[240px]">
            <Image
              src="/igreja-matriz-patos.png"
              alt="Igreja Matriz de Santana de Patos"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-[clamp(24px,3vw,40px)] flex flex-col justify-center border-l-[5px] border-coral">
            <div className="font-bold text-xs tracking-[.05em] text-coral">
              2025/2026
            </div>
            <div className="text-[clamp(20px,2.2vw,24px)] font-[800] leading-[1.25] mt-2">
              Restauração Artística e Arquitetônica da Igreja Matriz de Santana
            </div>
            <div className="text-[14.5px] text-text-soft mt-2">
              Patos de Minas — MG. Restauração de elementos artísticos e da
              arquitetura do templo histórico.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
