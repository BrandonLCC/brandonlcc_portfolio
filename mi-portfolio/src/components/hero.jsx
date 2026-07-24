

function Hero() {
    return (

        <div>
            <div className="flex flex-col">
                <p className="typing color-text-etiqueta text-cyan-400 text-sm">&lt;INGENIERO INFORMÁTICO/&gt;</p>

                <h5 className="texto-saludo text-xl text-white font-medium">
                    ¡HOLA! YO SOY
                </h5>

                {/*Achicar el tamaño de la letra para evitar problemas*/}
                <h1 className="diseño-titulo-br font-orbitron  text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                    BRANDON
                </h1>
                
                {/*Achicar el tamaño de la letra para evitar problemas*/}
                <h1 className="diseño-titulo-casas font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                    CASAS
                </h1>
            </div>

            <div className="w-fit my-5  p-[0.9px] gradient-border-apasionado rounded-xl ">
                <div className="bg-fondo-pagina/100 py-2 rounded-xl">
                    <p className="pl-2 px-2 text-white text-center text-lg">
                        APASIONADO CON LA TECNOLOGÍA
                    </p>
                </div>

            </div>
            <p className="parrafo-presentacion  text-white pl-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque, quod, ducimus rem consequuntur facere ratione hic nisi praesentium temporibus amet debitis a qui sapiente repellat non quo, dolor cumque
                .</p>
            {/* Botón de descarga de CV */}
            {/* El w-fit se ajusta al contenido */}
            <div className=" w-fit  my-5 p-[1px] gradient-border-verde-morado ">
                <div className="bg-fondo-pagina">
                    <a
                        className="block px-6 py-3 text-lg text-white text-center "
                        href="/cv.pdf"
                        download
                    >
                        DESCARGAR CV &gt;
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Hero;