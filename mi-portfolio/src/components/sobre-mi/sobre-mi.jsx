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
import Portalglow from "../../assets/img/backgrounds/Portal-Sobre-mí-glow.png";

function SobreMi() {
    const estadisticas = [
        {
            icon: BriefcaseBusiness,
            valor: "2+",
            texto: "AÑOS DE EXPERIENCIA",
            clase: "tarjetas-celestes py-3 text-center",
        },
        {
            icon: FolderCode,
            valor: "5",
            texto: "PROYECTOS",
            clase: "bg-white/0 tarjetas-celestes py-3",
        },
        {
            icon: Code2,
            valor: "1",
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
        <div
            className="min-h-screen decoracion-seccion p-10"
        >
            <div className="my-5 mx-auto max-w-6xl   ">
                {/* Este div agrupa los otros div y crea el margen similar al HERO*/}
                <div className="flex">
                    <p className="subtitle-primary mr-2 text-4xl sm:text-5xl md:text-6xl lg:text-6xl">
                        Sobre
                    </p>

                    <p className="subtitle-highlight text-4xl sm:text-5xl md:text-6xl lg:text-6xl">
                        mí
                    </p>
                </div>

                {/* ¿Como hice para centrar los div cuando tienen su margen? */}
                <div className="items-center mt-5 flex flex-col lg:flex-row">
                    <div className="w-full lg:w-4/6">
                        <div className="pl-5 sobre-mi-border-top bg-white/0 parrafo-sobre-mi">
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
                                            <Icon className="text-5xl" size={50} />
                                        </div>
                                        <div className="text-shadow-1 py-2">
                                            <h3 className="text-4xl text-white font-bold">{valor}</h3>

                                            <div className="py-3">
                                                <p className="uppercase text-white tracking-wider">
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
                            <div
                                className="animacion-flotante-foto relative flex items-center justify-center
                        w-[140px] h-[140px]
                        sm:w-[170px] sm:h-[170px]
                        md:w-[190px] md:h-[190px]
                        lg:w-[200px] lg:h-[200px]"
                            >
                                {/* Foto */}
                                <img
                                    src="https://avatars.githubusercontent.com/brandonlcc"
                                    alt="Foto de perfil"
                                    className="
                    w-[130px] h-[130px]
                    sm:w-[150px] sm:h-[150px]
                    md:w-[180px] md:h-[180px]
                    lg:w-[200px] lg:h-[200px]
                    rounded-full
                "
                                />

                                {/* Marco */}
                                <img
                                    src={bordePortal}
                                    alt="Marco"
                                    className="
                    absolute
                    left-1/2
                    top-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    w-[280px] h-[280px]
                    sm:w-[330px] sm:h-[330px]
                    md:w-[380px] md:h-[380px]
                    lg:w-[450px] lg:h-[450px]
                    max-w-none
                "
                                />
                            </div>

                            {/* Portales */}
                            <div className="bg-white/0">
                                {/* 
            <img
                src={Portal}
                alt="Portal"
                className="
                    animacion-flotante
                    absolute
                    left-1/2
                    top-1/2
                    -translate-x-1/2
                    -translate-y-5/20
                    w-[180px] h-[180px]
                    sm:w-[220px] sm:h-[220px]
                    md:w-[260px] md:h-[260px]
                    lg:w-[300px] lg:h-[300px]
                    max-w-none
                    opacity-90
                "
            />*/}

                                {/* Glow */}
                                {/*   <img
                src={Portalglow}
                alt="Glow"
                className="
                    animacion-flotante
                    absolute
                    left-1/2
                    top-1/2
                    -translate-x-1/2
                    -translate-y-5/20
                    w-[90px] h-[90px]
                    sm:w-[110px] sm:h-[110px]
                    md:w-[130px] md:h-[130px]
                    lg:w-[150px] lg:h-[150px]
                    max-w-none
                    opacity-90
                "
            />
            */}
                            </div>
                        </div>
                    </div>

                    {/* DIV seccion pequeña al final dividido en dos */}

                    {/*
            </div>
            <div className="flex flex-row mt-5">
                <div className="tarjetas-celestes  w-2/6 p-5  text-white rounded-xl">
                    <h3 className="color-text-etiqueta">¿Qué me motiva?</h3>
                    <div>
                        <p className="pt-5">Me motiva la resolucion de problemas.. Lorem ipsum dolor sit amet </p>
                    </div> 

                </div>
                <div className="tarjetas-celestes mx-5 w-2/6 p-5  text-white rounded-xl">
                    <h3 className="color-text-etiqueta">Fuera de código</h3>

                    <ul className="p-5">
                        <li>- Me gustan los videojuegos</li>
                        <li>- Me gusta escuchar música</li>
                        <li>- Disfruto aprender nuevas tecnologías</li>
                    </ul>
                </div>*/}
                </div>
            </div>
        </div>
    );
}

export default SobreMi;