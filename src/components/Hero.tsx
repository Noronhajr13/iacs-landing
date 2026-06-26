import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,64px)] pt-[clamp(28px,4vw,56px)] pb-[clamp(40px,5vw,72px)] grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(32px,5vw,64px)] items-center">
      <div>
        <div className="inline-flex items-center gap-2 bg-badge-bg text-yellow-text px-4 py-2 rounded-full text-xs font-bold tracking-[.06em] uppercase mb-6">
          Patrimônio histórico · Minas Gerais
        </div>
        <h1 className="text-[clamp(36px,5.2vw,60px)] leading-[1.0] font-[900] tracking-[-0.025em] mb-[22px] font-[family-name:var(--font-archivo)]">
          Arte, cultura e <span className="text-teal">memória</span> que a gente{" "}
          <span className="text-orange">restaura</span>.
        </h1>
        <p className="text-[clamp(16px,1.4vw,18px)] leading-[1.6] text-text-muted mb-8 max-w-[480px]">
          O IACS dá nova vida ao patrimônio histórico mineiro — com restauração,
          conservação, pesquisa e exposições que celebram o legado cultural.
        </p>
        <div className="flex gap-[14px] flex-wrap">
          <a
            href="#projetos"
            className="bg-teal text-white px-[30px] py-[15px] rounded-full font-bold text-[15px] hover:bg-teal-hover transition-colors"
          >
            Ver projetos
          </a>
          <a
            href="#contato"
            className="border-2 border-ink text-ink px-7 py-[13px] rounded-full font-bold text-[15px] hover:bg-ink hover:text-white transition-colors"
          >
            Fale conosco
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -top-[26px] -right-[10px] w-24 h-24 rounded-full bg-yellow z-0" />
        <div
          className="absolute -bottom-[22px] -left-[22px] z-0"
          style={{
            width: 0,
            height: 0,
            borderBottom: "72px solid var(--color-teal)",
            borderRight: "72px solid transparent",
          }}
        />
        <div className="relative z-[1] w-full aspect-[4/3] rounded-[18px] shadow-[0_18px_40px_rgba(0,0,0,.12)] overflow-hidden">
          <Image
            src="/foto-principal.png"
            alt="Patrimônio histórico - IACS"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
