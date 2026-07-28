"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, PlayCircle } from "lucide-react";
import gsap from "gsap";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink } from "@/lib/constants";

const HEADLINE_LINES = ["O PRÓXIMO NÍVEL", "DA SUA EVOLUÇÃO", "COMEÇA HOJE."];

export function Hero() {
  const photoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches || !photoRef.current) return;

    const tween = gsap.fromTo(
      photoRef.current,
      { scale: 1.12 },
      { scale: 1, duration: 5, ease: "power2.out" },
    );

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-end overflow-hidden bg-background"
    >
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={photoRef}
          src="/gallery/recepcao.webp"
          alt="Recepção da Athlos Fit"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/10 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-background/90 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 pb-20 pt-40 sm:px-8 sm:pb-24">
        <motion.span
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 font-heading text-[11px] font-semibold uppercase tracking-[0.32em] text-accent"
        >
          <span className="h-px w-8 bg-accent" />
          Nova Iguaçu, RJ · 24h de segunda a sexta
        </motion.span>

        <h1 className="max-w-4xl font-display text-[15vw] leading-[0.9] tracking-wide text-foreground sm:text-7xl md:text-8xl lg:text-[7rem]">
          {HEADLINE_LINES.map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 44 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={i === 2 ? "block text-accent" : "block"}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="balance max-w-md text-base text-muted sm:text-lg"
        >
          Musculação, boxe, dança e spinning em uma estrutura que não para. Treine no seu
          horário, com a estrutura completa da Athlos Fit.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start gap-4 sm:flex-row sm:items-center"
        >
          <Button
            href={buildWhatsAppLink("Olá! Quero agendar uma aula experimental na Athlos Fit.")}
            external
            size="lg"
          >
            Agendar Aula Experimental
          </Button>
          <Button href="#sobre" variant="secondary" size="lg">
            <PlayCircle size={18} strokeWidth={1.75} />
            Conheça a Academia
          </Button>
        </motion.div>
      </div>

      <motion.a
        href="#sobre"
        aria-label="Rolar para a próxima seção"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-6 right-5 z-10 hidden flex-col items-center gap-2 text-muted sm:right-8 sm:flex"
      >
        <span className="font-heading text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.span>
      </motion.a>
    </section>
  );
}
