import type { Metadata } from "next";
import { CONTACT, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Saiba como a ${SITE_NAME} coleta, usa e protege seus dados pessoais.`,
};

const SECTIONS = [
  {
    title: "1. Dados que coletamos",
    body: "Coletamos informações fornecidas por você em formulários de contato, agendamento de aula experimental e matrícula, como nome, telefone, e-mail e dados de uso do nosso aplicativo e site.",
  },
  {
    title: "2. Como usamos seus dados",
    body: "Utilizamos seus dados para responder solicitações, agendar visitas e aulas experimentais, gerenciar sua matrícula e melhorar continuamente nossos serviços e comunicação.",
  },
  {
    title: "3. Compartilhamento de dados",
    body: "Não vendemos seus dados pessoais. Podemos compartilhar informações com parceiros de tecnologia estritamente necessários para operar nossos serviços (como processadores de pagamento e Wellhub).",
  },
  {
    title: "4. Seus direitos",
    body: `Você pode solicitar acesso, correção ou exclusão dos seus dados a qualquer momento entrando em contato pelo e-mail ${CONTACT.email}.`,
  },
  {
    title: "5. Cookies e tecnologias de rastreamento",
    body: "Utilizamos cookies e ferramentas de análise (como Google Analytics e Meta Pixel) para entender o uso do site e melhorar sua experiência.",
  },
  {
    title: "6. Segurança",
    body: "Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda ou alteração.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 pb-24 pt-36 sm:px-8">
      <p className="font-heading text-xs font-semibold uppercase tracking-[0.28em] text-accent">
        Legal
      </p>
      <h1 className="mt-4 font-display text-4xl tracking-wide text-foreground sm:text-5xl">
        Política de Privacidade
      </h1>
      <p className="mt-4 text-sm text-muted">Última atualização: julho de 2026</p>

      <div className="mt-12 flex flex-col gap-10">
        {SECTIONS.map((section) => (
          <div key={section.title}>
            <h2 className="font-heading text-lg font-semibold text-foreground">{section.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{section.body}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
