import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap gap-4 max-w-[1280px] mx-auto px-[clamp(20px,5vw,64px)] py-5">
      <Image
        src="/iacs-mark.png"
        alt="IACS"
        width={120}
        height={38}
        className="h-[38px] w-auto"
        priority
      />
      <div className="flex items-center gap-[clamp(16px,2.4vw,28px)] font-bold text-sm">
        <a href="#sobre" className="text-ink hover:text-teal transition-colors">
          Sobre
        </a>
        <a
          href="#atuacao"
          className="text-ink hover:text-teal transition-colors"
        >
          Atuação
        </a>
        <a
          href="#projetos"
          className="text-ink hover:text-teal transition-colors"
        >
          Projetos
        </a>
        <a
          href="#contato"
          className="bg-ink text-white px-[22px] py-[11px] rounded-full hover:bg-teal transition-colors"
        >
          Fale conosco
        </a>
      </div>
    </nav>
  );
}
