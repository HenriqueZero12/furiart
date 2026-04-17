export const siteContent = {
  meta: {
    title: "Furiart — Comunicação Visual em Ambientes Críticos",
    description:
      "Engenharia de ROVs, Manutenção Offshore e Logística Portuária com 15+ anos de expertise marítima.",
    keywords: ["offshore", "ROV", "manutenção marítima", "inspeção submarina"],
  },

  nav: {
    logo: { src: "/images/logo-furiart.svg", alt: "Furiart" },
    links: [
      { label: "A Furiart",         href: "#a-furiart" },
      { label: "Soluções",          href: "#solucoes" },
      { label: "Diferenciais",      href: "#diferenciais" },
      { label: "Processo",          href: "#processo" },
      { label: "Sustentabilidade",  href: "#sustentabilidade" },
      { label: "Contato",           href: "#contato" },
    ],
    cta: { label: "Portal do Cliente", href: "/portal" },
  },

  hero: {
    headline: ["Comunicação", "Visual em", "Ambientes", "Críticos"],
    image: { src: "/images/hero-platform.jpg", alt: "Plataforma offshore" },
    overlayOpacity: 0.45,
    parallaxFactor: 0.4,
  },

  solucao: {
    sectionLabel: "A Solução Furiart",
    intro:
      "Tecnologia de ponta integrada às operações mais exigentes do setor marítimo e offshore.",
    cards: [
      {
        id: "rovs",
        icon: "/icons/icon-rov.svg",
        title: "Engenharia de ROVs",
        description:
          "Suporte técnico especializado em veículos operados remotamente para inspeção e intervenção profunda.",
        image: "/images/rov.jpg",
        featured: false,
      },
      {
        id: "offshore",
        icon: "/icons/icon-offshore.svg",
        title: "Manutenção Offshore",
        description:
          "Equipes de elite para reparos estruturais, soldagem submarina e integridade de cascos em plataformas e FPSOs.",
        image: "/images/manutencao-offshore.jpg",
        featured: true,
      },
      {
        id: "logistica",
        icon: "/icons/icon-port.svg",
        title: "Logística Portuária",
        description:
          "Gestão de terminais e movimentação de cargas pesadas para suporte a operações em mar aberto.",
        image: "/images/logistica.jpg",
        featured: false,
      },
    ],
  },

  diferenciais: {
    sectionLabel: "Diferenciais Técnicos",
    stat: { value: "15+", label: "Anos de Expertise Marítima" },
    backgroundImage: "/images/coral-underwater.jpg",
    items: [
      {
        number: "01",
        title: "Inspeção Submarina",
        description:
          "Monitoramento e análise de fluidos e estruturas em condições extremas de pressão.",
      },
      {
        number: "02",
        title: "Certificação Marítima",
        description:
          "Conformidade total com os padrões internacionais ABS, DNV e Lloyd's.",
      },
      {
        number: "03",
        title: "Rede de Apoio Marítimo",
        description:
          "Infraestrutura própria para mobilização rápida de embarcações de serviço.",
      },
    ],
  },

  ciclo: {
    sectionLabel: "Ciclo Operacional Offshore",
    subtitle: "Protocolos Internacionais de Segurança e Eficiência",
    phases: [
      {
        id: "fase-01",
        number: "FASE 01",
        title: "Avaliação de Risco",
        description:
          "Análise técnica ambiental e operacional do ponto marítimo específico.",
      },
      {
        id: "fase-02",
        number: "FASE 02",
        title: "Planejamento Naval",
        description:
          "Desenvolvimento logístico para mobilização de ativos e especialistas.",
      },
      {
        id: "fase-03",
        number: "FASE 03",
        title: "Intervenção Técnica",
        description:
          "Execução de manutenção ou inspeção com suporte ROV e segurança selecionada.",
      },
      {
        id: "fase-04",
        number: "FASE 04",
        title: "Verificação de Estanqueidade",
        description:
          "Testes rigorosos de integridade estrutural para operação offshore contínua.",
      },
    ],
  },

  sustentabilidade: {
    sectionLabel: "Compromisso com o Futuro",
    headline: "Sustentabilidade Industrial",
    body:
      "Na Furiart Industrial, a engenharia de precisão caminha lado a lado com a proteção dos ecossistemas marinhos. Desenvolvemos tecnologias de contenção e monitoramento ambiental para garantir que o progresso industrial não comprometa a biodiversidade oceânica.",
    checklist: [
      "Zero vazamento operacional",
      "Monitoramento de qualidade da água",
      "Gestão de resíduos em plataformas",
    ],
    cta: { label: "Missão Planeta Azul", href: "#sustentabilidade" },
    image: { src: "/images/sustentabilidade-platform.jpg", alt: "Plataforma sustentável" },
  },

  segmentos: {
    sectionLabel: "Segmentos de Atuação",
    items: [
      {
        id: "oleo-gas",
        title: "Óleo & Gás Offshore",
        image: "/images/segmento-oleo-gas.jpg",
      },
      {
        id: "energia",
        title: "Energia Renovável",
        image: "/images/segmento-energia.jpg",
      },
      {
        id: "naval",
        title: "Construção Naval",
        image: "/images/segmento-naval.jpg",
      },
    ],
  },

  cta: {
    headline: ["Está Pronto Para", "Operar em Alto Nível?"],
    body:
      "Consulte nossos especialistas para soluções técnicas customizadas em óleo & gás, offshore e automação.",
    button: { label: "Solicitar Proposta Técnica", href: "#contato" },
    backgroundImage: "/images/cta-ocean.jpg",
  },

  footer: {
    logo: { src: "/images/logo-furiart.svg", alt: "Furiart" },
    tagline:
      "Furiart Industrial alia tecnologia e engenharia a ambientes offshore e submarinos, em segurança de alto nível.",
    nav: [
      { label: "Início",              href: "/" },
      { label: "Soluções Offshore",   href: "#solucoes" },
      { label: "Manutenção Naval",    href: "#diferenciais" },
      { label: "Sobre Nós",           href: "#a-furiart" },
    ],
    contacts: {
      email: "operacoes@furiart.com.br",
      phone: "+55 (21) 3456-8900",
      address: "Terminal D'Água, Niterói, Rio de Janeiro — RJ",
    },
    newsletter: {
      label: "Newsletter Técnica",
      placeholder: "Seu e-mail profissional",
    },
    social: [
      { platform: "LinkedIn", href: "#" },
      { platform: "Instagram", href: "#" },
    ],
    copyright: "© 2026 Furiart Industrial. Todos os direitos reservados.",
  },
};
