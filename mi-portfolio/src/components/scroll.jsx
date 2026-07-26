import { useEffect, useState } from "react";


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

        <div className="animacion-scroll    w-full mx-auto text-center">
            
            <div className={`transition-all duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}>
                
           
            <h5 className="color-text-etiqueta text-cyan-400 text-sm">
                Scroll
                ↓
            </h5>
             </div>

        </div>
    )
}

export default Scroll;

