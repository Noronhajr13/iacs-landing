import Image from "next/image";
import ProjetoCard from "./ProjetoCard";

const projetos = [
  {
    ano: "2022/2026",
    titulo: "Pesquisa Histórica e Conservação de Acervos Documentais",
    subtitulo: "Arquivo Público Mineiro",
    cor: "var(--color-teal)",
    imagem: "/arquivo-publico-mineiro.png",
  },
  {
    ano: "2023/2025",
    titulo: "Revitalização do complexo da Usina de Marmelos Zero",
    subtitulo: "Restauração, conservação e segurança",
    cor: "var(--color-orange)",
    imagem: "/usina-marmelos.png",
  },
  {
    ano: "2005/2026",
    titulo: "Grupo Cultural Meninas de Sinhá",
    subtitulo:
      "Assistência social e cultural — Cantadeiras Meninas de Sinhá e atividades comunitárias",
    cor: "var(--color-yellow)",
    anoColor: "var(--color-yellow-text)",
    imagem: "/meninas-de-sinha.png",
  },
  {
    ano: "2025/2026",
    titulo: "Restauração Artística e Arquitetônica da Igreja Matriz de Santana",
    subtitulo: "Patos de Minas — MG. Restauração de elementos artísticos e da arquitetura do templo histórico.",
    cor: "var(--color-blue-dot)",
    imagem: "/igreja-matriz-patos.png",
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
      </div>
    </section>
  );
}
