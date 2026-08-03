import "./sobre-mi.css";

import {
    BriefcaseBusiness,
    FolderCode,
    Code2,
    Rocket,
} from "lucide-react";

import fondoEstrellas from "../../assets/img/backgrounds/fondo-estrellas.svg";
import bordePortal from "../../assets/img/backgrounds/borde_portal_transparente_fino.svg";
import Portal from "../../assets/img/backgrounds/Porta-Sobre-mí.png";

{/* LIMPIAR AL FINALIZAR */}

function SobreMi() {
    const estadisticas = [
        {
            icon: BriefcaseBusiness,
            valor: "0+",
            texto: "AÑOS DE EXPERIENCIA",
            clase: "tarjetas-celestes py-3 text-center",
        },
        {
            icon: FolderCode,
            valor: "0",
            texto: "PROYECTOS",
            clase: "bg-white/0 tarjetas-celestes py-3",
        },
        {
            icon: Code2,
            valor: "0",
            texto: "TECNOLOGIAS DOMINADAS",
            clase: "bg-white/0 tarjetas-celestes py-3",
        },
        {
            icon: Rocket,
            valor: "0",
            texto: "LANZAMIENTOS",
            clase: "bg-white/0 tarjetas-celestes py-3",
        },
    ];

    return (
        <div className="decoracion-seccion  py-10"> {/*Verificar que las secciones tengan el mismo padding */}
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
                <div className="p-10 bg-white/0 flex grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 my-10">

                    {/* Contenedor foto */}

                    {/*Se usa relative y luego absolute para que el marco este dentro de la imagen */}
                    {/* Aplicamos un marco de tipo PNG pero como tuve problemas, lo convertimos en SVG con diseño personalizado */}
                    <div className=" w-full sm:w-full md:w-2/2  my-auto ">
                        <div className="flex justify-center  ">

                            <div className="animacion-flotante-foto  relative flex items-center justify-center size-[140px] sm:size-[170px] md:size-[190px] lg:size-[200px]">

                                {/* Foto */}
                                <img
                                    src="https://avatars.githubusercontent.com/brandonlcc"
                                    alt="Foto de perfil"
                                    className="rounded-full size-[130px] sm:size-[150px] md:size-[180px] lg:size-[200px]"
                                />

                                {/* Marco */}
                                <img
                                    src={bordePortal}
                                    alt="Marco"
                                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none size-[280px] sm:size-[330px] md:size-[380px] lg:size-[450px]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Si quieres agregar algo al cotenendor de texto: flex-col lg:flex-row items-center */}
                    <div className=" ">
                        <div className="w-full ">

                            <div className=" parrafo-sobre-mi w-6/10  pl-5 bg-white/0">
                                <p className="mb-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quos nobis nam quisquam? Perspiciatis doloribus repudiandae
                                    quam. Ratione aspernatur adipisci provident quaerat, harum
                                    dolorum, delectus ab repudiandae impedit eveniet a quae.
                                </p>

                                <p className="mb-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    dolorum, delectus ab repudiandae impedit eveniet a quae.
                                </p>

                                <p>
                                    dolorum, delectus ab repudiandae impedit eveniet a quae.
                                </p>
                            </div>

                            {/* TARJETAS */}

                        </div>


                    </div>
                    
                </div>
                {/* TARJETAS */}
                        <div className=" grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 text-center  
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