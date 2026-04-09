import { useState } from "react";
import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  PaperPlaneTilt,
  CheckCircle,
  CircleNotch,
} from "@phosphor-icons/react";
import PixelSnow from "./PixelSnow";

export default function Contact({ addRevealRef }) {
  const [formStatus, setFormStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setFormStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xqegjozn", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormStatus("sent");
        form.reset();
        setTimeout(() => setFormStatus("idle"), 3000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 3000);
      }
    } catch {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="section-portfolio section-alt-bg relative overflow-hidden isolate">
      <PixelSnow
        className="pointer-events-none opacity-55"
        color="#ffffff"
        pixelResolution={220}
        density={0.2}
        brightness={1.05}
        variant="square"
      />
      <div className="w-[90%] max-w-[1100px] mx-auto relative z-10">
        <h2 ref={addRevealRef} className="section-title-portfolio reveal">Get In <em>Touch</em></h2>
        <div ref={addRevealRef} className="reveal grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-[52px] items-start">
          <div>
            <p className="text-muted-foreground text-base leading-[1.85] mb-[30px]">
              Have a project in mind or just want to say hello? Feel free to reach out!
            </p>
            {[
              { icon: EnvelopeSimple, label: "muhammeddiyankm7@gmail.com", href: "mailto:muhammeddiyankm7@gmail.com" },
              { icon: GithubLogo, label: "github.com/mhdiyaaan", href: "https://github.com/mhdiyaaan" },
              { icon: LinkedinLogo, label: "linkedin.com/in/muhammeddiyan", href: "https://linkedin.com/in/muhammeddiyan" },
            ].map((item) => (
              <div key={item.label} className="contact-item">
                <item.icon size={22} className="text-[hsl(var(--gold))] drop-shadow-[0_0_6px_hsla(var(--gold)/0.3)]" />
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-muted-foreground hover:text-[hsl(var(--gold))] transition-colors"
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="contact-form-portfolio flex flex-col gap-5">
            <div>
              <label htmlFor="name" className="block text-[0.85rem] text-muted-foreground mb-2 font-semibold tracking-wide uppercase">
                Name
              </label>
              <input type="text" id="name" name="name" placeholder="Your name" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-[0.85rem] text-muted-foreground mb-2 font-semibold tracking-wide uppercase">
                Email
              </label>
              <input type="email" id="email" name="email" placeholder="you@example.com" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-[0.85rem] text-muted-foreground mb-2 font-semibold tracking-wide uppercase">
                Message
              </label>
              <textarea id="message" name="message" rows={5} placeholder="Your message..." required />
            </div>
            <button
              type="submit"
              disabled={formStatus === "sending" || formStatus === "sent"}
              className="btn-portfolio btn-gold w-full justify-center"
            >
              {formStatus === "sending" ? (
                <><CircleNotch size={16} className="animate-spin" /> Sending...</>
              ) : formStatus === "sent" ? (
                <><CheckCircle size={16} /> Message Sent!</>
              ) : formStatus === "error" ? (
                <><PaperPlaneTilt size={16} /> Failed — Try Again</>
              ) : (
                <><PaperPlaneTilt size={16} /> Send Message</>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

