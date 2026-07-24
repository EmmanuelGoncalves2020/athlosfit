import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <path d="M15 2 L27 26 L19.5 26 L15 15.5 L10.5 26 L3 26 Z" fill="currentColor" />
        <circle cx="15" cy="9.5" r="2.4" fill="#9A2A2A" />
      </svg>
      <span className="font-display text-2xl leading-none tracking-wide text-foreground">
        ATHLOS<span className="text-accent">FIT</span>
      </span>
    </span>
  );
}
