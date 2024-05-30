export const navItems = [
  { name: "Sobre", link: "#about" },
  { name: "Projetos", link: "#projects" },
  //   { name: "Testimonials", link: "#testimonials" },
  { name: "Contato", link: "#contact" },
  { name: "Experiência", link: "#experience" },
];

export const contact_email = "ln-solutions@outlook.com";

export const approachs = [
  {
    title: "Planejamento & Estratégia",
    des: "Vamos juntos definir os objetivos, público-alvo e as principais funções do seu site. Também vamos conversar sobre como organizar as páginas, facilitar a navegação e o que precisa ter no conteúdo.",
  },
  {
    title: "Desenvolvimento",
    des: "Combinado o plano, começo a programar ouvindo minha playlist. Do rascunho inicial ao código final, mantenho você informado em todas as etapas.",
  },
  {
    title: "Lançamento",
    des: "A magia ganha vida! ✨ Com o design aprovado, transformo ideias em um site funcional e pronto para encantar.",
  },
];

export const dockLinks = [
  {
    id: 1,
    image: "/ln-note-logo.png",
    href: "https://ln-note.vercel.app/",
    name: "ln-note",
  },
  {
    id: 2,
    image: "/ln-imaginify-logo.png",
    href: "https://ln-imaginify.vercel.app/",
    name: "ln-imaginify",
  },
  {
    id: 3,
    image: "/ln-drive-logo.png",
    href: "https://ln-drive.vercel.app/",
    name: "ln-drive",
  },
  {
    id: 4,
    image: "/ln-draw-logo.png",
    href: "https://ln-draw.vercel.app/",
    name: "ln-draw",
  },
  {
    id: 5,
    image: "/ln-yt-videos-logo.png",
    href: "https://drive.google.com/file/d/12HJt7DveXR3tI8qByxUHme87y1W0g-qS/view?usp=sharing",
    name: "ln-ytvideos",
  },
];

export const skills = [
  "React.js",
  "Next.js",
  "Typescript",
  "Python",
  "Tensorflow",
  ".NET",
  "Docker",
  "Git",
  "NoSQL",
  "SQL",
];

export const gridItems = [
  {
    id: 1,
    title:
      "Colaboração com o cliente é fundamental para mim, por isso, priorizo a comunicação aberta",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Sempre disponível, independente da localização",
    description: "",
    // className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    className: "lg:col-span-1 md:col-span-2 md:row-span-2",

    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech Stack",
    description: "Sempre melhorando minha",
    // className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    className: "lg:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Entusiasta de tecnologia com paixão por desenvolvimento",
    description: "",
    // className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    className: "lg:col-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Códigos com tecnologias de última geração. Com IA integrada para automação.",
    description: "Detalhes exclusivos",
    // className: "md:col-span-3 md:row-span-2",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1 lg:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-start",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Vamos começar um projeto juntos?",
    description: "",
    // className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    className: "md:col-span-3",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "LN NOTE",
    des: "Um espaço único para todas as suas informações, com Gemini integrado, fica fácil de consultar e reconsultar. Documente ideias, itens de ação e planos. Textos mais longos, que cultivam o pensamento claro e ideias bem pensadas.",
    img: "/p1.svg",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/c.svg",
      "/Convex.jpg",
      "google-gemini-icon.webp",
    ],
    link: "https://ln-note.vercel.app/",
  },
  {
    id: 2,
    title: "LN DRIVE",
    des: "A maneira mais fácil de enviar e compartilhar arquivos com a sua empresa. Crie uma conta e comece a gerenciar seus arquivos em menos de um minuto.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/Convex.jpg", "/c.svg"],
    link: "https://ln-drive.vercel.app/",
  },
  {
    id: 3,
    title: "LN IMAGINIFY",
    des: "Um aplicativo SaaS REAL com recursos de IA e um sistema de pagamentos e créditos utilizando tecnologias mais recente.",
    img: "/p3.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/cloud.svg", "/c.svg"],
    link: "https://ln-imaginify.vercel.app/",
  },
  {
    id: 4,
    title: "LN DRAW",
    des: "Organize ideias, tarefas e projetos de forma visual com seus amigos. Adicione notas, imagens e use ferramentas de desenho para deixar seus quadros dinâmicos e fáceis de entender.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/Convex.jpg", "/c.svg"],
    link: "https://ln-draw.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "O Next.js é um framework open-source popular construído sobre React que simplifica a criação de aplicativos web rápidos e amigáveis ​​para SEO. Ele oferece diversos recursos que facilitam o desenvolvimento e otimizam o desempenho de aplicações web.",
    name: "NextJS",
    title: "Framework",
    logo: "next.svg",
  },
  {
    quote:
      "O Cloudinary é uma plataforma robusta de gerenciamento de mídia em nuvem que oferece uma gama abrangente de recursos para otimizar e gerenciar seus arquivos de mídia com eficiência.",
    name: "Cloudinary",
    title: "Nuvem",
    logo: "cloud.svg",
  },
  {
    quote:
      "Um container Docker é um pacote leve e autossuficiente que inclui tudo o que é necessário para executar um aplicativo: código, runtime, bibliotecas, sistema de arquivos e configurações. Isso significa que os containers podem ser executados em qualquer ambiente, independentemente do sistema operacional ou da infraestrutura subjacente.",
    name: "Docker",
    title: "Container",
    logo: "dock.svg",
  },
  {
    quote:
      "O Clerk Auth é uma plataforma de autenticação e gerenciamento de usuários que ajuda as empresas a gerenciar seus usuários, login e autorização. Ele fornece um conjunto abrangente de recursos para criar uma experiência de autenticação segura e amigável ao usuário.",
    name: "Clerk",
    title: "Autenticação e Gerenciamento",
    logo: "c.svg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend",
    desc: "O Desenvolvedor Frontend é responsável por criar a interface do usuário (IU) e a experiência do usuário (UX) de um website ou aplicativo.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile Development",
    desc: "O desenvolvimento mobile se tornou uma área crucial no cenário tecnológico atual, impulsionado pelo uso crescente de smartphones e tablets. É a arte de criar aplicativos para dispositivos móveis, proporcionando experiências imersivas e interativas aos usuários.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Machine Learning",
    desc: "O aprendizado de máquina, um subcampo da inteligência artificial, capacita máquinas a executarem tarefas exclusivas do ser humano, como categorizar imagens, analisar dados e prever variações de preço.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Backend",
    desc: "O Desenvolvedor Backend atua nos bastidores, garantindo a comunicação entre usuários e servidores. Ele cria a lógica por trás do site/software, desenvolve e mantém o banco de dados central, e assegura respostas rápidas e performance otimizada para as requisições vindas do frontend.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
