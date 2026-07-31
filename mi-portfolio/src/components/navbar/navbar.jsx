import { useEffect, useState } from "react";
import "./navbar.css";


function Navbar() {
  const [active, setActive] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);

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

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 90);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed py-4 left-1/2 -translate-x-1/2 z-50
        w-full  p-[1px]
        shadow-navbar gradient-navbar navbar 
        ${scrolled ? "navbar-scroll" : "navbar-top"}
      `}
    >
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
    </nav>
  );
}

export default Navbar;