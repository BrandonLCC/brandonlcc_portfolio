import "./hero-left.css";
import Enlace from "../enlace/enlace";

import { Download, MoveRight } from "lucide-react";

function HeroLeft() {
    return (
        <div className="w-full px-6 sm:px-8 lg:px-0 py-10 sm:py-12 lg:py-0">
            {/* Cargo */}
            <div className="flex justify-center md:justify-start">
                <p className="typing text-center justify-center md:text-left mb-4">
                &lt;INGENIERO INFORMÁTICO/&gt;
                </p>
            </div>
            

            {/* Presentación */}
            <p className="text-center md:text-left mb-2">
                Hola, yo soy
            </p>

            {/* Nombre */}
            <div className="text-center md:text-left mb-5">
                <h1 className="diseño-titulo-br font-orbitron text-4xl sm:text-5xl">
                    BRANDON
                </h1>

                <h1 className="diseño-titulo-casas font-orbitron text-4xl sm:text-5xl">
                    CASAS
                </h1>
            </div>

            {/* Especialidad */}
            <div className="mb-5">
                <p className="text-center md:text-left">
                    APASIONADO CON LA TECNOLOGIA
                </p>
            </div>

            {/* Descripción */}
            <p className="
        parrafo-presentacion
        text-center md:text-left
        mb-6
        max-w-xl
      ">
                facere ratione hic nisi praesentium temporibus amet debitis
                a qui sapiente repellat non quo, dolor cumque.
            </p>

            {/* Botones */}
            <div className="
        flex
        flex-col
        sm:flex-row
        gap-5
        items-center
        justify-center
        md:justify-start
      ">

                <Enlace
                    variant="primary"
                    href="/cv.pdf"
                    download
                >
                    <Download
                        className="mr-2"
                        size={17}
                    />

                    <span>
                        DESCARGAR CV
                    </span>
                </Enlace>

                <Enlace
                    variant="secondary"
                    href="#proyectos"
                >
                    <span>
                        VER PROYECTOS
                    </span>

                    <MoveRight
                        className="ml-2"
                        size={17}
                    />
                </Enlace>

            </div>

        </div>
    );
}

export default HeroLeft;