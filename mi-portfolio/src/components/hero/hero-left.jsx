import "./hero-left.css";

function HeroLeft() {
    return (
        /* Para elementos grandes, my-10 aprox, para elemenos normales my-5 */
        <div >
            <div className="flex flex-col mt-25">
                <p className="typing color-text-etiqueta text-cyan-400 text-sm">&lt;INGENIERO INFORMÁTICO/&gt;</p>

                <h5 className="texto-saludo text-xl text-white font-medium">
                    ¡HOLA! YO SOY
                </h5>

                {/*Achicar el tamaño de la letra para evitar problemas*/}
                <h1 className="diseño-titulo-br font-orbitron  text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl">
                    BRANDON
                </h1>
                
                {/*Achicar el tamaño de la letra para evitar problemas*/}
                <h1 className="diseño-titulo-casas font-orbitron text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl">
                    CASAS
                </h1>
            </div>

            <div className="w-fit  my-5  p-[0.9px]  rounded-xl ">
                <div className=" py-1 rounded-xl">
                    <p className="pl-2 px-2 text-white text-center text-lg">
                        APASIONADO CON LA TECNOLOGÍA
                    </p>
                </div>

            </div>
            <p className="parrafo-presentacion w-1/2 text-white ">
                 facere ratione hic nisi praesentium temporibus amet debitis a qui sapiente repellat non quo, dolor cumque
                .</p>
            {/* Botón de descarga de CV */}
            {/* El w-fit se ajusta al contenido */}
            <div className="boton-neon w-fit  mt-5  rounded-xl ">
                    <a
                        className="rounded-xl "
                        href="/cv.pdf"
                        download
                    ><span className="rounded-xl">DESCARGAR CV 
                    
                    </span>
                        
                    </a>
            </div>
        </div>
    );
}

export default HeroLeft;