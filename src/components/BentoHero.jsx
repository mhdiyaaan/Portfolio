import {
  Code,
  ArrowDown,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import PixelSnow from "./PixelSnow";

export default function BentoHero({ addRevealRef }) {
  return (
    <section className="section-portfolio flex items-center justify-center px-6 relative overflow-hidden">
      <PixelSnow
        className="pointer-events-none opacity-70"
        color="#ffffff"
        pixelResolution={220}
        density={0.22}
        brightness={1.1}
        variant="square"
      />
      <div className="bento-wrapper relative z-10">
        <div className="bento-grid">
          {/* Hero Card */}
          <div ref={addRevealRef} className="bento-card card-hero-bento reveal">
            <p className="text-[0.75rem] font-semibold tracking-[3px] uppercase text-[hsl(var(--gold))] mb-4">
              Hello, I'm Muhammad Diyan
            </p>
            <h2
              className="text-[clamp(1.7rem,3.2vw,2.6rem)] font-bold leading-[1.18] tracking-[-0.5px] max-w-[420px] mb-6"
              style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--cream))" }}
            >
              Building responsive &amp; user‑friendly{" "}
              <em className="italic text-[hsl(var(--gold))] underline decoration-[hsla(var(--gold)/0.4)] underline-offset-[5px] decoration-2">
                web
              </em>{" "}
              experiences.
            </h2>
            <div className="flex gap-3 flex-wrap">
              <a href="#projects" className="btn-portfolio btn-gold">View Projects</a>
              <a href="#contact" className="btn-portfolio btn-outline-portfolio">Contact Me</a>
            </div>
          </div>

          {/* Profile Photo */}
          <div ref={addRevealRef} className="bento-card card-profile reveal">
            <img src="/profile-photo.png" alt="Muhammad Diyan — Portrait" />
          </div>

          {/* Project Cards */}
          {[
            { label: "Featured Work", title: "LibraNova", tech: "PHP · MySQL · Docker · Railway" },
            { title: "DigiKerala", tech: "HTML · CSS · JavaScript" },
            { title: "K-Smart Guidance Website", tech: "HTML · CSS · JavaScript" },
          ].map((p, i) => (
            <div key={i} ref={addRevealRef} className="bento-card card-project-bento reveal" style={{ gridRow: `${i + 1} / ${i + 2}` }}>
              {p.label && (
                <span className="text-[0.6rem] font-semibold tracking-[2.5px] uppercase text-[hsl(var(--gold))] mb-0.5">
                  {p.label}
                </span>
              )}
              <h3 className="text-base font-semibold text-[hsl(var(--cream))] mb-0.5" style={{ fontFamily: "var(--font-serif)" }}>
                {p.title}
              </h3>
              <p className="text-[0.68rem] text-muted-foreground tracking-wide">{p.tech}</p>
            </div>
          ))}

          {/* Info Card */}
          <div ref={addRevealRef} className="bento-card card-info-bento reveal">
            <div className="w-11 h-11 rounded-xl bg-[hsl(var(--gold))] flex items-center justify-center shrink-0 hover:rotate-[-8deg] hover:scale-110 transition-transform">
              <Code size={20} weight="bold" className="text-background" />
            </div>
            <div className="flex-1 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[0.72rem] font-bold tracking-[2px] text-foreground">WEB DEVELOPER</span>
                <span className="text-[0.68rem] text-muted-foreground tracking-wider">Computer Engineering</span>
              </div>
              <a
                href="#about"
                className="w-10 h-10 rounded-full bg-[hsl(var(--gold))] flex items-center justify-center text-background hover:scale-[1.15] hover:bg-[hsl(var(--cream))] transition-all shrink-0"
              >
                <ArrowDown size={18} />
              </a>
            </div>
          </div>

          {/* Contact Mini */}
          <div ref={addRevealRef} className="bento-card card-contact-mini reveal">
            <h2 className="text-[1.4rem] font-bold text-background leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
              Contact <em className="italic block text-[1.8rem] text-[hsl(var(--cream))]">me</em>
            </h2>
            <div className="flex gap-2.5">
              {[
                { icon: EnvelopeSimple, href: "[muhammeddiyankm7@gmail.com]" },
                { icon: GithubLogo, href: "https://github.com/mhdiyaaan" },
                { icon: LinkedinLogo, href: "https://www.linkedin.com/in/muhamad-diyan-km-a08ab4367/?skipRedirect=true" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-[34px] h-[34px] rounded-full bg-background/25 flex items-center justify-center text-background hover:-translate-y-0.5 hover:scale-110 hover:bg-background/45 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* About Mini */}
          <div ref={addRevealRef} className="bento-card card-about-mini reveal">
            <p className="text-[0.78rem] text-muted-foreground leading-[1.8]">
              Computer Engineering student passionate about building clean, responsive, and user-centered digital experiences.
            </p>
          </div>

          {/* Socials */}
          <div ref={addRevealRef} className="bento-card card-socials-bento reveal">
            {[
              { label: "GITHUB", href: "https://github.com/mhdiyaaan" },
              { label: "LINKEDIN", href: "https://www.linkedin.com/in/muhamad-diyan-km-a08ab4367/?skipRedirect=true" },
              { label: "EMAIL", href: "mailto:muhammeddiyankm7@gmail.com" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-[0.68rem] font-semibold tracking-[3px] text-background hover:text-[hsl(var(--cream))] hover:tracking-[5px] transition-all relative
                  after:content-[''] after:absolute after:bottom-[-3px] after:left-1/2 after:w-0 after:h-[1px] after:bg-background after:transition-all after:duration-300
                  hover:after:w-full hover:after:left-0"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator text-muted-foreground text-[0.7rem] tracking-[2px] uppercase">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
