function Navbar() {
  return (
    <nav className="mt-5 w-fit mx-auto p-[0.9px] gradient-border rounded-xl">
      
      <div className=" items-center px-6 py-3 bg-fondo-pagina rounded-[11px]">

        {/* Logo */}
       {/* <div className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Logo"
            className="w-10"
          />
        </div>*/}


        {/* Botón móvil */}
        <button 
          className="ml-auto sm:hidden text-white text-2xl"
        >
          ☰
        </button>


        {/* Menú */}
        <div className="hidden sm:flex mx-auto">
          <ul className="flex items-center  grid-cols-5 gap-8 ">

            <li>
              <a 
                href="#inicio"
                className="text-white hover:text-cyan-400 transition-colors duration-300"
              >
                INICIO 
              </a>
            </li>

             <li>
              <a 
                href="#proyectos"
                className="text-white hover:text-cyan-400 transition-colors duration-300"
              >
                HABILIDADES
              </a>
            </li>

            <li>
              <a 
                href="#proyectos"
                className="text-white hover:text-cyan-400 transition-colors duration-300"
              >
                PROYECTOS
              </a>
            </li>

            <li>
              <a 
                href="#contacto"
                className="text-white hover:text-cyan-400 transition-colors duration-300"
              >
                CONTACTO
              </a>
            </li>

            <li>
              <a 
                href="#otros"
                className="text-white hover:text-cyan-400 transition-colors duration-300"
              >
                EXPERIENCIA
              </a>
            </li>

            

          </ul>
        </div>

      </div>

    </nav>

    
  );
}

export default Navbar;