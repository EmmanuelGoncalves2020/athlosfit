import { MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { NAV_LINKS } from "@/lib/data";
import { CONTACT, SITE_NAME } from "@/lib/constants";
import { InstagramIcon } from "@/components/ui/social-icons";

const SOCIALS = [{ icon: InstagramIcon, href: CONTACT.social.instagram, label: "Instagram" }];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="flex flex-col gap-4 md:col-span-2">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Musculação, boxe, dança e spinning em uma estrutura premium aberta 24 horas,
              com Espaço Kids e app exclusivo para sua evolução.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all hover:border-accent hover:text-accent"
                >
                  <Icon size={17} strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Navegação
            </h3>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted transition-colors hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Contato
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-muted">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>{CONTACT.address.full}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-accent" />
                <span>{CONTACT.phoneDisplay}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted sm:flex-row">
          <p>
            © {year} {SITE_NAME}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="/politica-de-privacidade" className="transition-colors hover:text-accent">
              Política de Privacidade
            </a>
            <a href="/termos-de-uso" className="transition-colors hover:text-accent">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
