"use client";

import { Building2, Clock, Construction, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, revealChildVariants } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { InstagramIcon } from "@/components/ui/social-icons";
import { CONTACT, MAPS_EMBED_SRC, buildWhatsAppLink } from "@/lib/constants";
import { motion } from "framer-motion";

export function Location() {
  return (
    <section id="contato" className="relative bg-surface/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Nossas Unidades"
          title="Onde estamos"
          description="A primeira unidade já está de portas abertas. A próxima está a caminho."
          className="mb-12"
        />

        <RevealGroup className="mb-16 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <motion.div
            variants={revealChildVariants}
            className="flex flex-col gap-3 rounded-2xl border border-accent/40 bg-surface p-6 sm:p-7"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Building2 size={18} strokeWidth={1.75} />
              </span>
              <div>
                <p className="font-heading text-sm font-semibold text-foreground">
                  Athlos Fit — Nova Iguaçu
                </p>
                <p className="text-xs text-accent">Aberta agora</p>
              </div>
            </div>
            <p className="text-sm text-muted">{CONTACT.address.full}</p>
          </motion.div>

          <motion.div
            variants={revealChildVariants}
            className="flex flex-col gap-3 rounded-2xl border border-dashed border-border bg-transparent p-6 sm:p-7"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background text-muted">
                <Construction size={18} strokeWidth={1.75} />
              </span>
              <div>
                <p className="font-heading text-sm font-semibold text-foreground">Nova unidade</p>
                <p className="text-xs text-muted">Em construção</p>
              </div>
            </div>
            <p className="text-sm text-muted">
              Estamos preparando a segunda unidade da Athlos Fit. Em breve, mais um endereço por
              perto.
            </p>
          </motion.div>
        </RevealGroup>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <Reveal
            direction="left"
            className="flex flex-col justify-between gap-8 rounded-2xl border border-border bg-surface p-8 lg:col-span-2 sm:p-10"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-3.5">
                <MapPin size={19} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p className="font-heading text-sm font-semibold text-foreground">Endereço</p>
                  <p className="mt-1 text-sm text-muted">{CONTACT.address.full}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Clock size={19} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p className="font-heading text-sm font-semibold text-foreground">Horário</p>
                  <ul className="mt-1 flex flex-col gap-0.5 text-sm text-muted">
                    {CONTACT.hours.map((h) => (
                      <li key={h.label} className="flex justify-between gap-4">
                        <span>{h.label}</span>
                        <span className="text-foreground/80">{h.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone size={19} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p className="font-heading text-sm font-semibold text-foreground">Telefone</p>
                  <p className="mt-1 text-sm text-muted">{CONTACT.phoneDisplay}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <InstagramIcon size={19} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p className="font-heading text-sm font-semibold text-foreground">Instagram</p>
                  <a
                    href={CONTACT.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-muted transition-colors hover:text-accent"
                  >
                    @academiaathlosfit
                  </a>
                </div>
              </div>
            </div>

            <Button
              href={buildWhatsAppLink("Olá! Quero falar com a equipe da Athlos Fit.")}
              external
              className="w-full"
            >
              Falar no WhatsApp
            </Button>
          </Reveal>

          <Reveal
            direction="right"
            className="overflow-hidden rounded-2xl border border-border lg:col-span-3"
          >
            <iframe
              title="Localização da Athlos Fit no Google Maps"
              src={MAPS_EMBED_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full grayscale invert-[92%] contrast-[90%] lg:h-full lg:min-h-[480px]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
