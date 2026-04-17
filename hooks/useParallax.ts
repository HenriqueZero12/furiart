"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useParallax(factor = 0.4) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const tl = gsap.to(el, {
      yPercent: factor * 100,
      ease: "none",
      scrollTrigger: {
        trigger: el.parentElement,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      tl.scrollTrigger?.kill();
    };
  }, [factor]);

  return ref;
}
