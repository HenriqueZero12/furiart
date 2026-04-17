import { Header }              from "@/components/layout/Header";
import { Footer }              from "@/components/layout/Footer";
import { Hero }                from "@/components/sections/Hero";
import { SolucaoFuriart }      from "@/components/sections/SolucaoFuriart";
import { DiferencialTecnico }  from "@/components/sections/DiferencialTecnico";
import { CicloOperacional }    from "@/components/sections/CicloOperacional";
import { Sustentabilidade }    from "@/components/sections/Sustentabilidade";
import { Segmentos }           from "@/components/sections/Segmentos";
import { CtaFinal }            from "@/components/sections/CtaFinal";
import { DiveParallaxWrapper } from "@/components/sections/DiveParallaxWrapper";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <DiveParallaxWrapper>
          <Hero />
          <SolucaoFuriart />
        </DiveParallaxWrapper>
        <DiferencialTecnico />
        <CicloOperacional />
        <Sustentabilidade />
        <Segmentos />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
