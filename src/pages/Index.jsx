import { useEffect, useRef, useState, useCallback } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BentoHero from "../components/BentoHero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const revealRefs = useRef([]);
  const skillRefs = useRef([]);
  const revealObserverRef = useRef(null);
  const skillObserverRef = useRef(null);

  const addRevealRef = useCallback((el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
      if (revealObserverRef.current) {
        revealObserverRef.current.observe(el);
      }
    }
  }, []);

  const addSkillRef = useCallback((el) => {
    if (el && !skillRefs.current.includes(el)) {
      skillRefs.current.push(el);
      if (skillObserverRef.current) {
        skillObserverRef.current.observe(el);
      }
    }
  }, []);

  useEffect(() => {
    // Scroll reveal observer
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("active");
        });
      },
      { threshold: 0.1 }
    );
    revealObserverRef.current = revealObserver;
    revealRefs.current.forEach((el) => el && revealObserver.observe(el));

    // Skill bar observer
    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const fill = e.target;
            fill.style.width = fill.dataset.width || "0%";
          }
        });
      },
      { threshold: 0.5 }
    );
    skillObserverRef.current = skillObserver;
    skillRefs.current.forEach((el) => el && skillObserver.observe(el));

    // Scroll handler
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const scrollY = window.scrollY + 120;
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((s) => {
        const top = s.offsetTop;
        const h = s.offsetHeight;
        if (scrollY >= top && scrollY < top + h) {
          setActiveSection(s.id);
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Trigger initial reveals
    setTimeout(() => {
      revealRefs.current.forEach((el) => {
        if (el && el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add("active");
        }
      });
    }, 100);

    return () => {
      window.removeEventListener("scroll", onScroll);
      revealObserver.disconnect();
      skillObserver.disconnect();
      revealObserverRef.current = null;
      skillObserverRef.current = null;
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrolled={scrolled}
        activeSection={activeSection}
      />
      <Hero />
      <BentoHero addRevealRef={addRevealRef} />
      <About addRevealRef={addRevealRef} />
      <Skills addRevealRef={addRevealRef} addSkillRef={addSkillRef} />
      <Projects addRevealRef={addRevealRef} />
      <Contact addRevealRef={addRevealRef} />
      <Footer />
    </div>
  );
}
