const areas = [
  {
    title: "Restauração",
    description: "Arquitetônica e artística de bens históricos.",
    bg: "bg-teal",
    textColor: "text-white",
    descColor: "text-[#e3f6fb]",
  },
  {
    title: "Conservação",
    description: "Acervos documentais e complexos arquitetônicos.",
    bg: "bg-orange",
    textColor: "text-white",
    descColor: "text-[#fde8db]",
  },
  {
    title: "Cultura",
    description: "Pesquisa, curadoria e exposições.",
    bg: "bg-yellow",
    textColor: "text-[#3a2c00]",
    descColor: "text-[#5c4500]",
  },
] as const;

export default function AreasStrip() {
  return (
    <section
      id="atuacao"
      className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))]"
    >
      {areas.map((area) => (
        <div
          key={area.title}
          className={`${area.bg} ${area.textColor} py-9 px-[clamp(24px,3vw,40px)]`}
        >
          <div className="font-[family-name:var(--font-archivo)] font-[900] text-[19px] mb-[6px]">
            {area.title}
          </div>
          <div className={`text-sm leading-[1.5] ${area.descColor}`}>
            {area.description}
          </div>
        </div>
      ))}
    </section>
  );
}
