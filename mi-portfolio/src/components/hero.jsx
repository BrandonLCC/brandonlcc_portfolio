function Hero() {
    return (

        <div>
            <div>
                <p className="color-text-etiqueta text-cyan-400 text-sm">&lt;INGENIERO INFORMÁTICO/&gt;</p>

                <h5 className="texto-saludo text-xl text-white font-medium">
                    ¡HOLA! SOY
                </h5>

                {/*Achicar el tamaño de la letra para evitar la sensación de el egocentrismo */}
                <h1 className="diseño-titulo-br font-orbitron text-8xl font-bold">
                    BRANDON
                </h1>
                <h1 className="diseño-titulo-casas font-orbitron text-8xl font-bold">
                    CASAS
                </h1>
            </div>

            <div className="my-5 w-fit bg-gradient-to-r  from-indigo-500 to-cyan-400  p-[1px] bg-indigo-500">
                <div className="bg-fondo-pagina/100 py-2">
                    <p className="pl-2 px-2 text-white text-center text-lg">
                        APASIONADO CON LA TECNOLOGÍA
                    </p>
                </div>

            </div>
            <p className="text-white border-l-2 border-indigo-500 pl-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque, quod, ducimus rem consequuntur facere ratione hic nisi praesentium temporibus amet debitis a qui sapiente repellat non quo, dolor cumque
                .</p>
            {/* Botón de descarga de CV */}
            {/* El w-fit se ajusta al contenido */}
            <div className="my-5 w-fit p-[1px] bg-gradient-to-r from-indigo-500 to-cyan-400">
                <div className="bg-fondo-pagina">
                    <a
                        className="block px-6 py-3 text-lg text-white text-center"
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