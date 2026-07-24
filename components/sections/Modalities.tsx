"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MODALITIES } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, revealChildVariants } from "@/components/ui/Reveal";
import { buildWhatsAppLink } from "@/lib/constants";

const GRADIENTS = [
  "from-[#2b1010] via-[#0a0a0a] to-[#050505]",
  "from-[#240e0e] via-[#0a0a0a] to-[#050505]",
  "from-[#2f1212] via-[#0a0a0a] to-[#050505]",
  "from-[#210d0d] via-[#0a0a0a] to-[#050505]",
  "from-[#331414] via-[#0a0a0a] to-[#050505]",
  "from-[#260f0f] via-[#0a0a0a] to-[#050505]",
  "from-[#2a1111] via-[#0a0a0a] to-[#050505]",
];

export function Modalities() {
  return (
    <section id="modalidades" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Modalidades"
          title="Treine do seu jeito"
          description="Sete formas de evoluir, todas com estrutura completa e professores especializados."
          className="mb-16"
        />

        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MODALITIES.map((mod, i) => (
            <motion.a
              key={mod.slug}
              href={buildWhatsAppLink(
                `Olá! Quero saber mais sobre a modalidade ${mod.title} da Athlos Fit.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              variants={revealChildVariants}
              className={`group relative flex aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${GRADIENTS[i % GRADIENTS.length]} sm:aspect-[3/4]`}
            >
              <div
                aria-hidden
                className="absolute inset-0 bg-grid opacity-20 transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-10 -right-6 select-none font-display text-[9rem] leading-none text-white/[0.04] transition-all duration-700 group-hover:text-accent/[0.08]"
              >
                0{i + 1}
              </span>

              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 mt-auto flex w-full flex-col gap-3 p-7">
                <span className="font-heading text-[11px] font-semibold uppercase tracking-[0.25em] text-accent opacity-0 transition-all duration-500 group-hover:opacity-100">
                  {mod.tagline}
                </span>
                <h3 className="font-display text-4xl tracking-wide text-foreground">{mod.title}</h3>
                <p className="max-h-0 overflow-hidden text-sm leading-relaxed text-muted opacity-0 transition-all duration-500 ease-out group-hover:max-h-24 group-hover:opacity-100">
                  {mod.description}
                </p>
                <span className="mt-1 inline-flex items-center gap-1.5 font-heading text-xs font-semibold uppercase tracking-wider text-foreground transition-colors group-hover:text-accent">
                  Saiba Mais
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </span>
              </div>
            </motion.a>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
