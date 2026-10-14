import { useEffect, useRef, useState } from "react";
import { Sun, Moon, Code, Briefcase } from "lucide-react";

import "./navbar.css";
import logo from "../../assets/img/backgrounds/BRLC-logo.svg";

// Enlaces del menú: se reutilizan en escritorio y en el dropdown móvil
const NAV_LINKS = [
  { id: "inicio", label: "INICIO" },
  { id: "sobreMi", label: "SOBRE MÍ" },
  { id: "proyectos", label: "PROYECTOS" },
  { id: "contacto", label: "CONTACTO" },
  { id: "otros", label: "PROXIMAMENTE" },
];

// Iconos de prueba
const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/BrandonLCC", Icon: Code },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/brandon-luis/", Icon: Briefcase },
];

// Lista de enlaces compartida por el menú de escritorio y el dropdown móvil
function NavLinks({ active }) {
  return (
    <ul className="mx-auto flex flex-col gap-5 md:flex-row md:items-center md:justify-center md:gap-10">
      {NAV_LINKS.map(({ id, label }) => (
        <li key={id}>
          <a href={`#${id}`} className={active === id ? "nav-active" : "nav-link"}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

// Botón del modo "dark y light": con texto en escritorio y solo icono en móvil
function MoodButton({ glimpsesMode, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="mood-button flex items-center justify-center rounded-full p-2 font-mono tracking-[0.12em] transition-colors md:px-3"
    >
      {glimpsesMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      <span className="ml-2 hidden md:inline">{glimpsesMode ? "Light mode" : "Dark mode"}</span>
    </button>
  );
}

// Redes sociales: cursor bloqueado porque todavía no están habilitados
function SocialLinks({ className = "" }) {
  return (
    <div className={`flex items-center ${className}`}>
      {SOCIAL_LINKS.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="nav-social-link"
        >
          <Icon className="nav-social-icon" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

function Navbar() {
  const [active, setActive] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);
  // Estado y referencia del dropdown
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  //boton glimpses
  const [glimpsesMode, setGlimpsesMode] = useState(false);

  // El tema se aplica al body: los estilos usan body.glimpses-mode
  useEffect(() => {
    document.body.classList.toggle("glimpses-mode", glimpsesMode);
  }, [glimpsesMode]);

  // Detectar sección activa
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-80px 0px -40% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Cerrar el dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleGlimpses = () => setGlimpsesMode(!glimpsesMode);

  return (
    <nav className={`navbar flex items-center justify-center w-7/10 z-50 py-2 rounded-full font-mono
                    ${scrolled ? "navbar-scroll" : "navbar-top"}`}>
      {/* -- Logo -- */}
      <a href="#inicio" className="flex items-center ml-8">
        <img
          src={logo}
          alt="Logo"
          className="w-8 h-8 shrink-0"
        />
      </a>

      {/* hidden oculta el menú por defecto y md:flex lo muestra en pantallas medianas o más grandes. */}
      <div className="hidden md:flex items-center justify-between w-full px-6">
        <NavLinks active={active} />

        <div className="flex items-center">
          <MoodButton glimpsesMode={glimpsesMode} onToggle={toggleGlimpses} />
          <SocialLinks className="ml-4 gap-2 border-l border-white/10 pl-4" />
        </div>
      </div>

      {/* -- Dropdown -- */}

      {/* Se usa relative y luego absolute para que el dropdown se posicione correctamente */}
      {/* Con sm:hidden hara que aparezca el Dropdown en pantallas pequeñas */}

      <div className="relative inline-block md:hidden" ref={dropdownRef}>
        <div className="flex items-center gap-5 mx-5">

          {/*-- Botón --*/}
          <button
            onClick={() => setOpen(!open)}
            className="dropdown-toggle inline-flex items-center gap-2 rounded-xl px-4 py-2 transition"
          >Menú
            <svg
              className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
              viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z"
              />
            </svg>
          </button>

          {/* -- Menú -- */}
          {open && (
            <div className="dropdown-menu p-3 absolute mt-13 rounded-xl overflow-hidden z-50">
              <NavLinks active={active} />
            </div>
          )}

          <MoodButton glimpsesMode={glimpsesMode} onToggle={toggleGlimpses} />
          <SocialLinks className="gap-5" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
