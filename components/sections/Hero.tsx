"use client";
import { siteContent } from "@/lib/content";
import { motion } from "framer-motion";

const { hero } = siteContent;

export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen overflow-hidden bg-transparent"
    >
      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col justify-end h-full pb-24">
        <div className="container mx-auto">
          <h1 className="font-display font-black uppercase leading-none text-white text-[clamp(56px,8vw,128px)]">
            {hero.headline.map((line, i) => (
              <motion.span
                key={i}
                className="block"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.15,
                  ease: [0.33, 1, 0.68, 1], // easeOutCubic
                }}
              >
                {line}
              </motion.span>
            ))}
          </h1>
        </div>
      </div>
    </section>
  );
}
