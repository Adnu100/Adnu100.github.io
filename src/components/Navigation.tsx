import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = [
  ["About", "about"],
  ["Expertise", "expertise"],
  ["Experience", "history"],
  ["Research", "research"],
  ["Education", "education"],
  ["Projects", "projects"],
];

function Navigation({ parentToChild, modeChange }: any) {
  const { mode } = parentToChild;

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      let current = navItems[0][1];
      navItems.forEach(([, id]) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) {
          current = id;
        }
      });
      setActive(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    setMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  const modeButton = (
    <button
      className="icon-btn"
      aria-label="Toggle light and dark mode"
      onClick={() => modeChange()}
    >
      {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </button>
  );

  return (
    <>
      <nav className={`navigation-bar${scrolled ? " scrolled" : ""}`}>
        <button className="nav-brand" onClick={() => scrollToSection("about")}>
          Adnesh<span>.</span>
        </button>
        <div className="nav-links">
          {navItems.map(([label, id]) => (
            <button
              key={id}
              className={`nav-link${active === id ? " active" : ""}`}
              onClick={() => scrollToSection(id)}
            >
              {label}
            </button>
          ))}
          {modeButton}
        </div>
        <div className="mobile-controls">
          <button
            className="icon-btn menu-btn"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon />
          </button>
        </div>
        <div className="progress" style={{ width: `${progress}%` }} />
      </nav>
      {menuOpen && (
        <div className="mobile-menu" onClick={() => setMenuOpen(false)}>
          <div className="panel" onClick={(e) => e.stopPropagation()}>
            <div className="close-row">
              {modeButton}
              <button
                className="icon-btn"
                aria-label="Close menu"
                style={{ marginLeft: 8 }}
                onClick={() => setMenuOpen(false)}
              >
                <CloseIcon />
              </button>
            </div>
            {navItems.map(([label, id]) => (
              <button
                key={id}
                className={`nav-link${active === id ? " active" : ""}`}
                onClick={() => scrollToSection(id)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Navigation;
