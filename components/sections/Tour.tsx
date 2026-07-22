"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Compass } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { buildWhatsAppLink } from "@/lib/constants";

export function Tour() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          ref={ref}
          className="relative isolate flex h-[70svh] min-h-[420px] items-center justify-center overflow-hidden rounded-3xl border border-border"
        >
          <motion.div
            style={{ y }}
            className="absolute inset-[-8%] bg-[radial-gradient(ellipse_60%_50%_at_30%_30%,rgba(0,230,118,0.16),transparent_60%),radial-gradient(ellipse_50%_50%_at_80%_70%,rgba(0,230,118,0.1),transparent_60%)] bg-[#0a0d0a]"
          />
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10" />

          <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 font-heading text-[11px] font-semibold uppercase tracking-[0.28em] text-accent backdrop-blur">
                <Compass size={14} />
                Tour Virtual
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="balance max-w-2xl font-display text-4xl leading-[0.95] tracking-wide text-foreground sm:text-6xl">
                Conheça cada espaço antes de treinar
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="balance max-w-lg text-base text-muted sm:text-lg">
                Musculação, funcional, lutas e muito mais. Veja de perto a estrutura que vai te
                acompanhar todos os dias.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Button
                href={buildWhatsAppLink("Olá! Quero agendar um tour presencial na Athlos Fit.")}
                external
                size="lg"
              >
                Fazer Tour
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
