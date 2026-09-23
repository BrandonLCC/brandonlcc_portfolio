import "./hero-left.css";
import Enlace from "../enlace/enlace";

import { Download, MoveRight, Circle } from "lucide-react";

function HeroLeft() {
    return (
        <div className=" w-full  mx-auto  py-10 sm:py-12 lg:py-0">
            {/* Cargo */}
           <div className="flex texto-ing-info mb-3  items-center justify-center md:justify-start">
                <p className="typing text-center  justify-center md:text-left ">
                    &lt;ESTUDIANTE EN INFORMATICA/&gt;
                </p>

            </div>

            {/* Presentación */}
            <p className="texto-presentacion text-center md:text-left">
                ¡Bienvenido! yo soy 
            </p>


            {/* Nombre */}
            <div className="text-center md:text-left my-3">
                <h1 className="font-display text-display font-bold">
                    BRANDON
                </h1>

                <h1 className="t-casas font-display text-display font-bold">
                    CASAS
                </h1>
            </div>

            {/* Disponibilidad */}
            <div className="flex items-center justify-center md:justify-start mb-5">
                <div className="diseño-disponibilidad flex items-center gap-2  p-2  rounded-xl">
                    <Circle
                        className="shadow-disponibilidad " size={8} fill="currentColor" />

                    <p className="text-center md:text-left">
                        Disponible para oportunidades
                    </p>

                </div>
            </div>

            {/* Descripción */}
            <p className="parrafo-presentacion text-body text-center sm:text-center md:text-start max-w-xl mx-auto p-2 md:mx-0">
            Interesado en el desarrollo de
            software y la tecnología. En busqueda de una{" "}
            <strong className="underline primary-text decoration-2 decoration-(--primary-text)/50">práctica profesional</strong> con la cual pueda adaptarme, aplicar mis conocimientos y
            adquirir experiencia en el área informática.
            </p>

            {/* Tag */}
            <div className="tag-tecnologias  font-mono text-label flex flex-wrap justify-center md:justify-start gap-2 mt-5 mb-10">
             {/*flex-wrap: Hacer que las etiquetas pasen a una nueva linea cuando no quede espacio */}
             <span className="rounded-xl ">Python / Django</span>
    <span className="rounded-xl ">React</span>
    <span className="rounded-xl">Tailwind CSS</span>
    <span className="rounded-xl">Bootstrap</span>
    <span className="rounded-xl">SQL / PL/SQL</span>
    <span className="rounded-xl">Machine Learning</span>
    <span className="rounded-xl">Deep Learning</span>
            </div>


            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-5 items-center justify-center md:justify-start mt-5">

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
