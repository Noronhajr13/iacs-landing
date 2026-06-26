import Image from "next/image";

interface ProjetoCardProps {
  ano: string;
  titulo: string;
  subtitulo: string;
  cor: string;
  anoColor?: string;
  imagem?: string;
}

export default function ProjetoCard({
  ano,
  titulo,
  subtitulo,
  cor,
  anoColor,
  imagem,
}: ProjetoCardProps) {
  return (
    <div className="border border-card-border rounded-xl overflow-hidden bg-surface hover:shadow-[0_10px_24px_rgba(0,0,0,.09)] transition-shadow">
      <div className="relative w-full aspect-[16/10] bg-card-border">
        {imagem ? (
          <Image
            src={imagem}
            alt={titulo}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <span className="text-text-soft text-sm">Foto do projeto</span>
          </div>
        )}
      </div>
      <div className="h-[5px]" style={{ background: cor }} />
      <div className="p-[22px]">
        <div
          className="font-bold text-xs tracking-[.05em]"
          style={{ color: anoColor || cor }}
        >
          {ano}
        </div>
        <div className="text-[17px] font-bold leading-[1.35] mt-[6px]">
          {titulo}
        </div>
        <div className="text-[13.5px] text-text-soft mt-[6px]">{subtitulo}</div>
      </div>
    </div>
  );
}
