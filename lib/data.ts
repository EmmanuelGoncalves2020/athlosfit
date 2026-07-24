export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Modalidades", href: "#modalidades" },
  { label: "Planos", href: "#planos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Contato", href: "#contato" },
] as const;

export const STATS = [
  { icon: "Users", kind: "counter", value: 3000, suffix: "+", label: "Alunos ativos" },
  { icon: "Dumbbell", kind: "counter", value: 100, suffix: "+", label: "Equipamentos" },
  { icon: "Clock", kind: "counter", value: 24, suffix: "h", label: "Acesso livre" },
  { icon: "Activity", kind: "text", display: "Avaliação Física", label: "Diagnóstico completo" },
  { icon: "HeartHandshake", kind: "text", display: "Wellhub", label: "Convênio parceiro" },
  { icon: "Baby", kind: "text", display: "Espaço Kids", label: "Estrutura para família" },
] as const;

export const DIFFERENTIALS = [
  {
    icon: "GraduationCap",
    title: "Professores Especializados",
    description:
      "Equipe presente no piso de treino para corrigir, ajustar e evoluir cada execução.",
  },
  {
    icon: "Dumbbell",
    title: "Equipamentos Modernos",
    description:
      "Máquinas modernas, seguras e ergonômicas, silenciosas e confortáveis para uma experiência de treino superior.",
  },
  {
    icon: "Clock",
    title: "Aberta 24 Horas",
    description:
      "Treine no seu horário: musculação e estrutura completa disponíveis 24 horas, todos os dias.",
  },
  {
    icon: "Armchair",
    title: "Cadeira de Massagem",
    description: "Relaxe após o treino com nossa cadeira de massagem, disponível para os alunos.",
  },
  {
    icon: "Baby",
    title: "Espaço Kids",
    description:
      "Ambiente seguro com brinquedos e atividades livres por até 1h30, para os pequenos se divertirem enquanto você treina.",
  },
  {
    icon: "Smartphone",
    title: "Athlos Fit App",
    description: "Reserve aulas, acompanhe treinos, faça check-in e consulte pagamentos, tudo no app.",
  },
  {
    icon: "HeartHandshake",
    title: "Wellhub & TotalPass",
    description: "Aceitamos Wellhub (Gympass) e TotalPass. Treine na Athlos Fit com o seu plano corporativo.",
  },
  {
    icon: "Activity",
    title: "Avaliação Física",
    description: "Acompanhamento periódico para treinar com precisão e ver resultado real.",
  },
] as const;

export const MODALITIES = [
  {
    slug: "musculacao",
    title: "Musculação",
    tagline: "Equipamentos modernos",
    description:
      "Máquinas modernas, seguras e ergonômicas para treinos mais eficientes e uma experiência superior.",
  },
  {
    slug: "boxe",
    title: "Boxe",
    tagline: "Técnica e energia",
    description:
      "Treino completo que combina técnica, força e descarga de energia. Em 45 minutos, você melhora o condicionamento, aprende golpes e libera o estresse.",
  },
  {
    slug: "danca",
    title: "Dança",
    tagline: "Ritmo e movimento",
    description:
      "Aulas coletivas que unem música, movimento e queima calórica em um treino leve, divertido e motivador.",
  },
  {
    slug: "spinning",
    title: "Spinning",
    tagline: "A energia que transforma seu dia",
    description:
      "Aulas coletivas intensas de 45 minutos, com ritmo, motivação e alto gasto calórico.",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Rafael Almeida",
    role: "Aluno há 2 anos",
    quote:
      "Troquei de academia três vezes até achar a Athlos Fit. Estrutura, equipamentos e atendimento em outro nível.",
    rating: 5,
  },
  {
    name: "Camila Duarte",
    role: "Aluna há 8 meses",
    quote:
      "O acompanhamento dos professores fez toda diferença no meu resultado. Recomendo muito.",
    rating: 5,
  },
  {
    name: "Bruno Cardoso",
    role: "Aluno há 1 ano",
    quote: "Academia aberta 24h salvou minha rotina. Treino no horário que funciona pra mim.",
    rating: 5,
  },
  {
    name: "Larissa Prado",
    role: "Aluna há 3 anos",
    quote: "O app da Athlos Fit é sensacional. Agendo aula, faço check-in e acompanho tudo pelo celular.",
    rating: 5,
  },
] as const;

export const PLANS = [
  {
    id: "one",
    name: "ONE",
    billing: "Mensal · sem fidelidade",
    description: "Pague mês a mês, com total liberdade para cancelar quando quiser.",
    highlighted: false,
    benefits: [
      "Acesso total à estrutura 24h",
      "Musculação, boxe, dança e spinning",
      "Sem taxa de fidelidade",
      "Cancele quando quiser",
    ],
  },
  {
    id: "infinity",
    name: "INFINITY",
    billing: "Recorrente · fidelidade 12 meses",
    description: "Cobrança automática e o melhor custo-benefício para quem quer constância.",
    highlighted: true,
    benefits: [
      "Acesso total à estrutura 24h",
      "Musculação, boxe, dança e spinning",
      "Espaço Kids incluso",
      "Pagamento automático, sem burocracia",
      "Melhor custo-benefício mensal",
    ],
  },
  {
    id: "anual",
    name: "ANUAL PADRÃO",
    billing: "Pagamento antecipado",
    description: "Um único pagamento e a maior economia do ano garantida.",
    highlighted: false,
    benefits: [
      "Acesso total à estrutura 24h",
      "Musculação, boxe, dança e spinning",
      "Espaço Kids incluso",
      "Maior economia entre os planos",
      "Ano todo garantido, sem mensalidade",
    ],
  },
] as const;

export const APP_FEATURES = [
  { icon: "Dumbbell", title: "Treinos", description: "Acompanhe sua ficha de treino sempre atualizada." },
  { icon: "CalendarCheck", title: "Agenda", description: "Reserve aulas e consulte horários em segundos." },
  { icon: "CreditCard", title: "Pagamento", description: "Consulte seu plano e pagamentos sem burocracia." },
  { icon: "ScanLine", title: "Check-in", description: "Entrada rápida por QR Code no totem." },
  { icon: "Bell", title: "Novidades", description: "Alertas sobre aulas, eventos e novidades da academia." },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Preciso agendar para conhecer a academia?",
    answer:
      "Não é obrigatório, mas recomendamos agendar sua visita ou aula experimental para garantir um atendimento exclusivo com um de nossos professores.",
  },
  {
    question: "A Athlos Fit aceita Wellhub (Gympass) e TotalPass?",
    answer:
      "Sim! Somos parceiros Wellhub e TotalPass. Basta apresentar seu check-in no aplicativo na recepção da unidade.",
  },
  {
    question: "Qual o horário de funcionamento?",
    answer: "Nossa unidade funciona 24 horas, todos os dias da semana, incluindo domingos e feriados.",
  },
  {
    question: "Tem espaço para deixar meus filhos durante o treino?",
    answer:
      "Sim, contamos com o Espaço Kids, um ambiente seguro com brinquedos e atividades livres por até 1h30.",
  },
  {
    question: "Qual a diferença entre os planos ONE, Infinity e Anual Padrão?",
    answer:
      "O ONE é mensal e sem fidelidade, ideal para quem quer liberdade. O Infinity tem cobrança recorrente com fidelidade de 12 meses e o melhor custo-benefício mensal. O Anual Padrão é um pagamento único antecipado, com a maior economia do ano. Fale com a gente no WhatsApp para saber os valores.",
  },
  {
    question: "A academia oferece avaliação física?",
    answer: "Sim, oferecemos acompanhamento de avaliação física para treinar com mais precisão.",
  },
] as const;
