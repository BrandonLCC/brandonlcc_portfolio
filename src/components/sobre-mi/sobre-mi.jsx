import "./sobre-mi.css";
import Enlace from "../enlace/enlace";
import {
    BriefcaseBusiness,
    FolderCode,
    Code2,
    Rocket,
    Globe,
    MapPin,
    Container

} from "lucide-react";

import Marco from "../../assets/img/backgrounds/marco_minimal_card.svg";

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
        <section id="sobreMi" className="decoracion-seccion ">
            <div className="linea-vertical mx-auto py-20 px-5   max-w-5xl">
                <div className=" grid  md:grid-cols-2">

                    {/* Titulo */}
                    {/*
                    Snap: hace que el scroll se detenga automáticamente en posiciones específicas.
                    md:col-start-2: Alinea el titulo al lado del texto
                    
                    */}

                    <div className="mb-5 flex col-span-1 md:col-start-2 order-1"> {/**Flex para el titulo */}
                        <p className="subtitle-highlight font-orbitron text-4xl sm:text-5xl md:text-5xl">
                            Sobre
                        </p>
                        <p className="subtitle-primary font-orbitron text-4xl sm:text-5xl md:text-5xl">
                            mí
                        </p>
                    </div>


                    {/* Contenedor foto */}
                    {/*Se usa relative y luego absolute para que el marco este dentro de la imagen */}
                    <div className="py-5  flex justify-center items-center  order-2">
                        <div className="animacion-flotante-foto relative flex items-center justify-center w-[140px] h-[140px] sm:w-[150px] sm:h-[150px] md:w-[220px] md:h-[220px] lg:w-[250px] lg:h-[250px]">
                            {/* Foto */}
                            <img
                                src="https://avatars.githubusercontent.com/brandonlcc"
                                alt="Foto de perfil"
                                className="img-sobre-mi rounded-lg w-full h-full object-cover"
                            />
                            {/* Marco */}
                            <img
                                src={Marco}
                                alt="Marco"
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[240%] h-[175%] max-w-none object-contain opacity-50"
                            />
                        </div>
                    </div>


                    {/*LADO DERECHO*/}
                    {/* Si quieres agregar algo al cotenendor de texto: flex-col lg:flex-row items-center */}
                    <div className="w-full order-3">
                        <div className=" parrafo-sobre-mi   ">
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


                        <hr className="mt-5"></hr>

                        <div className="grid grid-cols-2 gap-6 my-6">

                            {/* País */}
                            <div className="flex items-center gap-3">
                                <div className="div-diseño-iconos p-3 rounded-lg shrink-0">
                                    <Globe size={22} strokeWidth={1.8} />
                                </div>

                                <div className="leading-tight">
                                    <span className="block text-xs uppercase opacity-60">
                                        País
                                    </span>
                                    <span className="block mt-1 font-medium">
                                        Chile
                                    </span>
                                </div>
                            </div>

                            {/* Ciudad */}
                            <div className="flex items-center gap-3">
                                <div className="div-diseño-iconos p-3 rounded-lg shrink-0">
                                    <MapPin size={22} strokeWidth={1.8} />
                                </div>

                                <div className="leading-tight">
                                    <span className="block text-xs uppercase opacity-60">
                                        Ciudad
                                    </span>
                                    <span className="block mt-1 font-medium">
                                        Puerto Montt
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className=" seccion-tarjetas mx-auto mt-5  grid gap-15 grid-cols-1 md:grid-cols-2 lg:grid-cols-4  text-center  
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