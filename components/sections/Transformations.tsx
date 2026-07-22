"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const METRICS = [
  { label: "Força", before: 32, after: 78 },
  { label: "Resistência", before: 40, after: 85 },
  { label: "Composição corporal", before: 28, after: 74 },
];

export function Transformations() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const goTo = (i: number) => setIndex((i + TESTIMONIALS.length) % TESTIMONIALS.length);
  const current = TESTIMONIALS[index];

  return (
    <section id="resultados" className="relative bg-surface/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Resultados reais"
          title="Antes e Depois"
          description="Transformações construídas com consistência, acompanhamento profissional e a estrutura certa."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal direction="left" className="rounded-2xl border border-border bg-surface p-8 sm:p-10">
            <div className="mb-8 flex items-center justify-between">
              <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Evolução média em 90 dias
              </span>
            </div>
            <div className="flex flex-col gap-7">
              {METRICS.map((metric) => (
                <div key={metric.label}>
                  <div className="mb-2 flex items-center justify-between font-heading text-xs uppercase tracking-wider text-foreground">
                    <span>{metric.label}</span>
                    <span className="text-accent">+{metric.after - metric.before}%</span>
                  </div>
                  <div className="relative h-2 w-full overflow-hidden rounded-full bg-background">
                    <div
                      className="absolute inset-y-0 left-0 rounded-full bg-white/15"
                      style={{ width: `${metric.before}%` }}
                    />
                    <motion.div
                      className="absolute inset-y-0 left-0 rounded-full bg-accent shadow-[0_0_16px_rgba(0,230,118,0.6)]"
                      initial={{ width: `${metric.before}%` }}
                      whileInView={{ width: `${metric.after}%` }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                  <div className="mt-1.5 flex justify-between font-heading text-[10px] uppercase tracking-widest text-muted">
                    <span>Antes</span>
                    <span>Depois</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal direction="right" className="relative flex flex-col justify-between rounded-2xl border border-border bg-surface p-8 sm:p-10">
            <Quote className="mb-4 h-9 w-9 text-accent/50" strokeWidth={1.5} />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-1 flex-col justify-between"
              >
                <div className="flex gap-1 pb-4">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="balance flex-1 text-lg leading-relaxed text-foreground sm:text-xl">
                  “{current.quote}”
                </p>
                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <p className="font-heading text-sm font-semibold text-foreground">{current.name}</p>
                    <p className="text-xs text-muted">{current.role}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      aria-label="Depoimento anterior"
                      onClick={() => goTo(index - 1)}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      type="button"
                      aria-label="Próximo depoimento"
                      onClick={() => goTo(index + 1)}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 flex gap-1.5">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.name}
                  aria-label={`Ver depoimento de ${t.name}`}
                  onClick={() => goTo(i)}
                  className={`h-1 flex-1 rounded-full transition-colors ${
                    i === index ? "bg-accent" : "bg-border"
                  }`}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
