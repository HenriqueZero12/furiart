import { siteContent } from "@/lib/content";

export function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="bg-[#111111] text-gray-400 py-16 border-t border-white/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Logo */}
          <div>
            <img src="/logofuriart.png" alt="Furiart Logo" className="h-[46px] w-auto object-contain mb-4 opacity-90" />
            <p className="text-sm leading-relaxed">{footer.tagline}</p>
          </div>

          {/* Col 2: Nav */}
          <div>
            <h4 className="text-white uppercase text-xs tracking-widest font-bold mb-4">Navegação</h4>
            <ul className="flex flex-col gap-2">
              {footer.nav.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm hover:text-brand transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contatos */}
          <div>
            <h4 className="text-white uppercase text-xs tracking-widest font-bold mb-4">Contatos</h4>
            <p className="text-sm">{footer.contacts.email}</p>
            <p className="text-sm mt-1">{footer.contacts.phone}</p>
            <p className="text-sm mt-1 leading-relaxed max-w-[200px]">{footer.contacts.address}</p>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="text-white uppercase text-xs tracking-widest font-bold mb-4">
              {footer.newsletter.label}
            </h4>
            <div className="flex">
              <input
                type="email"
                placeholder={footer.newsletter.placeholder}
                className="flex-1 bg-white/5 border border-white/10 px-4 py-2 text-sm text-white placeholder-gray-600 outline-none focus:border-brand transition-colors"
              />
              <button className="bg-brand px-4 py-2 text-dark font-bold hover:brightness-110 transition-all">
                &rarr;
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 text-xs text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p>{footer.copyright}</p>
          <div className="flex gap-4">
            {footer.social.map((s) => (
              <a key={s.platform} href={s.href} className="hover:text-brand transition-colors">
                {s.platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
