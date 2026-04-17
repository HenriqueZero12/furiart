import { siteContent } from "@/lib/content";

export function Sustentabilidade() {
  const { sustentabilidade } = siteContent;

  return (
    <section id="sustentabilidade" className="bg-white overflow-hidden">
      <div className="container mx-auto pt-24 pb-8">
        <span className="text-brand uppercase tracking-widest text-xs font-bold inline-block border-l-4 border-brand pl-4">
          {sustentabilidade.sectionLabel}
        </span>
      </div>

      <div className="flex flex-col lg:flex-row min-h-[600px]">
        {/* Texto */}
        <div className="lg:w-1/2 flex items-center bg-[#FAFAFA]">
          <div className="w-full max-w-[720px] ml-auto px-6 lg:pr-16 py-16">
            <h2 className="font-display font-black uppercase text-dark text-5xl mb-6">
              {sustentabilidade.headline}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              {sustentabilidade.body}
            </p>
            <ul className="flex flex-col gap-4 mb-12">
              {sustentabilidade.checklist.map((item) => (
                <li key={item} className="flex items-center gap-4 text-dark font-medium">
                  <span className="w-6 h-6 shrink-0 rounded-full bg-brand flex items-center justify-center text-white text-sm shadow-md">
                    ✓
                  </span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={sustentabilidade.cta.href}
              className="inline-flex items-center gap-3 bg-brand text-dark font-bold uppercase px-8 py-4 hover:brightness-110 transition-all shadow-lg hover:shadow-brand/20 hover:-translate-y-1"
            >
              {sustentabilidade.cta.label} &rarr;
            </a>
          </div>
        </div>

        {/* Imagem */}
        <div className="lg:w-1/2 relative min-h-[400px]">
          <img
            src={sustentabilidade.image.src}
            alt={sustentabilidade.image.alt}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
