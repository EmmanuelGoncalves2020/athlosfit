import { STATS } from "@/lib/data";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { ICONS } from "@/components/ui/icon-map";

export function Stats() {
  return (
    <section className="relative border-y border-border bg-surface/40 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-y-12 sm:grid-cols-3 lg:grid-cols-6 lg:gap-y-0">
          {STATS.map((stat, i) => {
            const Icon = ICONS[stat.icon];
            return (
              <Reveal
                key={stat.label}
                delay={i * 0.06}
                className="flex flex-col items-center gap-3 border-border px-4 text-center lg:border-l lg:first:border-l-0"
              >
                <Icon size={22} strokeWidth={1.5} className="text-accent" />
                {stat.kind === "counter" ? (
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="font-display text-4xl tracking-wide text-foreground sm:text-5xl"
                  />
                ) : (
                  <span className="font-display text-3xl tracking-wide text-foreground sm:text-4xl">
                    {stat.display}
                  </span>
                )}
                <span className="font-heading text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
                  {stat.label}
                </span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
