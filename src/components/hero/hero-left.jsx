import "./hero-left.css";
import Enlace from "../enlace/enlace";

{/* Iconos */ }
import { Download } from 'lucide-react';
import { MoveRight } from 'lucide-react';



function HeroLeft() {
    return (
        /* Para elementos grandes, my-10 aprox, para elemenos normales my-5 */
        <div className=" w-1/2">
            <div className=" flex flex-col">
                <p className="typing color-text-etiqueta  mb-2 text-sm">&lt;INGENIERO INFORMÁTICO/&gt;</p>

                <h5 className="texto-saludo text-2xl text-white font-orbitron">
                    Hola, yo soy
                </h5>

                {/*Achicar el tamaño de la letra para evitar problemas*/}
                <h1 className="diseño-titulo-br  font-orbitron text-5xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl">
                    BRANDON
                </h1>

                {/*Achicar el tamaño de la letra para evitar problemas*/}
                <h1 className="diseño-titulo-casas  font-orbitron text-5xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl">
                    CASAS
                </h1>
            </div>

            <div className="w-fit  my-5  p-[0.9px]  rounded-xl ">
                <div className=" py-1 rounded-xl">
                    <p className="pl-2 px-2 text-white  text-lg text-left sm:text-left md:text-left lg:text-center">
                        APASIONADO CON LA TECNOLOGIA
                    </p>
                </div>

            </div>
            <p className="parrafo-presentacion w-2/2  ">
                facere ratione hic nisi praesentium temporibus amet debitis a qui sapiente repellat non quo, dolor cumque
                .</p>
            {/* Botón de descarga de CV */}
            {/* El w-fit se ajusta al contenido */}

            <div className="w-fit mt-10  flex gap-4">
                <Enlace
                    variant="primary"
                    href="/cv.pdf"
                    download
                >
                    <Download className="mr-2" size={17} strokeWidth={2} />
                    <span>DESCARGAR CV</span>
                </Enlace>

                <Enlace
                    variant="secondary"
                    href="#proyectos"
                >
                    <span>VER PROYECTOS</span>
                    <MoveRight className="ml-2" size={17} strokeWidth={2} />
                </Enlace>
            </div>
        </div>
    );
}

export default HeroLeft;