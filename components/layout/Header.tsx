"use client";
import { useEffect, useState } from "react";
import { siteContent } from "@/lib/content";
import clsx from "clsx";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const { nav } = siteContent;

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-dark/95 backdrop-blur-md py-4 shadow-lg" : "bg-dark/40 backdrop-blur-sm py-6"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src="/logofuriart.png" alt="Furiart Logo" className="h-[46px] w-auto object-contain" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-display uppercase tracking-wider text-white hover:text-brand transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href={nav.cta.href}
          className="hidden md:inline-flex bg-brand text-dark font-bold uppercase px-6 py-2 transition-all duration-300 hover:brightness-110"
        >
          {nav.cta.label}
        </a>

        {/* Mobile menu button could be added here */}
        <button className="md:hidden text-white flex flex-col gap-1.5 p-2">
          <span className="w-6 h-0.5 bg-white block" />
          <span className="w-6 h-0.5 bg-white block" />
          <span className="w-6 h-0.5 bg-white block" />
        </button>
      </div>
    </header>
  );
}
