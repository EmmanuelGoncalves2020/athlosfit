export const SITE_NAME = "ATHLOS FIT";
export const SITE_URL = "https://www.athlosfit.com.br";
export const SITE_DESCRIPTION =
  "A academia mais moderna e tecnológica da cidade. Musculação, funcional, lutas, cross, pilates e personal em um ambiente premium, climatizado e aberto 24 horas.";

export const CONTACT = {
  whatsappNumber: "5511999999999",
  whatsappDisplay: "(11) 99999-9999",
  phoneDisplay: "(11) 4002-8922",
  email: "contato@athlosfit.com.br",
  address: {
    street: "Av. das Nações, 1200",
    district: "Jardim Europa",
    city: "São Paulo",
    state: "SP",
    zip: "01452-000",
    full: "Av. das Nações, 1200 – Jardim Europa, São Paulo – SP",
  },
  hours: [
    { label: "Segunda a Sexta", value: "24 horas" },
    { label: "Sábado", value: "24 horas" },
    { label: "Domingo e Feriados", value: "08h às 18h" },
  ],
  social: {
    instagram: "https://instagram.com/athlosfit",
    facebook: "https://facebook.com/athlosfit",
    youtube: "https://youtube.com/@athlosfit",
  },
  mapsLink: "https://maps.google.com/?q=Athlos+Fit+Academia",
} as const;

export const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  CONTACT.address.full,
)}&output=embed`;

export function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encoded}`;
}

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vim pelo site e quero agendar uma aula experimental na Athlos Fit.";
