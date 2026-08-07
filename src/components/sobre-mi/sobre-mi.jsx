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

import bordePortal from "../../assets/img/backgrounds/marco_minimal_card.svg";
import Portal from "../../assets/img/backgrounds/Porta-Sobre-mí.png";

{/* LIMPIAR AL FINALIZAR */ }

function SobreMi() {
    const estadisticas = [
        {
            icon: BriefcaseBusiness,
            valor: "0+",
            texto: "AÑOS DE EXPERIENCIA",
            clase: "tarjetas py-3 rounded-lg ",
        },
        {
            icon: FolderCode,
            valor: "10",
            texto: "PROYECTOS",
            clase: "tarjetas py-3 rounded-lg",
        },
        {
            icon: Code2,
            valor: "5",
            texto: "TECNOLOGIAS MANEJADAS",

            clase: "tarjetas  py-3 rounded-lg",
        },
        {
            icon: Rocket,
            valor: "1",
            texto: "LANZAMIENTOS",
            clase: "tarjetas  py-3 rounded-lg",
        },
    ];
    return (

        <section id="sobreMi" className="py-20">
            <div className="decoracion-seccion  mx-auto max-w-5xl ">
                {/* Padding interno de la seccion */}
                    {/* div: Controla el div img y el div texto */}
                    {/*Margen entre las dos secciones */}
                    <div className="pb-10   flex grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 my-5">

                        {/* Contenedor foto */}

                        {/*Se usa relative y luego absolute para que el marco este dentro de la imagen */}
                        {/* Aplicamos un marco de tipo PNG pero como tuve problemas, lo convertimos en SVG con diseño personalizado */}
                        <div className=" w-full sm:w-full md:w-2/2  my-auto ">
                            <div className="flex justify-end mr-30 ">

                                <div className="animacion-flotante-foto relative flex items-center justify-center w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] md:w-[180px] md:h-[180px] lg:w-[300px] lg:h-[300px]">

                                    {/* Foto */}
                                    <img
                                        src="https://avatars.githubusercontent.com/brandonlcc"
                                        alt="Foto de perfil"
                                        className="img-sobre-mi rounded-lg w-full h-full object-cover "
                                    />

                                    {/* Marco */}
                                    <img
                                        src={bordePortal}
                                        alt="Marco"
                                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[240%] h-[175%] max-w-none object-contain opacity-30"
                                    />
                                </div>
                            </div>
                        </div>

                        {/*LADO DERECHO*/}
                        {/* Si quieres agregar algo al cotenendor de texto: flex-col lg:flex-row items-center */}
                        <div className="">
                            <div className="flex"> {/**Flex para el titulo */}
                                <p className="subtitle-highlight font-orbitron text-5xl sm:text-5xl md:text-5xl lg:text-5xl">
                                    Sobre

                                </p>
                                <p className="subtitle-primary font-orbitron text-5xl sm:text-5xl md:text-5xl lg:text-5xl">
                                    mí
                                </p>
                            </div>

                            <div className="w-full">

                                <hr className="my-5 w-1/2"></hr>

                                <div className=" parrafo-sobre-mi w-5/10">
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

                                </div>


                                <hr className="my-5 w-1/2"></hr>

                                <div className="flex items-center">
                                    <div className="div-diseño-iconos p-3 mr-2 ">
                                        <Globe className="   " size={25} strokeWidth={2}></Globe>

                                    </div>

                                    <div className=" w-1/5">
                                        <h6>Pais: </h6>
                                        <h6>Chile</h6>

                                    </div>

                                    <div className=" div-diseño-iconos p-3 mr-2 ">
                                        <MapPin className="" size={25} strokeWidth={2} ></MapPin>

                                    </div>

                                    <div className="w-1/5">
                                        <h6>Ciudad:</h6>
                                        <h6>Puerto Montt</h6>

                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                    <div className="seccion-tarjetas mx-auto pb-5   w-8/10  grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4  text-center  
                        ">
                        {estadisticas.map(({ icon: Icon, valor, texto, clase }) => (
                            <div key={texto} className={clase}>
                                {/* Icono */}
                                <div className="flex justify-center">
                                    <div className="div-diseño-iconos p-4 rounded-lg">
                                        <Icon className="color-blue-light" size={40} />
                                    </div>
                                </div>

                                {/* Valor y título */}
                                <div className="text-shadow-1">
                                    <h3 className="text-2xl mt-3 mb-1">
                                        {valor}
                                    </h3>

                                    <p className="titulo-tarjeta subtitle-primary text-center uppercase text-white mx-5">
                                        {texto}
                                    </p>
                                </div>

                                {/* Descripción */}
                                <div className="px-5 ">
                                    <p className="descripcion-tarjeta pt-2 text-center">
                                        facere ratione hic nisi praesentium temporibus amet debitis.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
            </div>
        </section>
    );
}

export default SobreMi;