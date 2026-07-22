"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Dumbbell } from "lucide-react";
import { APP_FEATURES } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ICONS } from "@/components/ui/icon-map";
import { cn } from "@/lib/utils";

function ScreenTreinos() {
  return (
    <div className="flex flex-col gap-2.5">
      {["Supino reto", "Leg press", "Puxada frontal", "Rosca direta"].map((ex, i) => (
        <div
          key={ex}
          className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3"
        >
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/15 text-[11px] font-semibold text-accent">
              {i + 1}
            </span>
            <span className="text-xs font-medium text-white">{ex}</span>
          </div>
          <span className="text-[10px] text-white/40">4x12</span>
        </div>
      ))}
    </div>
  );
}

function ScreenAgenda() {
  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-7 gap-1.5">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className={cn(
              "flex h-6 items-center justify-center rounded-md text-[9px]",
              i === 9 ? "bg-accent text-background font-bold" : "bg-white/[0.04] text-white/40",
            )}
          >
            {i + 1}
          </span>
        ))}
      </div>
      <div className="rounded-xl border border-accent/30 bg-accent/10 px-3.5 py-3">
        <p className="text-xs font-semibold text-white">Cross Training</p>
        <p className="text-[10px] text-white/50">Hoje · 19h00 com Coach Renan</p>
      </div>
    </div>
  );
}

function ScreenPagamento() {
  return (
    <div className="flex flex-col gap-3">
      <div className="rounded-xl bg-gradient-to-br from-accent/25 to-accent/5 p-4">
        <p className="text-[10px] uppercase tracking-widest text-white/50">Plano Plus</p>
        <p className="mt-1 font-display text-2xl tracking-wide text-white">R$ 189,00</p>
      </div>
      <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3">
        <span className="text-xs text-white/70">Próxima cobrança</span>
        <span className="text-xs font-semibold text-white">05/08</span>
      </div>
      <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3">
        <span className="text-xs text-white/70">Status</span>
        <span className="text-xs font-semibold text-accent">Em dia</span>
      </div>
    </div>
  );
}

function ScreenCheckin() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-4">
      <div className="grid h-28 w-28 grid-cols-4 gap-1 rounded-xl bg-white p-2.5">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className={cn("rounded-[2px]", (i * 7) % 3 === 0 ? "bg-black" : "bg-transparent")} />
        ))}
      </div>
      <p className="text-[11px] font-medium text-white/60">Aproxime do totem para check-in</p>
    </div>
  );
}

function ScreenEvolucao() {
  const bars = [30, 45, 40, 60, 72, 65, 88];
  return (
    <div className="flex h-32 items-end justify-between gap-2">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${h}%` }}
          transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "w-full rounded-t-md",
            i === bars.length - 1 ? "bg-accent shadow-[0_0_16px_rgba(0,230,118,0.6)]" : "bg-white/15",
          )}
        />
      ))}
    </div>
  );
}

const SCREENS = [ScreenTreinos, ScreenAgenda, ScreenPagamento, ScreenCheckin, ScreenEvolucao];

export function AppShowcase() {
  const [active, setActive] = useState(0);
  const ActiveScreen = SCREENS[active];
  const activeFeature = APP_FEATURES[active];

  return (
    <section className="relative overflow-hidden bg-surface/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="order-2 flex flex-col gap-8 lg:order-1">
            <SectionHeading
              eyebrow="App Exclusivo"
              title="Sua evolução na palma da mão"
              align="left"
              description="Treinos, agenda, pagamento, check-in e evolução: tudo em um app feito para quem leva o treino a sério."
            />

            <div className="flex flex-col gap-3">
              {APP_FEATURES.map((feature, i) => {
                const Icon = ICONS[feature.icon] ?? Dumbbell;
                const isActive = i === active;
                return (
                  <button
                    key={feature.title}
                    onClick={() => setActive(i)}
                    className={cn(
                      "flex items-center gap-4 rounded-xl border px-5 py-4 text-left transition-all duration-400",
                      isActive
                        ? "border-accent/50 bg-surface shadow-[0_0_30px_-10px_rgba(0,230,118,0.4)]"
                        : "border-border bg-transparent hover:border-white/20",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors",
                        isActive ? "border-accent/40 bg-accent/10 text-accent" : "border-border text-muted",
                      )}
                    >
                      <Icon size={18} strokeWidth={1.5} />
                    </span>
                    <span>
                      <span className="block font-heading text-sm font-semibold text-foreground">
                        {feature.title}
                      </span>
                      <span className="block text-xs text-muted">{feature.description}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <Reveal direction="left" className="order-1 flex justify-center lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 -z-10 scale-90 rounded-full bg-accent/20 blur-[100px]" />
              <div className="relative h-[560px] w-[280px] rounded-[2.75rem] border-[6px] border-[#111214] bg-black p-2.5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
                <div className="absolute left-1/2 top-2.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-[#111214]" />
                <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#0b0d0b] to-black px-4 pb-6 pt-9">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="font-display text-lg tracking-wide text-white">
                      ATHLOS<span className="text-accent">FIT</span>
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[10px] text-white">
                      RA
                    </span>
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeFeature.title}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -14 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="mb-4 font-heading text-xs font-semibold uppercase tracking-widest text-white/50">
                        {activeFeature.title}
                      </p>
                      <ActiveScreen />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
