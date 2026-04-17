"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function DiveParallaxWrapper({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return;

    // We animate the image upwards (negative yPercent) to reveal its bottom
    // as we scroll down through the Sections.
    // This gives the sensation of diving deep into the image continuously.
    const tl = gsap.to(imageRef.current, {
      yPercent: -25, // Move up by 25% of its height
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      tl.scrollTrigger?.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full z-0">
      {/* Background that persists across the wrapped sections */}
      <div className="absolute inset-0 w-full pointer-events-none -z-10" style={{ clipPath: "inset(0)" }}>
        <div className="sticky top-0 w-full h-screen bg-dark overflow-hidden">
          {/* We make the image container taller than the screen (e.g. 140vh) so we can scroll down it */}
          <div className="absolute top-0 left-0 w-full h-[140vh] will-change-transform" ref={imageRef}>
            <img
              src="/images/herosection.png"
              alt="Diving Parallax"
              className="w-full h-full object-cover"
            />
            {/* Very light overlay to improve text readability without ruining image quality */}
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </div>
      </div>

      {children}
    </div>
  );
}
