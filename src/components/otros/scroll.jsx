import { useEffect, useState } from "react";
import './otros.css'

/* Icono */
import { ChevronDown } from "lucide-react";


function Scroll() {
    /* 
    Creamos una variable llamada visible,
    El estado en el que se encuenta es = true.



    
    */

    const [visible, setVisible] = useState(true);
    /*
    useEffect "ejecuta" el codigo
 
    el segundo parametro -> [] significa "Ejecuta una sola vez"
 
    */

    useEffect(() => {
        /*
        Cada vez que el usuario mueve la pagina se activa la funcion
        window.scrollY significa: Cuantos pixeles ha bajado el usuario
        */

        const handleScroll = () => {
            setVisible(window.scrollY < 50);
        };

        /*

        Cada vez que el usuario haga scroll, ejecuta handleScroll

        */
        window.addEventListener("scroll", handleScroll);
        /*
        React destruye el componente, elimina ese evento.
        */
        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (

        <div className="font-mono text-label linea-vertical linea-horizontal mx-auto text-center   max-w-6xl mt-5  mb-20">
                               

           <div
                className={`  transition-all duration-300 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
            >
                <p className="text-muted-secundary">Desliza</p>
                <span className="animacion-scroll flex flex-col items-center text-highlight-accent text-label color-text-etiqueta">
                    <ChevronDown className="color-flecha" size={20}/>
                </span>
            </div>
        </div>
    )
}

export default Scroll;

