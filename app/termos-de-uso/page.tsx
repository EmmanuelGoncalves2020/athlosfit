import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: `Condições de uso do site e dos serviços da ${SITE_NAME}.`,
};

const SECTIONS = [
  {
    title: "1. Aceitação dos termos",
    body: `Ao acessar e utilizar o site e os serviços da ${SITE_NAME}, você concorda com os termos e condições descritos nesta página.`,
  },
  {
    title: "2. Matrícula e planos",
    body: "A contratação de qualquer plano está sujeita à análise e confirmação da unidade. Valores, benefícios e condições podem ser atualizados mediante aviso prévio.",
  },
  {
    title: "3. Uso das instalações",
    body: "O uso dos equipamentos e espaços da academia deve seguir as orientações da equipe técnica. A academia não se responsabiliza por lesões decorrentes do uso inadequado de equipamentos.",
  },
  {
    title: "4. Aplicativo Athlos Fit",
    body: "O aplicativo é de uso exclusivo de alunos matriculados e deve ser utilizado apenas para os fins a que se destina: check-in, agendamento, acompanhamento de treino e pagamento.",
  },
  {
    title: "5. Cancelamento",
    body: "O cancelamento de planos segue as regras contratuais apresentadas no momento da matrícula, respeitando os prazos de aviso prévio quando aplicável.",
  },
  {
    title: "6. Alterações nos termos",
    body: "Estes termos podem ser atualizados periodicamente. Recomendamos revisar esta página regularmente.",
  },
];

export default function TermsOfUsePage() {
  return (
    <main className="mx-auto max-w-3xl px-5 pb-24 pt-36 sm:px-8">
      <p className="font-heading text-xs font-semibold uppercase tracking-[0.28em] text-accent">
        Legal
      </p>
      <h1 className="mt-4 font-display text-4xl tracking-wide text-foreground sm:text-5xl">
        Termos de Uso
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
