"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MODALITIES } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, revealChildVariants } from "@/components/ui/Reveal";
import { buildWhatsAppLink } from "@/lib/constants";

export function Modalities() {
  return (
    <section id="modalidades" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Modalidades"
          title="Treine do seu jeito"
          description="Musculação, boxe, dança e spinning, todas com estrutura completa e professores especializados."
          className="mb-16"
        />

        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {MODALITIES.map((mod) => (
            <motion.a
              key={mod.slug}
              href={buildWhatsAppLink(
                `Olá! Quero saber mais sobre a modalidade ${mod.title} da Athlos Fit.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              variants={revealChildVariants}
              className="group relative flex aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface sm:aspect-[4/5] lg:aspect-[16/11]"
            >
              {mod.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={mod.photo}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2a1010] via-[#140a08] to-background" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/brand/logo-mark-white.png"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-6 -top-6 h-[130%] w-auto object-contain opacity-[0.07] transition-opacity duration-700 group-hover:opacity-[0.12]"
                  />
                </>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-background/5" />

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
