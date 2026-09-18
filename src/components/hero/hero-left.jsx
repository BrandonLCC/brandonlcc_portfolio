import "./hero-left.css";
import Enlace from "../enlace/enlace";

import { Download, MoveRight, Circle } from "lucide-react";

function HeroLeft() {
    return (
        <div className=" w-full   py-10 sm:py-12 lg:py-0">
            {/* Cargo */}
           <div className="flex texto-ing-info mb-3  items-center justify-center md:justify-start">
                <p className="typing text-center  justify-center md:text-left ">
                    &lt;ESTUDIANTE EN INFORMATICA/&gt;
                </p>

            </div>

            {/* Presentación */}
            <p className="texto-presentacion text-center md:text-left mb-2">
                ¡Bienvenido!, yo soy 
            </p>

            {/* Nombre */}
            <div className="text-center md:text-left mb-5">
                <h1 className="diseño-titulo-br font-orbitron text-4xl sm:text-5xl md:text-5xl lg:text-6xl">
                    BRANDON
                </h1>

                <h1 className="diseño-titulo-casas font-orbitron text-4xl sm:text-5xl md:text-5xl lg:text-6xl">
                    CASAS
                </h1>
            </div>

            {/* Disponibilidad */}
            <div className="flex items-center justify-center md:justify-start">
                <div className="diseño-disponibilidad flex items-center gap-2  p-2 mb-5 rounded-xl">
                    <Circle
                        className="shadow-disponibilidad " size={8} fill="currentColor" />

                    <p className="text-center md:text-left">
                        Disponible para oportunidades
                    </p>

                </div>
            </div>

            {/* Descripción */}
            <p className="parrafo-presentacion text-center md:text-left mb-6 max-w-xl">
            Estudiante de Ingeniería en Informática, interesado en el desarrollo de
            software y la tecnología. Busco una oportunidad de{"... "}
            <strong>práctica profesional</strong> para aplicar mis conocimientos y
            adquirir experiencia en el área informática.
            </p>
                    
            

            {/* Tag */}
            <div className="tag-tecnologias flex justify-center md:justify-start gap-5 mb-5">
                <span className="rounded-xl ">Django</span>
                <i className="i-color" />

                <span className="rounded-xl ">Python</span>
                <i className="i-color" />

                <span className="rounded-xl ">ML</span>

                <i className="i-color" />
                <span className="rounded-xl ">APIs</span>
            </div>


            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-5 items-center justify-center md:justify-start ">

                <Enlace variant="primary" href="/cv.pdf" download>
                    <Download className="mr-2" size={17} />
                    <span>
                        DESCARGAR CV
                    </span>
                </Enlace>

                <Enlace
                    variant="secondary" href="#proyectos">
                    <span>
                        VER PROYECTOS
                    </span>

                    <MoveRight className="ml-2" size={17} />
                </Enlace>

            </div>

        </div>
    );
}

export default HeroLeft;