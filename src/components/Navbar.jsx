import { NAV_LINKS } from "../data/constants";

export default function Navbar({ menuOpen, setMenuOpen, scrolled, activeSection }) {
  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 shadow-[0_4px_32px_rgba(0,0,0,0.3)]"
            : "bg-background/50 backdrop-blur-xl"
        }`}
      >
        <div className="flex items-center justify-between px-8 py-4 max-w-[1100px] mx-auto">
          <a
            href="#hero"
            className="text-xl tracking-tight text-foreground hover:text-[hsl(var(--gold))] transition-colors"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontStyle: "italic" }}
          >
            Muhammad Diyan
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-[0.72rem] font-semibold tracking-[2.5px] uppercase transition-colors relative
                  after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[1px]
                  after:bg-[hsl(var(--gold))] after:transition-all after:duration-300
                  ${
                    activeSection === link.href.slice(1)
                      ? "text-foreground after:w-full"
                      : "text-muted-foreground hover:text-foreground after:w-0 hover:after:w-full"
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            className={`md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1 z-[1001] hamburger-btn ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </nav>

      {/* Mobile nav overlay */}
      <div className={`mobile-nav-overlay ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-[0.9rem] font-semibold tracking-[3px] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
