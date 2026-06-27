const stats = [
  { value: "8", label: "projetos", color: "text-teal" },
  { value: "2015–26", label: "atuação", color: "text-orange" },
  { value: "MG", label: "Minas Gerais", color: "text-ink" },
] as const;

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,64px)] py-[clamp(48px,6vw,80px)] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(32px,5vw,56px)] items-center"
    >
      <div>
        <h2 className="text-[clamp(28px,3.4vw,34px)] font-[900] tracking-[-0.02em] mb-[18px] font-[family-name:var(--font-archivo)]">
          Quem é o IACS
        </h2>
        <p className="text-[clamp(16px,1.3vw,17px)] leading-[1.7] text-text-muted mb-4">
          O Instituto Artes, Cultura e Serviços (IACS) é uma organização com sede em Belo Horizonte, atuando desde 1998. Tem como propósito preservar e valorizar o patrimônio Cultural, artístico, histórico e arquitetônico de bens tombados, através da execução de projetos dos equipamentos tombados e difusão cultural. Estamos a 25 anos preservando o patrimônio e criando experiências culturais memoráveis.
        </p>
        <p className="text-[clamp(16px,1.3vw,17px)] leading-[1.7] text-text-muted mb-7">
          De acervos documentais a igrejas e usinas históricas, cada projeto une
          técnica, pesquisa e paixão pela memória mineira.
        </p>
        <div className="flex gap-9 flex-wrap">
          {stats.map((s) => (
            <div key={s.label}>
              <div
                className={`font-[family-name:var(--font-archivo)] font-[900] text-4xl tracking-[-0.02em] ${s.color}`}
              >
                {s.value}
              </div>
              <div className="text-[13px] text-text-soft uppercase tracking-[.04em] font-semibold">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
