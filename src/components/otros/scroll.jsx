import { useEffect, useState } from "react";
import './otros.css'

/* Icono */
import { ChevronDown } from "lucide-react";
import { Mouse } from 'lucide-react';


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

        <div className="linea-vertical linea-horizontal mx-auto   max-w-6xl ">
            <div
                className={` animacion-scroll transition-all duration-300 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
            >
                <span className="flex flex-col  items-center text-highlight-accent text-sm color-text-etiqueta">
                    <Mouse size={30} />
                    Desliza
                    <ChevronDown className="color-flecha" size={20}/>
                </span>
            </div>
        </div>
    )
}

export default Scroll;

