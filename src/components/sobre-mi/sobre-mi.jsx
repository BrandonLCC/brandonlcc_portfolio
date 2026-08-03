import "./sobre-mi.css";
import Enlace from "../enlace/enlace";

import {
    BriefcaseBusiness,
    FolderCode,
    Code2,
    Rocket,
    Globe,
    MapPin

} from "lucide-react";


import fondoEstrellas from "../../assets/img/backgrounds/fondo-estrellas.svg";
import bordePortal from "../../assets/img/backgrounds/borde_portal_calidad.svg";
import Portal from "../../assets/img/backgrounds/Porta-Sobre-mí.png";

{/* LIMPIAR AL FINALIZAR */ }

function SobreMi() {
    const estadisticas = [
        {
            icon: BriefcaseBusiness,
            valor: "0+",
            texto: "AÑOS DE EXPERIENCIA",
            clase: "tarjetas py-3 ",
        },
        {
            icon: FolderCode,
            valor: "0",
            texto: "PROYECTOS",
            clase: "tarjetas py-3",
        },
        {
            icon: Code2,
            valor: "0",
            texto: "TECNOLOGIAS DOMINADAS",
            clase: "tarjetas py-3",
        },
        {
            icon: Rocket,
            valor: "0",
            texto: "LANZAMIENTOS",
            clase: "tarjetas py-3",
        },
    ];

    return (
                /* el py- no esta simetrico */

        <div className="decoracion-seccion py-40 "> {/*Verificar que las secciones tengan el mismo padding */}
            {/* Padding interno de la seccion */}
            <div className=" my-5   bg-white/0">


                <div className="flex mx-auto w-1 ">

                    <p className="subtitle-highlight  font-orbitron mr-2 text-5xl sm:text-5xl md:text-5xl lg:text-5xl">
                        Sobre
                    </p>

                    <p className="subtitle-primary font-orbitron text-5xl sm:text-5xl md:text-5xl lg:text-5xl">
                        mí
                    </p>
                </div>

                {/* div: Controla el div img y el div texto */}
                {/*Margen entre las dos secciones */}
                <div className="pb-10 bg-white/0 flex grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 my-5">

                    {/* Contenedor foto */}

                    {/*Se usa relative y luego absolute para que el marco este dentro de la imagen */}
                    {/* Aplicamos un marco de tipo PNG pero como tuve problemas, lo convertimos en SVG con diseño personalizado */}
                    <div className=" w-full sm:w-full md:w-2/2  my-auto ">
                        <div className="flex justify-center  ">

                            <div className="animacion-flotante-foto relative flex items-center justify-center w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] md:w-[180px] md:h-[180px] lg:w-[300px] lg:h-[300px]">

                                {/* Foto */}
                                <img
                                    src="https://avatars.githubusercontent.com/brandonlcc"
                                    alt="Foto de perfil"
                                    className="rounded-full w-full h-full object-cover"
                                />

                                {/* Marco */}
                                <img
                                    src={bordePortal}
                                    alt="Marco"
                                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[240%] h-[175%] max-w-none object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Si quieres agregar algo al cotenendor de texto: flex-col lg:flex-row items-center */}
                    <div className=" flex   ">
                        <div className="w-full  ">

                            <hr className="my-5 w-1/2"></hr>

                            <div className=" parrafo-sobre-mi w-6/10  pl-0 bg-white/0">
                                <p className="mb-3">
                                    Hola, Como ya sabes.
                                </p>

                                <p className="mb-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quos nobis nam quisquam? Perspiciatis doloribus repudiandae
                                    quam. Ratione aspernatur adipisci provident quaerat, harum
                                    dolorum, delectus ab repudiandae impedit eveniet a quae.
                                </p>

                                <p>
                                    dolorum, delectus ab repudiandae impedit eveniet a quae.
                                    dolorum, delectus ab repudiandae impedit eveniet a quae.
                                </p>
                                <Enlace
                                className="mt-5"
                                    variant="primary"
                                    href="/cv.pdf"
                                    download
                                >
                                    <span>Saber más</span>
                                </Enlace>
                            </div>


                            <hr className="my-5 w-1/2"></hr>

                            <div className="flex">
                                <Globe className="mr-2 mt-2" size={24} strokeWidth={2}></Globe>

                                <div className=" w-1/5">
                                    <h6>Pais: </h6>
                                    <h6>Chile</h6>

                                </div>
                                <MapPin className="mr-2 mt-2" size={24} strokeWidth={2} ></MapPin>

                                <div className="w-1/5">
                                    <h6>Ciudad:</h6>
                                    <h6>Puerto Montt</h6>

                                </div>

                            </div>

                            <hr className="my-5 w-1/2"></hr>


                            {/* TARJETAS */}
                            {/* TARJETAS */}


                        </div>


                    </div>

                </div>
                <div className="seccion-tarjetas mx-auto pb-5  w-1/2    grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4  text-center  
                        ">
                    {estadisticas.map(({ icon: Icon, valor, texto, clase }) => (
                        <div key={texto} className={clase}>
                            <div className="fondo-svg">
                                {/* pegado */}
                                <div className="text-shadow-1 py-2 flex justify-center">
                                    <Icon className="" size={40} />
                                </div>
                                <div className="text-shadow-1 py-2">
                                    <h3 className=" text-white font-bold">{valor}</h3>

                                    <div className="py-3">
                                        <p className="uppercase text-white ">
                                            {texto}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default SobreMi;