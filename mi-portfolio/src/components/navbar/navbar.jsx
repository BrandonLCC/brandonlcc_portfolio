// Se agrega useRef para el dropdown
import { useEffect, useState, useRef } from "react";
import "./navbar.css";
import logo from "../../assets/img/backgrounds/BRLC-logo.svg";
function Navbar() {
  const [active, setActive] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);

  // Estado y referencia del dropdown
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

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
      setScrolled(window.scrollY > 90);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    /* 
  fixed           -> Mantiene la navbar fija en la parte superior al hacer scroll.
  flex            -> Convierte el nav en un contenedor flex.
  justify-center  -> Centra horizontalmente los elementos hijos.
  left-1/2        -> Coloca el borde izquierdo del nav en el 50% de la pantalla.
  -translate-x-1/2 -> Desplaza el nav hacia la izquierda el 50% de su propio ancho para centrarlo.
  z-50            -> Coloca la navbar por encima de otros elementos.
  w-full          -> Hace que el nav ocupe todo el ancho.
  p-[1px]         -> Agrega 1 píxel de padding (usado normalmente para bordes con gradiente).
  ${scrolled ? "navbar-scroll" : "navbar-top"} -> Cambia la apariencia según si el usuario ha hecho scroll.
 
  */

    <nav
      className={`
        fixed flex justify-center left-1/2 -translate-x-1/2 z-50 w-5/10  mx-auto rounded-xl mt-5 p-[1px]
          navbar 
        ${scrolled ? "navbar-scroll" : "navbar-top"}`}>

      {/* hidden oculta el menú por defecto y md:flex lo muestra en pantallas medianas o más grandes. */}

      <div className="hidden md:flex items-left justify-between w-full px-6">

        {/* Logo */}
        <a href="#inicio" className="flex items-center">
          <img
            src={logo} 
            alt="Logo"
            className="w-10 h-10"
          />
        </a>

        <ul className="flex items-center justify-center gap-10 mx-auto">

          <li>
            <a
              href="#inicio"
              className={active === "inicio" ? "nav-active" : "nav-link"}
            >
              INICIO
            </a>
          </li>

          <li className="text-center">
            <a
              href="#sobreMi"
              className={active === "sobreMi" ? "nav-active" : "nav-link"}
            >
              SOBRE MÍ
            </a>
          </li>

          <li>
            <a
              href="#proyectos"
              className={active === "proyectos" ? "nav-active" : "nav-link"}
            >
              PROYECTOS
            </a>
          </li>

          <li>
            <a
              href="#contacto"
              className={active === "contacto" ? "nav-active" : "nav-link"}
            >
              CONTACTO
            </a>
          </li>

          <li>
            <a
              href="#otros"
              className={active === "otros" ? "nav-active" : "nav-link"}
            >
              PROXIMAMENTE
            </a>
          </li>

        </ul>

        {/* Redes sociales: No se lograron obtener  los iconos de github y linkedin  por lo que se uso svg con IA*/}

        <div className="ml-4 flex items-center gap-2 border-l border-white/10 pl-4">
          <a
            href="https://github.com/BrandonLCC"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="nav-social-link"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="nav-social-icon" aria-hidden="true">
              <path d="M9 19c-4.3 1.3-4.3-2.5-6-3" />
              <path d="M15 21v-3.2a2.7 2.7 0 0 0-.7-2.1c2.4-.3 4.9-1.2 4.9-5.5a4.3 4.3 0 0 0-1.2-3.1 4 4 0 0 0-.1-3.1s-1-.3-3.2 1.2a11.1 11.1 0 0 0-5.8 0C6.4 2.8 5.4 3.1 5.4 3.1a4 4 0 0 0-.1 3.1 4.3 4.3 0 0 0-1.2 3.1c0 4.3 2.5 5.2 4.9 5.5a2.7 2.7 0 0 0-.7 2.1V21" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/brandonjimenezl/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="nav-social-link"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="nav-social-icon" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <path d="M7 10v6" />
              <path d="M7 7.2v.1" />
              <path d="M12 16v-4.2a2.2 2.2 0 0 1 4.4 0V16" />
              <path d="M12 10v.1" />
            </svg>
          </a>
        </div>

      </div>

      {/* Dropdown */}
      {/* Se usa relative y luego absolute para que el dropdown se posicione correctamente */}
      {/* Con sm:hidden hara que aparezca el Dropdown en pantallas pequeñas */}
      <div className="relative inline-block md:hidden" ref={dropdownRef}>
        {/* Botón */}
        <button
          onClick={() => setOpen(!open)}
          className="diseño-dropdown inline-flex items-center gap-2 rounded-xl  px-4 py-2 text-white hover:bg-white/20 transition"
        >
          Menú

          <svg
            className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""
              }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z"
            />
          </svg>
        </button>

        {/* Menú */}
        {open && (
          <div className="absolute right-0 mt-2 w-56 rounded-lg bg-[#1b1b2b] border border-white/10 shadow-lg overflow-hidden z-50">
            <a
              href="#inicio"
              className="block px-4 py-3 text-white hover:bg-white/10"
            >
              Inicio
            </a>

            <a
              href="#sobreMi"
              className="block px-4 py-3 text-white hover:bg-white/10"
            >
              Sobre mí
            </a>

            <a
              href="#proyectos"
              className="block px-4 py-3 text-white hover:bg-white/10"
            >
              Proyectos
            </a>

            <a
              href="#contacto"
              className="block px-4 py-3 text-white hover:bg-white/10"
            >
              Contacto
            </a>

            <div className="flex items-center justify-start gap-3 border-t border-white/10 px-4 py-3">
              <a
                href="https://github.com/BrandonLCC"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="nav-social-link"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="nav-social-icon" aria-hidden="true">
                  <path d="M9 19c-4.3 1.3-4.3-2.5-6-3" />
                  <path d="M15 21v-3.2a2.7 2.7 0 0 0-.7-2.1c2.4-.3 4.9-1.2 4.9-5.5a4.3 4.3 0 0 0-1.2-3.1 4 4 0 0 0-.1-3.1s-1-.3-3.2 1.2a11.1 11.1 0 0 0-5.8 0C6.4 2.8 5.4 3.1 5.4 3.1a4 4 0 0 0-.1 3.1 4.3 4.3 0 0 0-1.2 3.1c0 4.3 2.5 5.2 4.9 5.5a2.7 2.7 0 0 0-.7 2.1V21" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/brandonjimenezl/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="nav-social-link"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="nav-social-icon" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <path d="M7 10v6" />
                  <path d="M7 7.2v.1" />
                  <path d="M12 16v-4.2a2.2 2.2 0 0 1 4.4 0V16" />
                  <path d="M12 10v.1" />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>

  );
}

export default Navbar;