import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/logo-mark-white.png"
        alt=""
        aria-hidden="true"
        className="h-8 w-auto shrink-0 object-contain"
      />
      <span className="font-display text-2xl leading-none tracking-wide text-foreground">
        ATHLOS<span className="text-accent">FIT</span>
      </span>
    </span>
  );
}
