export type PortfolioItem = {
  slug: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  src: string;
  alt: string;
  cls: string;
  videos?: string[];
  images?: string[];
  layout?: "video-image-video";
  centerImage?: string;
  coverVideo?: string;
  fit?: "cover" | "contain";
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "marca-alimentacao",
    title: "Oficina Amor",
    client: "Cliente em breve",
    category: "TAGS: ESTRATÉGIA SOCIAL · CONTEÚDO · CRESCIMENTO DE COMUNIDADE · PROMOÇÃO DE WORKSHOPS\n\n ",
    summary:
      "O brief:\n\nOficina Amor é um estúdio de restauração e tapeçaria baseado em Portugal. Eles fazem trabalhos de restauração sob medida e realizam workshops práticos. O objetivo era construir sua presença online, colocá-los na frente das pessoas certas e preencher os workshops.\n\nNossa abordagem:\n\nConstruímos uma estratégia de conteúdo em torno do próprio ofício: mostrando o processo, o antes e depois, o detalhe do trabalho. Conteúdo que faz as pessoas pararem, apreciarem o que a restauração e tapeçaria realmente envolvem, e quererem fazer parte disso. Parte da produção foi filmada no local em Portugal.\n\nO resultado:\n\nEsta é uma parceria em andamento.\nEm 3 meses, a conta cresceu mais de 1.000 seguidores. Os workshops estão esgotados desde então.",
    src: "/portfolio/oficina-amor/cover.jpg",
    alt: "Oficina Amor",
    cls: "md:col-span-1 md:row-span-1 aspect-[4/5]",
    layout: "video-image-video",
    centerImage: "/portfolio/marca-alimentacao/image-1.jpg",
    videos: [
      "/portfolio/marca-alimentacao/video-1.mp4",
      "/portfolio/marca-alimentacao/video-2.mp4",
    ],
  },
  {
    slug: "hanno",
    title: "Hanno",
    client: "Cliente em breve",
    category: "TAGS: BRANDING · PRESENÇA ONLINE · ANÚNCIOS PAGOS · ESTRATÉGIA SOCIAL\n\n\n",
    summary:
      "O brief:\n\nHanno ajuda pessoas nos Países Baixos a navegarem pelo processo de hipoteca há mais de 7 anos. Entramos para ajudá-los a construir uma presença digital mais forte e alcançar novos públicos.\n\nNossa abordagem:\n\nEstamos trabalhando com a Hanno em duas frentes: construir uma identidade de marca que pareça confiável e clara, e rodar anúncios pagos em duas plataformas para começar a gerar visibilidade e leads. Tudo é projetado para crescer junto com eles à medida que o negócio escala.\n\nO resultado:\n\nEsta é uma parceria em andamento — resultados em breve.",
    src: "/portfolio/hanno/cover.mp4",
    alt: "Hanno",
    cls: "md:col-span-1 md:row-span-1 aspect-[4/5]",
    coverVideo: "/portfolio/hanno/cover.mp4",
    videos: ["/portfolio/hanno/video-1.mp4"],
  },
  {
    slug: "ori-mart",
    title: "Ori Mart",
    client: "Cliente em breve",
    category: "TAGS: ESTRATÉGIA · CRIAÇÃO DE CONTEÚDO · FOTOGRAFIA · META ADS · INSTAGRAM · FACEBOOK · TIKTOK\n\n\n",
    summary:
      "O brief:\n\nOri Mart é uma loja de conveniência asiática no coração de Rotterdam. Uma parada diária para moradores e um momento de descoberta para turistas de passagem. Quando nos aproximamos deles, sua presença digital não refletia a energia da loja.\n\nNossa abordagem:\n\nConstruímos tudo do zero: estratégia de conteúdo, filmagens mensais no local, campanhas pagas em Meta, e presença orgânica em Instagram, Facebook e TikTok. O conteúdo é feito para parecer nativo de cada plataforma, não polido por polir, mas real o suficiente para parar o scroll.\n\nO resultado:\n\nEsta é uma parceria em andamento.\nEm apenas 2 meses, o Instagram cresceu de 2.558 para 3.611 seguidores (+41%). O Facebook foi lançado do zero e alcançou 272K+ visualizações. Um único reel atingiu 97K visualizações com 908 compartilhamentos, o conteúdo mais forte produzido pela FIG para a conta até hoje. Meta ads entregou um custo por clique de €0,05 com €331 em investimento total de anúncios no mês.\n\nAbril foi o melhor mês digital deles de todos os tempos.",
    src: "/portfolio/ori-mart/cover.mp4",
    alt: "Ori Mart",
    cls: "md:col-span-1 md:row-span-1 aspect-[4/5]",
    coverVideo: "/portfolio/ori-mart/cover.mp4",
    videos: [
      "/portfolio/ori-mart/video-1.mp4",
      "/portfolio/ori-mart/video-2.mp4",
      "/portfolio/ori-mart/video-3.mp4",
    ],
  },
  {
    slug: "esporte",
    title: "Design Biennale Rotterdam",
    client: "Cliente em breve",
    category: "TAGS: ESTRATÉGIA DE COMUNICAÇÃO · GESTÃO DE SOCIAL MEDIA · PLANEJAMENTO DE CONTEÚDO · LANÇAMENTO DE MARCA\n\n ",
    summary:
      "O brief: Um festival de design inaugural em 12 locais de Rotterdam, com mais de 100 designers participantes. Sem público existente, sem manual. Construído do zero. Nossa abordagem: Contratados como gestores de comunicação para construir a presença digital do zero. Desenvolvemos a estratégia do Instagram, gerenciamos o conteúdo do dia a dia, e coordenamos a produção visual entre mais de 100 designers e parceiros — trabalhando com um designer gráfico para manter um programa extenso com a sensação de um evento coeso. O resultado: De 0 a 6.000 seguidores para uma conta que não existia antes do lançamento. Uma comunidade construída em torno de uma edição inaugural forte o suficiente para retornar para uma segunda.\n\nVídeo e áudio por Jeff Hoogendijk\nRoteiro por FIG Agency\n",
    src: "/portfolio/biennale/cover.mp4",
    alt: "Design Biennale Rotterdam",
    cls: "md:col-span-1 md:row-span-1 md:col-start-2 aspect-[4/5]",
    coverVideo: "/portfolio/biennale/cover.mp4",
    videos: [
      "/portfolio/biennale/video-1.mp4",
      "/portfolio/biennale/video-2.mp4",
    ],
  },
  {
    slug: "estadio",
    title: "Wasteland - Festival of Art & Ecology",
    client: "Cliente em breve",
    category: "TAGS: ESTRATÉGIA DE COMUNICAÇÃO · GESTÃO DE SOCIAL MEDIA · PLANEJAMENTO DE CONTEÚDO · CONSTRUÇÃO DE COMUNIDADE\n\n ",
    summary:
      "O brief: Wasteland é um coletivo de Rotterdam que trabalha na interseção entre arte e ecologia — exposições, performances, passeios de campo, workshops. Eles precisavam de alguém para assumir suas comunicações e fazer um programa complexo e fragmentado parecer vivo e acessível online. Nossa abordagem: Contratados como gestores de comunicação em Instagram, site e comunicações externas. Coordenamos conteúdo de mais de 20 artistas e colaboradores ao longo de uma temporada completa, trabalhando com um designer gráfico em templates visuais e consistência. O resultado: Uma temporada de programação comunicada claramente, com uma comunidade crescente e engajada. O Instagram se tornou um reflexo genuíno da organização — não apenas um mural de avisos.\n\nDesign gráfico por Martin Foucaut\n",
    src: "/portfolio/wasteland/cover.png",
    alt: "Wasteland - Out of Sight",
    cls: "md:col-span-1 md:row-span-1 aspect-[4/5]",
    images: [
      "/portfolio/wasteland/image-1.jpeg",
      "/portfolio/wasteland/image-2.jpeg",
      "/portfolio/wasteland/image-3.jpeg",
    ],
  },
];

export function getPortfolioItem(slug: string): PortfolioItem | undefined {
  return portfolioItems.find((p) => p.slug === slug);
}
