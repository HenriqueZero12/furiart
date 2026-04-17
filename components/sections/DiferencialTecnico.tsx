"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteContent } from "@/lib/content";

export function DiferencialTecnico() {
  const { diferenciais } = siteContent;
  const parallaxRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!parallaxRef.current || !containerRef.current) return;
    
    // Efeito de "mergulho": a imagem desliza muito sutilmente para cima
    // conforme o usuário rola, revelando as partes mais fundas.
    gsap.to(parallaxRef.current, {
      yPercent: -25,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom", // Inicia a animação quando a seção aparece na parte inferior da tela
        end: "bottom top", // Termina quando sai pela parte superior
        scrub: true,
      },
    });
  }, []);

  return (
    <section ref={containerRef} id="diferenciais" className="relative w-full min-h-[600px] bg-dark">
      {/* Background with Parallax */}
      <div className="absolute inset-0 w-full overflow-hidden pointer-events-none">
        <div ref={parallaxRef} className="absolute top-0 left-0 w-full h-[130%] will-change-transform">
          <img
            src="/images/terceiradobra.png"
            alt="Diferenciais Furiart"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Overlay escuro que acompanha exatamente a div do parallax */}
          <div className="absolute inset-0 bg-dark/70" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Stat Badge */}
          <div className="flex justify-center lg:justify-start">
            <div className="border-2 border-brand/30 p-12 relative bg-dark/40 backdrop-blur-sm max-w-sm w-full text-center lg:text-left">
              <span className="font-display font-black text-[120px] text-brand leading-none block">
                {diferenciais.stat.value}
              </span>
              <span className="text-white uppercase tracking-widest text-sm font-bold block mt-4">
                {diferenciais.stat.label}
              </span>
              {/* Geometric Accents */}
              <div className="absolute top-0 left-0 w-12 h-1 bg-brand" />
              <div className="absolute bottom-0 right-0 w-12 h-1 bg-brand" />
              <div className="absolute top-0 left-0 h-12 w-1 bg-brand" />
              <div className="absolute bottom-0 right-0 h-12 w-1 bg-brand" />
            </div>
          </div>

          {/* Right: Differential List */}
          <div className="flex flex-col gap-10">
            <h2 className="font-display font-black uppercase text-white text-5xl">
              {diferenciais.sectionLabel}
            </h2>
            <div className="flex flex-col gap-8">
              {diferenciais.items.map((item) => (
                <div key={item.number} className="flex gap-6 border-b border-white/10 pb-8 last:border-0 last:pb-0">
                  <span className="font-display font-black text-brand text-4xl w-12 shrink-0 leading-none">
                    {item.number}
                  </span>
                  <div>
                    <h4 className="font-bold text-white text-xl uppercase mb-2 tracking-wide">
                      {item.title}
                    </h4>
                    <p className="text-base text-gray-400 leading-relaxed max-w-md">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
