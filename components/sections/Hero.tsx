"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, PlayCircle } from "lucide-react";
import gsap from "gsap";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink } from "@/lib/constants";

const HEADLINE_LINES = ["O PRÓXIMO NÍVEL", "DA SUA EVOLUÇÃO", "COMEÇA HOJE."];

export function Hero() {
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const section = sectionRef.current;
    if (!section) return;

    const xTo1 = gsap.quickTo(orb1Ref.current, "x", { duration: 1.4, ease: "power3.out" });
    const yTo1 = gsap.quickTo(orb1Ref.current, "y", { duration: 1.4, ease: "power3.out" });
    const xTo2 = gsap.quickTo(orb2Ref.current, "x", { duration: 1.8, ease: "power3.out" });
    const yTo2 = gsap.quickTo(orb2Ref.current, "y", { duration: 1.8, ease: "power3.out" });

    const handlePointerMove = (event: PointerEvent) => {
      const { innerWidth, innerHeight } = window;
      const relX = (event.clientX / innerWidth - 0.5) * 2;
      const relY = (event.clientY / innerHeight - 0.5) * 2;
      xTo1(relX * 40);
      yTo1(relY * 40);
      xTo2(relX * -28);
      yTo2(relY * -28);
    };

    window.addEventListener("pointermove", handlePointerMove);

    const floatTween = gsap.to([orb1Ref.current, orb2Ref.current], {
      y: "+=24",
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.6,
    });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      floatTween.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-svh items-center justify-center overflow-hidden bg-background"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 bg-grid opacity-60"
          style={{
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 10%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 10%, transparent 75%)",
          }}
        />
        <div
          ref={orb1Ref}
          className="absolute left-[8%] top-[18%] h-[340px] w-[340px] rounded-full bg-accent/25 blur-[120px]"
        />
        <div
          ref={orb2Ref}
          className="absolute bottom-[10%] right-[10%] h-[420px] w-[420px] rounded-full bg-accent/15 blur-[140px]"
        />
        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-background via-background/70 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 px-5 pt-28 text-center sm:px-8">
        <motion.span
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-1.5 font-heading text-[11px] font-semibold uppercase tracking-[0.28em] text-accent"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(0,230,118,0.8)]" />
          Academia Premium · Aberta 24 horas
        </motion.span>

        <h1 className="font-display text-[15vw] leading-[0.92] tracking-wide text-foreground sm:text-7xl md:text-8xl lg:text-[7.5rem]">
          {HEADLINE_LINES.map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 44 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={i === 2 ? "block text-glow text-accent" : "block"}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="balance max-w-xl text-base text-muted sm:text-lg"
        >
          Treine em uma academia moderna, equipada e preparada para transformar sua rotina.
          Tecnologia, estrutura e performance em cada detalhe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-4 sm:flex-row"
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
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted"
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
