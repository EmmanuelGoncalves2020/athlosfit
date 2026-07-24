"use client";

import { motion } from "framer-motion";
import { Check, MessageCircle, Sparkles } from "lucide-react";
import { PLANS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { RevealGroup, revealChildVariants } from "@/components/ui/Reveal";
import { buildWhatsAppLink } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Plans() {
  return (
    <section id="planos" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Planos"
          title="Escolha o seu nível"
          description="Todos os planos dão acesso à estrutura completa, 24 horas. A diferença está na forma de pagamento."
          className="mb-16"
        />

        <RevealGroup className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <motion.div
              key={plan.id}
              variants={revealChildVariants}
              className={cn(
                "relative flex flex-col gap-7 rounded-2xl border p-8 transition-all duration-500",
                plan.highlighted
                  ? "border-accent/60 bg-surface shadow-[0_0_60px_-15px_rgba(154,42,42,0.4)] lg:-translate-y-4"
                  : "border-border bg-surface/50 hover:border-white/20",
              )}
            >
              {plan.highlighted && (
                <span className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 font-heading text-[11px] font-bold uppercase tracking-wider text-white">
                  <Sparkles size={13} />
                  Mais Popular
                </span>
              )}

              <div>
                <h3 className="font-display text-3xl tracking-wide text-foreground">{plan.name}</h3>
                <p className="mt-1.5 text-sm text-muted">{plan.description}</p>
              </div>

              <span
                className={cn(
                  "inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1.5 font-heading text-[11px] font-semibold uppercase tracking-wider",
                  plan.highlighted
                    ? "border-accent/50 bg-accent/10 text-accent"
                    : "border-border bg-background text-muted",
                )}
              >
                {plan.billing}
              </span>

              <ul className="flex flex-1 flex-col gap-3.5">
                {plan.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm text-foreground/90">
                    <Check size={16} className="mt-0.5 shrink-0 text-accent" strokeWidth={2.5} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button
                href={buildWhatsAppLink(
                  `Olá! Tenho interesse no plano ${plan.name} da Athlos Fit e quero saber o valor.`,
                )}
                external
                variant={plan.highlighted ? "primary" : "secondary"}
                className="w-full"
              >
                <MessageCircle size={16} />
                Consultar valor
              </Button>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
