"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function WhatsAppFloatingButton({
  message = WHATSAPP_DEFAULT_MESSAGE,
  className,
}: {
  message?: string;
  className?: string;
}) {
  return (
    <motion.a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className={cn(
        "relative flex h-14 w-14 items-center justify-center rounded-full bg-accent text-background shadow-[0_8px_30px_rgba(0,230,118,0.45)] transition-transform hover:bg-accent-hover hover:scale-105 active:scale-95",
        className,
      )}
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="absolute h-14 w-14 animate-ping rounded-full bg-accent/40" />
      <MessageCircle className="relative h-6 w-6" strokeWidth={2.25} />
    </motion.a>
  );
}
