export const SITE_NAME = "ATHLOS FIT";
export const SITE_URL = "https://www.athlosfit.com.br";
export const SITE_DESCRIPTION =
  "Academia aberta 24 horas de segunda a sexta, com musculação moderna, aulas coletivas de lutas, dança e spinning, Espaço Kids e estrutura premium em Nova Iguaçu, RJ.";

export const CONTACT = {
  whatsappNumber: "5521994414710",
  whatsappDisplay: "(21) 99441-4710",
  phoneDisplay: "(21) 99441-4710",
  address: {
    street: "Estr. Santa Bárbara, 87",
    district: "Miguel Couto",
    city: "Nova Iguaçu",
    state: "RJ",
    zip: "26070-401",
    full: "Estr. Santa Bárbara, 87 – Miguel Couto, Nova Iguaçu – RJ",
  },
  hours: [
    { label: "Segunda a Sexta", value: "24 horas" },
    { label: "Sábado", value: "05h às 20h" },
    { label: "Domingo e Feriados", value: "05h às 17h" },
  ],
  social: {
    instagram: "https://www.instagram.com/academiaathlosfit/",
  },
  mapsLink: "https://maps.google.com/?q=Athlos+Fit+Academia+Nova+Iguaçu",
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
