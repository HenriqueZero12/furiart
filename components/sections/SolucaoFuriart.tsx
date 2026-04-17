import { siteContent } from "@/lib/content";
import clsx from "clsx";

export function SolucaoFuriart() {
  const { solucao } = siteContent;

  return (
    <section id="solucoes" className="bg-[#EAEAEA] pb-24">
      {/* Retirar ou mover o título se quiser espelhar só os cards, ou manter acima integrado ao fundo escuro da primeira dobra se estiver vazando.
          Pela imagem, apenas os cards com os conteudos. */}
      <div className="container mx-auto">
        {/* Mantemos o cabeçalho original, ajuste se preferir tirar */}
        <div className="mb-16 pt-24 md:w-1/2">
          <h2 className="font-display font-black uppercase text-dark text-5xl inline-block relative mb-6">
            {solucao.sectionLabel}
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-brand" />
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">{solucao.intro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 h-full items-stretch">
          {solucao.cards.map((card, i) => (
            <div
              key={card.id}
              className={clsx(
                "flex flex-col justify-between transition-transform duration-300",
                card.featured
                  ? "bg-[#2B2B2B] text-white py-12 px-8 -mx-4 md:mx-0 shadow-2xl relative z-10 scale-105"
                  : "bg-transparent text-dark py-12 px-4 md:px-8"
              )}
            >
              <div className="flex flex-col gap-6">
                {/* Icone Verde com CSS invert/sepia trick para forçar a cor brand ou apenas deixá-lo no tamanho exato */}
                <div className="w-10 h-10 mb-2">
                  <img
                    src={card.icon}
                    alt=""
                    style={{
                      // Forçar a cor verde (#8DC63F) via filtro: https://codepen.io/sosuke/pen/Pjoqqp
                      filter: "invert(73%) sepia(51%) saturate(543%) hue-rotate(44deg) brightness(98%) contrast(93%)"
                    }}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-display font-black uppercase text-[1.65rem] leading-tight tracking-wide">
                  {card.title}
                </h3>
                <p className={clsx("text-base leading-relaxed mb-8", card.featured ? "text-gray-400" : "text-gray-600")}>
                  {card.description}
                </p>
              </div>

              {/* Imagem embaixo com bordas arredondadas e efeito preto-e-branco nos não destacados */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl mt-auto shadow-md">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className={clsx(
                    "w-full h-full object-cover transition-all duration-700 hover:scale-110",
                    !card.featured && "grayscale opacity-80 hover:grayscale-0 hover:opacity-100"
                  )}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
