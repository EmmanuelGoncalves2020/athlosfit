"use client";

import { motion } from "framer-motion";
import { DIFFERENTIALS } from "@/lib/data";
import { ICONS } from "@/components/ui/icon-map";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, revealChildVariants } from "@/components/ui/Reveal";

export function Differentials() {
  return (
    <section id="sobre" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Por que a Athlos Fit"
          title="Estrutura que faz a diferença"
          description="Cada detalhe pensado para transformar sua rotina de treino em uma experiência de alta performance."
          className="mb-16"
        />

        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIALS.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <motion.div
                key={item.title}
                variants={revealChildVariants}
                className="glow-border group relative flex flex-col gap-4 rounded-2xl border border-border bg-surface/60 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-transparent hover:bg-surface"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-accent transition-all duration-500 group-hover:scale-110 group-hover:border-accent/40 group-hover:shadow-[0_0_24px_rgba(0,230,118,0.35)]">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-lg font-semibold tracking-wide text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{item.description}</p>
              </motion.div>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
