import { SKILLS } from "../data/constants";
import PixelSnow from "./PixelSnow";

export default function Skills({ addRevealRef, addSkillRef }) {
  return (
    <section id="skills" className="section-portfolio section-alt-bg relative overflow-hidden isolate">
      <PixelSnow
        className="pointer-events-none opacity-55"
        color="#ffffff"
        pixelResolution={220}
        density={0.16}
        brightness={0.95}
        variant="square"
      />
      <div className="w-[90%] max-w-[1100px] mx-auto relative z-10">
        <h2 ref={addRevealRef} className="section-title-portfolio reveal">My <em>Skills</em></h2>
        <div ref={addRevealRef} className="reveal grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="skill-card">
              <skill.icon size={40} className="text-[hsl(var(--gold))] mx-auto mb-4 transition-transform hover:scale-[1.15] hover:rotate-[-3deg]" />
              <h3 className="text-[0.95rem] font-semibold text-foreground mb-[18px]" style={{ fontFamily: "var(--font-sans)" }}>
                {skill.name}
              </h3>
              <div className="skill-bar">
                <div ref={addSkillRef} className="skill-fill" data-width={skill.width} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
