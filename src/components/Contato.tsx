export default function Contato() {
  return (
    <section
      id="contato"
      className="bg-ink px-[clamp(20px,5vw,64px)] py-[clamp(56px,6vw,84px)] text-center relative overflow-hidden"
    >
      <div className="absolute left-[6%] top-10 w-[60px] h-[60px] rounded-full bg-yellow opacity-90" />
      <div
        className="absolute right-[8%] bottom-10"
        style={{
          width: 0,
          height: 0,
          borderBottom: "60px solid var(--color-teal)",
          borderLeft: "60px solid transparent",
        }}
      />

      <h2 className="text-[clamp(28px,3.8vw,38px)] font-[900] text-white mb-[14px] tracking-[-0.02em] relative font-[family-name:var(--font-archivo)]">
        Bora preservar a memória de Minas?
      </h2>
      <p className="text-base text-[#B0B0A6] mx-auto mb-[30px] max-w-[440px] relative">
        Fale com a equipe do IACS sobre o seu projeto de restauração, conservação
        ou requalificação de patrimônio.
      </p>
      <div className="relative flex gap-[14px] justify-center flex-wrap">
        <a
          href="mailto:contato@iacs.org.br"
          className="bg-teal text-white px-[38px] py-4 rounded-full font-bold text-base hover:bg-white hover:text-ink transition-colors"
        >
          contato@iacs.org.br
        </a>
        <a
          href="#"
          className="border-2 border-[#4A4A44] text-white px-8 py-[14px] rounded-full font-bold text-base hover:border-teal hover:text-teal transition-colors"
        >
          (31) 0000-0000
        </a>
      </div>
    </section>
  );
}
