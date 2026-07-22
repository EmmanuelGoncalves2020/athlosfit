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
      "Equipe certificada, presente no piso de treino para corrigir, ajustar e evoluir cada execução.",
  },
  {
    icon: "Dumbbell",
    title: "Equipamentos Modernos",
    description:
      "Máquinas de última geração e tecnologia biomecânica para máxima performance e segurança.",
  },
  {
    icon: "Snowflake",
    title: "Ambiente Climatizado",
    description:
      "Climatização inteligente em todos os ambientes para treinar com conforto em qualquer estação.",
  },
  {
    icon: "SquareParking",
    title: "Estacionamento",
    description: "Vagas amplas e cobertas, com segurança 24 horas para você e seu veículo.",
  },
  {
    icon: "Baby",
    title: "Espaço Kids",
    description: "Ambiente monitorado e seguro para seus filhos enquanto você treina sem culpa.",
  },
  {
    icon: "Smartphone",
    title: "App Exclusivo",
    description: "Treinos, check-in, agenda e evolução na palma da mão, 100% integrado.",
  },
  {
    icon: "HeartHandshake",
    title: "Wellhub",
    description: "Aceitamos Wellhub (Gympass). Treine na Athlos Fit com o seu plano corporativo.",
  },
  {
    icon: "Activity",
    title: "Avaliação Física",
    description: "Diagnóstico completo e periódico para treinar com precisão e ver resultado real.",
  },
] as const;

export const MODALITIES = [
  {
    slug: "musculacao",
    title: "Musculação",
    tagline: "Força e volume",
    description:
      "Estrutura completa com equipamentos de última geração para hipertrofia e performance.",
  },
  {
    slug: "funcional",
    title: "Funcional",
    tagline: "Movimento real",
    description: "Treinos dinâmicos que desenvolvem força, mobilidade e resistência.",
  },
  {
    slug: "bike",
    title: "Bike",
    tagline: "Cardio de alta energia",
    description: "Aulas coletivas com trilha sonora e iluminação que elevam sua performance.",
  },
  {
    slug: "lutas",
    title: "Lutas",
    tagline: "Disciplina e técnica",
    description: "Muay Thai, boxe e jiu-jitsu com professores especializados em cada modalidade.",
  },
  {
    slug: "cross",
    title: "Cross",
    tagline: "Alta performance",
    description: "Treinamento funcional de alta intensidade para superar limites a cada sessão.",
  },
  {
    slug: "personal",
    title: "Personal",
    tagline: "Treino sob medida",
    description: "Acompanhamento individual com plano de treino 100% personalizado.",
  },
  {
    slug: "pilates",
    title: "Pilates",
    tagline: "Equilíbrio e postura",
    description: "Fortalecimento profundo, consciência corporal e alívio de tensões.",
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
      "A avaliação física e o acompanhamento dos professores fizeram toda diferença no meu resultado.",
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
    quote: "O app da Athlos Fit é sensacional. Agendo aula, faço check-in e acompanho evolução.",
    rating: 5,
  },
] as const;

export const PLANS = [
  {
    id: "start",
    name: "START",
    price: "129",
    period: "/mês",
    description: "Ideal para quem está começando a transformação.",
    highlighted: false,
    benefits: [
      "Acesso à musculação e cardio",
      "1 avaliação física por trimestre",
      "App exclusivo Athlos Fit",
      "Acesso em horário comercial",
    ],
  },
  {
    id: "plus",
    name: "PLUS",
    price: "189",
    period: "/mês",
    description: "O equilíbrio perfeito entre estrutura e liberdade.",
    highlighted: true,
    benefits: [
      "Acesso 24 horas, todos os dias",
      "Musculação, funcional, bike e lutas",
      "Avaliação física mensal",
      "App exclusivo + agendamento de aulas",
      "Espaço Kids incluso",
    ],
  },
  {
    id: "premium",
    name: "PREMIUM",
    price: "259",
    period: "/mês",
    description: "Performance máxima com acompanhamento próximo.",
    highlighted: false,
    benefits: [
      "Tudo do plano PLUS",
      "2 sessões de personal trainer/mês",
      "Pilates e cross ilimitados",
      "Avaliação física quinzenal",
      "Prioridade em aulas e horários",
    ],
  },
] as const;

export const APP_FEATURES = [
  { icon: "Dumbbell", title: "Treinos", description: "Sua ficha de treino sempre atualizada." },
  { icon: "CalendarCheck", title: "Agenda", description: "Reserve aulas e horários em segundos." },
  { icon: "CreditCard", title: "Pagamento", description: "Mensalidade e planos sem burocracia." },
  { icon: "ScanLine", title: "Check-in", description: "Entrada rápida por QR Code no totem." },
  { icon: "TrendingUp", title: "Evolução", description: "Gráficos de performance e resultados." },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Preciso agendar para conhecer a academia?",
    answer:
      "Não é obrigatório, mas recomendamos agendar sua visita ou aula experimental para garantir um atendimento exclusivo com um de nossos professores.",
  },
  {
    question: "A Athlos Fit aceita Wellhub (Gympass)?",
    answer:
      "Sim! Somos parceiros Wellhub. Basta apresentar seu check-in no aplicativo na recepção da unidade.",
  },
  {
    question: "Qual o horário de funcionamento?",
    answer:
      "Nossa unidade funciona 24 horas de segunda a sábado, com acesso controlado por biometria. Aos domingos e feriados, funcionamos das 8h às 18h.",
  },
  {
    question: "Tem espaço para deixar meus filhos durante o treino?",
    answer:
      "Sim, contamos com o Espaço Kids, um ambiente seguro e monitorado por profissionais qualificados.",
  },
  {
    question: "Posso cancelar ou trocar de plano quando quiser?",
    answer:
      "Sim, você pode fazer upgrade de plano a qualquer momento pelo app. Cancelamentos seguem o prazo contratual informado na matrícula.",
  },
  {
    question: "A academia oferece avaliação física?",
    answer:
      "Sim, todos os planos incluem avaliação física periódica para acompanhar sua evolução com precisão.",
  },
] as const;
