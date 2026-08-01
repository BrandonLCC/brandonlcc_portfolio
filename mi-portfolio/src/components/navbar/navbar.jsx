// Se agrega useRef para el dropdown
import { useEffect, useState, useRef } from "react";
import "./navbar.css";

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
        fixed flex justify-center py-4 left-1/2 -translate-x-1/2 z-50 w-full p-[1px]
        shadow-navbar gradient-navbar navbar 
        ${scrolled ? "navbar-scroll" : "navbar-top"}`}>

      <div className="hidden sm:flex justify-center w-full">
        <ul className="flex items-center justify-center gap-15 px-10 mx-auto">

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

      </div>

      {/* Dropdown */}
      {/* Con sm:hidden hara que aparezca el Dropdown en pantallas pequeñas */}
        <div className="relative inline-block sm:hidden" ref={dropdownRef}>
          {/* Botón */}
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition"
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
            <div className="absolute  right-0 mt-2 w-56 rounded-lg bg-[#1b1b2b] border border-white/10 shadow-lg overflow-hidden z-50">
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
            </div>
          )}
        </div>
    </nav>

  );
}

export default Navbar;