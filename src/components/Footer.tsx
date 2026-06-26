export default function Footer() {
  return (
    <footer className="bg-ink-deep px-[clamp(20px,5vw,64px)] py-10 flex flex-col gap-6 text-[12.5px] text-[#8F8F85]">
      <div className="flex items-start justify-between flex-wrap gap-6">
        <div>
          <span className="font-[family-name:var(--font-archivo)] font-[900] text-base text-white block mb-2">
            INSTITUTO ARTES CULTURA SERVIÇOS
          </span>
          <div className="leading-[1.8] space-y-0.5">
            <p>Rua Bonfim, 1011 - Bairro Bonfim - CEP 31.210-150 - Belo Horizonte/MG</p>
            <p>CNPJ 19.714.880/0001.96 - Inscrição Municipal 0371012/0001-4</p>
            <p>
              e-mail:{" "}
              <a
                href="mailto:artes.insatituto@gmail.com"
                className="text-teal hover:text-white transition-colors"
              >
                artes.insatituto@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-[#2a2a26] pt-4">
        <span>© 2026 Instituto Artes Cultura e Serviços · Minas Gerais</span>
      </div>
    </footer>
  );
}
