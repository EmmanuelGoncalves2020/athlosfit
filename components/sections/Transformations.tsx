"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Camera, ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, revealChildVariants } from "@/components/ui/Reveal";

const PAIRS = [
  { rotateBefore: -7, rotateAfter: 4 },
  { rotateBefore: -4, rotateAfter: 7 },
  { rotateBefore: -8, rotateAfter: 3 },
];

function PolaroidPlaceholder({ label, rotate }: { label: string; rotate: number }) {
  return (
    <div
      style={{ transform: `rotate(${rotate}deg)` }}
      className="w-28 shrink-0 rounded-sm bg-[#f2ede4] p-2 pb-3 shadow-[0_12px_24px_-8px_rgba(0,0,0,0.6)] sm:w-32"
    >
      <div className="flex aspect-square items-center justify-center rounded-[2px] border border-dashed border-black/25 bg-black/5">
        <Camera size={22} className="text-black/25" strokeWidth={1.5} />
      </div>
      <p className="mt-2 text-center font-heading text-[9px] font-semibold uppercase tracking-[0.15em] text-black/50">
        {label}
      </p>
    </div>
  );
}

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
          description="Em breve, com autorização dos nossos alunos, mostramos as transformações de verdade."
          className="mb-14"
        />

        <RevealGroup className="mb-16 flex flex-wrap items-start justify-center gap-x-10 gap-y-10 sm:gap-x-14">
          {PAIRS.map((pair, i) => (
            <motion.div key={i} variants={revealChildVariants} className="flex flex-col items-center">
              <div className="relative h-40 w-40 sm:h-44 sm:w-44">
                <div className="absolute left-0 top-2">
                  <PolaroidPlaceholder label="Antes" rotate={pair.rotateBefore} />
                </div>
                <div className="absolute bottom-0 right-0">
                  <PolaroidPlaceholder label="Depois" rotate={pair.rotateAfter} />
                </div>
              </div>
              <span className="mt-3 font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                Em breve
              </span>
            </motion.div>
          ))}
        </RevealGroup>

        <Reveal className="mx-auto max-w-2xl">
          <div className="relative flex flex-col justify-between rounded-2xl border border-border bg-surface p-8 sm:p-10">
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
