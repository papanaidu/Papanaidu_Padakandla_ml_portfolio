import { AnimatePresence, motion } from "motion/react";
import { ArrowDownToLine, ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation, portfolio } from "../data/portfolio.js";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observedSections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.15, 0.4, 0.7] },
    );

    observedSections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50">
      <div className="nav-shell mx-auto flex w-full max-w-[1320px] items-center justify-between px-5 sm:px-8 xl:px-12">
        <a
          aria-label={`${portfolio.name}, home`}
          className="brand-mark"
          href="#home"
          onClick={closeMenu}
        >
          <span>p.</span>
          <span className="brand-period" aria-hidden="true">
            •
          </span>
        </a>

        <nav className="desktop-nav hidden items-center lg:flex" aria-label="Main navigation">
          {navigation.map(({ id, label }) => (
            <a
              aria-current={activeSection === id ? "location" : undefined}
              className={`nav-link ${activeSection === id ? "is-active" : ""}`}
              href={`#${id}`}
              key={id}
            >
              {label}
            </a>
          ))}
          <a
            className="nav-resume"
            download="PAPANAIDU_PADAKANDLA_Resume.pdf"
            href={portfolio.resume}
          >
            Resume <ArrowDownToLine size={14} aria-hidden="true" />
          </a>
        </nav>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="menu-toggle flex items-center justify-center lg:hidden"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          type="button"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            animate={{ opacity: 1, y: 0 }}
            aria-label="Mobile navigation"
            className="mobile-nav lg:hidden"
            exit={{ opacity: 0, y: -8 }}
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            {navigation.map(({ id, label }) => (
              <a
                aria-current={activeSection === id ? "location" : undefined}
                className={`mobile-nav-link ${activeSection === id ? "is-active" : ""}`}
                href={`#${id}`}
                key={id}
                onClick={closeMenu}
              >
                {label}
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            ))}
            <a
              className="mobile-resume"
              download="PAPANAIDU_PADAKANDLA_Resume.pdf"
              href={portfolio.resume}
              onClick={closeMenu}
            >
              Download resume <ArrowDownToLine size={15} aria-hidden="true" />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
