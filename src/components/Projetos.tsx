import ProjetoCard from "./ProjetoCard";

const projetos = [
  {
    ano: "2015/2026",
    titulo: "Pesquisa Histórica e Conservação de Acervos Documentais",
    subtitulo: "Arquivo Público Mineiro",
    cor: "var(--color-teal)",
    imagem: "/APM.png",
  },
  {
    ano: "2020/2022",
    titulo: "Revitalização do Arquivo Público Mineiro",
    subtitulo: "Segurança e preservação do Conjunto Arquitetônico Documental. Secult/MG",
    cor: "var(--color-orange)",
    imagem: "/APM_2.png",
  },
  {
    ano: "2025/2026",
    titulo: "Projeto de Combate a Incêndio e Pânico do Complexo Cultural",
    subtitulo: "AVCB Arquivo e Museu Mineiro, Plataforma Semente",
    cor: "var(--color-yellow-text)",
    imagem: "/APM_3.png",
  },
  {
    ano: "2024/2025",
    titulo: "Revitalização e Conservação do Complexo Arquitetônico do Arquivo Púbico Mineiro",
    subtitulo: " Secult/MG",
    cor: "var(--color-teal)",
    imagem: "/APM_4.png",
  },

  {
    ano: "2026",
    titulo: "Projeto Reserva técnica e Atelier do Museu Mineiro",
    subtitulo: "Plataforma Semente",
    cor: "var(--color-orange)",
    imagem: "/MM.png",
  },
  {
    ano: "2025/2026",
    titulo: "Restauração Artística e Arquitetônica da Igreja Matriz de Santana",
    subtitulo: "Patos de Minas — MG. Restauração de elementos artísticos e da arquitetura do templo histórico.",
    cor: "var(--color-orange)",
    imagem: "/IMP.png",
  },
  {
    ano: "2023/2025",
    titulo: "Revitalização do complexo da Usina de Marmelos Zero",
    subtitulo: "Restauração, conservação e segurança",
    cor: "var(--color-teal)",
    imagem: "/USM.png",
  },
  {
    ano: "2015/2026",
    titulo: "Grupo Cultural Meninas de Sinhá",
    subtitulo:
      "Assistência social e cultural — Cantadeiras Meninas de Sinhá e atividades comunitárias",
    cor: "var(--color-orange)",
    imagem: "/MS.png",
  },
  {
    ano: "2015/2026",
    titulo: "Sabor da Memória",
    subtitulo:
      "Receitas Afetivas de Belo Horizonte FUMID, Fundo do Idoso",
    cor: "var(--color-yellow-text)",
    imagem: "/SM.png",
  },
  {
    ano: "2015/2026",
    titulo: "Percebe-se para uma Felis Idade",
    subtitulo:
      "FUMID/Fundo do Idoso.",
    cor: "var(--color-teal)",
    imagem: "/FI.png",
  },
  {
    ano: "2015/2026",
    titulo: "Semeando Saberes Ancestrais",
    subtitulo:
      "FUMID/Fundo do Idoso.",
    cor: "var(--color-orange)",
    imagem: "/SSA.png",
  },
  {
    ano: "2024/2026",
    titulo: "Espaço do Conhecimento da UFMG",
    subtitulo:
      "Continuidade da revitalização da exposição “Demasiado Humano” - Espaço do Conhecimento UFMG - Secult/MG revitalização da exposição “Demasiado Humano” - Espaço do Conhecimento UFMG",
    cor: "var(--color-yellow-text)",
    imagem: "/ECU.png",
  },
  {
    ano: "2015/2026",
    titulo: "Espaço do Conhecimento da UFMG - Lei Federal",
    subtitulo:
      "Cidadania cultural e inovação: ações formativas no Espaço do Conhecimento UFMG - Secult/MG",
    cor: "var(--color-teal)",
    imagem: "/ECU_2.png",
  },
  {
    ano: "2026/2028",
    titulo: "Plano Trienal do Espaço do Conhecimento da UFMG",
    subtitulo:
      "",
    cor: "var(--color-orange)",
    imagem: "/ECU_3.png",
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
