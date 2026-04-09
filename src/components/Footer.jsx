import { GithubLogo, LinkedinLogo, EnvelopeSimple } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="w-[90%] max-w-[1100px] mx-auto flex flex-col items-center gap-[22px]">
        <a
          href="#hero"
          className="text-[1.2rem] font-bold italic text-[hsl(var(--gold))] tracking-wide"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Muhammad Diyan
        </a>
        <div className="flex gap-[22px]">
          {[
            { icon: GithubLogo, href: "https://github.com/muhammaddiyan" },
            { icon: LinkedinLogo, href: "https://linkedin.com/in/muhammaddiyan" },
            { icon: EnvelopeSimple, href: "mailto:muhammaddiyan@email.com" },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-[1.4rem] text-muted-foreground hover:text-[hsl(var(--gold))] hover:-translate-y-1 transition-all"
            >
              <Icon size={22} />
            </a>
          ))}
        </div>
        <p className="text-[0.82rem] text-muted-foreground tracking-wide">
          © 2026 Muhammad Diyan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
