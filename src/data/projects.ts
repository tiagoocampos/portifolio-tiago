export interface Project {
  slug: string
  name: string
  shortDescription: string
  longDescription: string
  tags: string[]
  githubUrl?: string
  demoUrl?: string
  /** poster/thumbnail — usado como imagem estática ou como poster do vídeo */
  image?: string
  /** clipe curto (mp4, sem áudio) mostrado no card; se ausente, usa `image` */
  video?: string
  /** true = projeto tem cliente pagante real / uso em produção */
  live?: boolean
  /** true = recebe destaque visual maior na listagem (só um projeto deve usar isso) */
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: "alo-delivery",
    name: "Alô Delivery",
    shortDescription:
      "SaaS multi-tenant de delivery: cardápio, pedidos, PDV e fidelização por pontos para lojistas que hoje vendem só por WhatsApp.",
    longDescription:
      "Plataforma multi-tenant para lojistas de delivery: cada loja tem seu próprio site de cardápio, fluxo de pedidos, PDV e programa de fidelização por pontos. Já tem cliente pagante real em produção. Backend em TypeScript/Express com arquitetura em camadas (Routes → Controllers → Services) e autenticação via JWT sobre PostgreSQL; storefront e painel do lojista construídos em React/Next.js com Tailwind CSS e shadcn/ui.",
    tags: ["TypeScript", "Express", "PostgreSQL", "JWT", "React", "Next.js", "Tailwind CSS", "shadcn/ui"],
    demoUrl: "https://alo-delivery-website.vercel.app/",
    image: "/videos/alo-delivery.jpg",
    video: "/videos/alo-delivery.mp4",
    live: true,
    featured: true,
  },
  {
    slug: "kirvo",
    name: "Kirvo",
    shortDescription:
      "SaaS multi-tenant de agendamento de horários, inicialmente voltado a barbearias, reaproveitando a arquitetura do Alô Delivery.",
    longDescription:
      "Segundo produto SaaS multi-tenant, de agendamento de horários — começando por barbearias, com plano de expandir para outros tipos de negócio. Reaproveita os padrões de arquitetura e código do Alô Delivery (camadas, JWT, PostgreSQL). Storefront público de agendamento por tenant e painel do prestador de serviço.",
    tags: ["TypeScript", "Express", "PostgreSQL", "JWT", "React", "Next.js", "Tailwind CSS", "shadcn/ui"],
    demoUrl: "https://kirvo.vercel.app/jonas-barber",
    image: "/videos/kirvo.jpg",
    video: "/videos/kirvo.mp4",
    live: true,
  },
  {
    slug: "mandala-crystais",
    name: "Mandala Crystais",
    shortDescription:
      "E-commerce para cliente real de cristais e pedras naturais, com checkout via Mercado Pago.",
    longDescription:
      "Primeiro projeto freelance pago: e-commerce para uma loja real de cristais e pedras naturais. Checkout integrado ao Mercado Pago (Checkout Pro) e domínio de pedidos, pagamento e estoque construído do zero, com backend em Express e Prisma sobre um banco relacional.",
    tags: ["React", "Express", "Prisma", "Mercado Pago"],
    demoUrl: "https://mandala-crystais.vercel.app/",
    image: "/videos/mandala-de-cristais.jpg",
    video: "/videos/mandala-de-cristais.mp4",
    live: true,
  },
  {
    slug: "ipe-mudas",
    name: "Ipê Mudas",
    shortDescription:
      "Landing page para cliente real, comércio de mudas frutíferas e nativas em Caxias do Sul/RS.",
    longDescription:
      "Landing page institucional para um comércio real de mudas frutíferas, nativas e plantas ornamentais em Caxias do Sul/RS. Construída com Next.js, Tailwind CSS e shadcn/ui, com foco em performance e apresentação visual do catálogo.",
    tags: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    demoUrl: "https://ipe-mudas.vercel.app/",
    image: "/videos/ipe-mudas.jpg",
    video: "/videos/ipe-mudas.mp4",
    live: true,
  },
  {
    slug: "expenses-control",
    name: "Expenses Control",
    shortDescription:
      "Sistema de controle financeiro pessoal para cadastro, categorização e acompanhamento de despesas em tempo real.",
    longDescription:
      "Sistema de controle financeiro pessoal, reescrito do zero. Cadastro e categorização de despesas, relatórios com gráficos (Nivo) e despesas compartilhadas em grupo. Backend em NestJS com Prisma sobre PostgreSQL, autenticação JWT e bcrypt para senhas; frontend em React/Vite com Tailwind CSS e shadcn/ui.",
    tags: ["NestJS", "PostgreSQL", "Prisma", "JWT", "React", "Tailwind CSS", "shadcn/ui"],
    demoUrl: "https://expenses-control-sigma.vercel.app/",
    image: "/videos/expenses-control.jpg",
    video: "/videos/expenses-control.mp4",
    live: true,
  },
  {
    slug: "pipocaflix",
    name: "PipocaFlix",
    shortDescription:
      "Plataforma fullstack de streaming de filmes com login, favoritos e integração com a API do TMDB.",
    longDescription:
      "Projeto fullstack de streaming de filmes com autenticação de usuários, lista de favoritos e integração com a API do TMDB para catálogo e detalhes dos filmes.",
    tags: ["React", "TMDB API"],
    demoUrl: "https://pipocaflix-rho.vercel.app/",
    image: "/videos/pipocaflix.jpg",
  },
  {
    slug: "url-shortener",
    name: "URL Shortener",
    shortDescription:
      "API de encurtador de links com alias customizado, deploy em Railway e Vercel.",
    longDescription:
      "API de encurtador de URLs com suporte a alias customizado. Backend em Node.js/Express com PostgreSQL e Prisma como ORM, deploy do backend na Railway e do frontend na Vercel.",
    tags: ["Node.js", "Express", "PostgreSQL", "Prisma", "Railway", "Vercel"],
    demoUrl: "https://shorty-link-delta.vercel.app/",
    image: "/videos/url-shortener.jpg",
  },
]
