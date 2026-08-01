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
        <div className=" decoracion-seccion p-10">
            <div className="my-5 mx-auto max-w-6xl bg-white/0">
                {/* Este div agrupa los otros div y crea el margen similar al HERO*/}
                <div className="flex">
                    <p className=" mr-2 text-4xl sm:text-5xl md:text-6xl lg:text-6xl">
                        Sobre
                    </p>

                    <p className=" text-4xl sm:text-5xl md:text-6xl lg:text-6xl">
                        mí
                    </p>
                </div>

                {/* ¿Como hice para centrar los div cuando tienen su margen? */}
                <div className="items-center mt-5 flex flex-col lg:flex-row">
                    <div className="w-full lg:w-4/6">
                        <div className="pl-5  bg-white/0 parrafo-sobre-mi">
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
                        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 text-center ">
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

                    {/*Se usa relative y luego absolute para que el marco este dentro de la imagen */}
                    {/* Aplicamos un marco de tipo PNG pero como tuve problemas, lo convertimos en SVG con diseño personalizado */}
                    <div className="relative w-full mt-8 sm:mt-10 md:w-1/2 lg:order-2 lg:ml-auto lg:mt-0 lg:py-20">
                        <div className="flex justify-center items-center py-4 sm:py-6">

                            {/* Contenedor foto */}
                            <div className="animacion-flotante-foto relative flex items-center justify-center size-[140px] sm:size-[170px] md:size-[190px] lg:size-[200px]">

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
                </div>
            </div>
        </div>
    );
}

export default SobreMi;