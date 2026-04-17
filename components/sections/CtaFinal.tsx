"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteContent } from "@/lib/content";

export function CtaFinal() {
  const { cta } = siteContent;
  const parallaxRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!parallaxRef.current || !containerRef.current) return;
    
    // Efeito para a última dobra: a imagem faz um "zoom-in" 
    // dando a impressão de estarmos mergulhando fundo em direção ao oceano
    gsap.fromTo(
      parallaxRef.current,
      { scale: 1 },
      {
        scale: 1.25,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section ref={containerRef} id="contato" className="relative overflow-hidden py-32 lg:py-48 bg-dark">
      {/* Abissal Zoom Background */}
      <div ref={parallaxRef} className="absolute inset-0 will-change-transform">
        <img
          src="/images/ultimadobra.png"
          className="w-full h-full object-cover"
          alt="Contato Furiart"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-dark/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="font-display font-black uppercase text-white text-[clamp(40px,6vw,88px)] leading-none mb-8 drop-shadow-lg">
          {cta.headline.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12">
          {cta.body}
        </p>
        <a
          href={cta.button.href}
          className="inline-flex items-center justify-center gap-3 border-[3px] border-brand text-brand uppercase font-bold tracking-widest px-12 py-5 hover:bg-brand hover:text-dark transition-all duration-300 shadow-[0_0_20px_rgba(141,198,63,0)] hover:shadow-[0_0_20px_rgba(141,198,63,0.4)]"
        >
          {cta.button.label}
        </a>
      </div>
    </section>
  );
}
