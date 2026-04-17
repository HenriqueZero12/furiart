"use client";
import { siteContent } from "@/lib/content";
import { motion } from "framer-motion";

export function CicloOperacional() {
  const { ciclo } = siteContent;

  return (
    <section id="processo" className="bg-[#1A1A1A] py-32">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display font-black uppercase text-white text-5xl mb-4">
            {ciclo.sectionLabel}
          </h2>
          <p className="text-brand uppercase tracking-widest text-sm font-bold">
            {ciclo.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 border-y border-white/10">
          {ciclo.phases.map((phase, i) => (
            <motion.div
              key={phase.id}
              className="px-8 py-12 relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              {/* Hover highlight logic */}
              <div className="absolute top-0 left-0 w-full h-0 bg-white/5 transition-all duration-500 group-hover:h-full z-0" />
              
              <div className="relative z-10">
                <span className="inline-block text-brand text-xs uppercase tracking-widest font-bold mb-6 border border-brand/30 px-3 py-1 rounded-full">
                  {phase.number}
                </span>
                <h3 className="font-display font-bold text-white uppercase text-2xl mb-4">
                  {phase.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
