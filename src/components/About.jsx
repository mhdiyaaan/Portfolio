import PixelSnow from "./PixelSnow";

export default function About({ addRevealRef }) {
  return (
    <section id="about" className="section-portfolio relative overflow-hidden isolate">
      <PixelSnow
        className="pointer-events-none opacity-60"
        color="#ffffff"
        pixelResolution={240}
        density={0.18}
        brightness={1.0}
        variant="square"
      />
      <div className="w-[90%] max-w-[1100px] mx-auto relative z-10">
        <h2 ref={addRevealRef} className="section-title-portfolio reveal">About <em>Me</em></h2>
        <div ref={addRevealRef} className="reveal grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-[52px] items-start">
          <div className="space-y-[18px]">
            {[
              "I'm a Computer Engineering student with a deep passion for web development. My journey started with curiosity about how websites work, and it quickly turned into a full-blown obsession with crafting clean, responsive, and user-centered digital experiences.",
              "I enjoy turning ideas into reality using modern front-end technologies. Every project is an opportunity for me to learn something new — from mastering CSS layouts to writing efficient JavaScript. I'm always eager to expand my skill set and take on new challenges.",
              "When I'm not coding, you'll find me exploring new frameworks, contributing to open-source projects, or reading about the latest trends in web technology.",
            ].map((t, i) => (
              <p key={i} className="text-muted-foreground text-base leading-[1.85]">{t}</p>
            ))}
          </div>
          <div className="grid grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-4">
            {[
              { num: "5+", label: "Projects Completed" },
              { num: "6+", label: "Technologies Learned" },
              { num: "100%", label: "Passion for Code" },
            ].map((s) => (
              <div key={s.label} ref={addRevealRef} className="stat-card reveal">
                <span className="block text-[2.2rem] font-extrabold text-[hsl(var(--gold))]" style={{ fontFamily: "var(--font-serif)" }}>
                  {s.num}
                </span>
                <span className="text-[0.82rem] text-muted-foreground mt-1.5 tracking-wide uppercase">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
