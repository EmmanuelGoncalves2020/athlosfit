"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink } from "@/lib/constants";

const TILES = [
  { src: "/gallery/esteiras.webp", alt: "Corredor de esteiras da Athlos Fit" },
  { src: "/gallery/kids.webp", alt: "Espaço Kids da Athlos Fit" },
  { src: "/gallery/musculacao-2.webp", alt: "Área de musculação da Athlos Fit" },
];

export function Tour() {
  return (
    <section className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="O espaço"
          title="Cada canto pensado pra você treinar"
          description="Musculação, boxe, dança, spinning e Espaço Kids. Veja de perto a estrutura que vai te acompanhar todos os dias."
          align="left"
          className="mb-12"
        />

        <div className="grid grid-cols-1 gap-4 sm:h-[560px] sm:grid-cols-3 sm:grid-rows-2">
          <Reveal className="relative col-span-1 row-span-2 overflow-hidden rounded-2xl border border-border sm:col-span-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={TILES[0].src} alt={TILES[0].alt} className="h-64 w-full object-cover sm:h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-4 p-6 sm:p-8">
              <Button
                href={buildWhatsAppLink("Olá! Quero agendar um tour presencial na Athlos Fit.")}
                external
              >
                Fazer Tour
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative overflow-hidden rounded-2xl border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={TILES[1].src} alt={TILES[1].alt} className="h-48 w-full object-cover sm:h-full" />
          </Reveal>

          <Reveal delay={0.2} className="relative overflow-hidden rounded-2xl border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={TILES[2].src} alt={TILES[2].alt} className="h-48 w-full object-cover sm:h-full" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
