import { ArrowSquareOut, GithubLogo } from "@phosphor-icons/react";
import { PROJECTS } from "../data/constants";
import PixelSnow from "./PixelSnow";

export default function Projects({ addRevealRef }) {
  return (
    <section id="projects" className="section-portfolio relative overflow-hidden isolate">
      <PixelSnow
        className="pointer-events-none opacity-60"
        color="#ffffff"
        pixelResolution={240}
        density={0.18}
        brightness={1.0}
        variant="square"
      />
      <div className="w-[90%] max-w-[1100px] mx-auto relative z-10">
        <h2 ref={addRevealRef} className="section-title-portfolio reveal">My <em>Projects</em></h2>
        <div ref={addRevealRef} className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {PROJECTS.map((project) => (
            <article key={project.title} className="project-card-full">
              <div className="project-image">
                <project.icon size={64} className="text-[hsl(var(--gold))] opacity-40" />
              </div>
              <div className="p-7">
                <h3 className="text-[1.2rem] mb-2.5 text-foreground transition-colors" style={{ fontFamily: "var(--font-serif)" }}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-[0.91rem] mb-[18px] leading-[1.7]">{project.description}</p>
                <div className="project-tags flex flex-wrap gap-2 mb-[22px]">
                  {project.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-portfolio btn-sm-portfolio btn-gold"
                  >
                    <ArrowSquareOut size={14} /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-portfolio btn-sm-portfolio btn-outline-portfolio"
                  >
                    <GithubLogo size={14} /> GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
