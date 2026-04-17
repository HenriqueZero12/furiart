import { siteContent } from "@/lib/content";

export function Segmentos() {
  const { segmentos } = siteContent;

  return (
    <section id="segmentos" className="bg-[#111111] py-32">
      <div className="container mx-auto">
        <h2 className="font-display font-black uppercase text-white text-5xl mb-16 text-center">
          {segmentos.sectionLabel}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {segmentos.items.map((seg) => (
            <div
              key={seg.id}
              className="relative aspect-[4/5] overflow-hidden group cursor-pointer bg-dark"
            >
              <img
                src={seg.image}
                alt={seg.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                loading="lazy"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
              
              {/* Content */}
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="font-display font-black uppercase text-white text-3xl mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {seg.title}
                </h3>
              </div>

              {/* Animated Brand Line */}
              <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-brand transition-all duration-700 ease-in-out group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
