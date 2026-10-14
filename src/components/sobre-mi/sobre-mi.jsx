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

//import Marco from "../../assets/img/backgrounds/marco_minimal_card.svg";

function SobreMi() {
    const estadisticas = [
        // {
        //     icon: BriefcaseBusiness,
        //     valor: "0+",
        //     texto: "AÑOS DE EXPERIENCIA",
        //     clase: "tarjetas py-3 rounded-xl ",
        // },
        // {
        //     icon: FolderCode,
        //     valor: "10",
        //     texto: "PROYECTOS",
        //     clase: "tarjetas py-3 rounded-xl",
        // },
        // {
        //     icon: Code2,
        //     valor: "5",
        //     texto: "TECNOLOGIAS MANEJADAS",

        //     clase: "tarjetas  py-3 rounded-xl",
        // },
        // {
        //     icon: Rocket,
        //     valor: "1",
        //     texto: "LANZAMIENTOS",
        //     clase: "tarjetas  py-3 rounded-xl",
        // },
    ];
    return (
        <section id="sobreMi" className=" decoracion-seccion ">
            <div className="linea-vertical mx-auto py-25 px-5 sd:px-10 md:px-20 max-w-6xl">
                <div className="gap-5 grid  md:grid-cols-2">

                    {/* Titulo */}
                    {/*
                    Snap: hace que el scroll se detenga automáticamente en posiciones específicas.
                    md:col-start-2: Alinea el titulo al lado del texto
                    
                    */}

                    <div className="mb-5 flex col-span-1 md:col-start-2 order-1"> {/**Flex para el titulo */}
                        <p className="font-mono  font-bold text-title mr-3">
                            Sobre
                        </p>
                        <p className="text-primary-text font-mono font-bold text-title">
                            mí
                        </p>
                    </div>


                    {/* Contenedor foto */}
                    {/*Se usa relative y luego absolute para que el marco este dentro de la imagen */}
                    <div className=" flex justify-center items-center order-2">
                        <div className="animacion-flotante-foto relative flex items-center justify-center w-[150px] h-[150px] sm:w-[150px] sm:h-[150px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]">
                            {/* Foto */}
                            <img
                                src="https://avatars.githubusercontent.com/brandonlcc"
                                alt="Foto de perfil"
                                className="img-sobre-mi rounded-lg w-full h-full object-cover"
                            />
                            {/* Marco */}
                          {/*  <img
                                src={Marco}
                                alt="Marco"
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[240%] h-[175%] max-w-none object-contain opacity-50"
                            />*/}
                        </div>
                    </div>


                    {/*LADO DERECHO*/}
                    {/* Si quieres agregar algo al cotenendor de texto: flex-col lg:flex-row items-center */}
                    <div className="w-full order-3">
<div className="parrafo-sobre-mi font-display text-body">

    {/* Presentación */}
    <p className="mb-3">
        Soy Brandon Casas y curso mi último año de Ingeniería en Informática
        en Duoc UC.
    </p>

    {/* Intereses técnicos */}
    <p className="mb-3">
        Me interesan las bases de datos, especialmente las consultas,
        la gestión de usuarios y permisos. También disfruto desarrollar
        programas que representen desafíos de lógica y me permitan
        explorar distintas soluciones mediante el código.
    </p>

    <details open>
        <summary className="text-white cursor-pointer select-none">
            Conóceme mejor
        </summary>

        {/* Personalidad */}
        <p className="mb-3 mt-3">
            Soy una persona seria y reservada al principio, pero a medida
            que gano confianza, me desenvuelvo con mayor naturalidad y
            muestro mi lado más simpático y cercano.
        </p>

        {/* Gustos personales */}
        <p>
            Disfruto ver y jugar fútbol, compartir tiempo con mi familia y escuchar
            música melancólica o reggeton. También valoro los momentos de tranquilidad
            y los espacios donde puedo desconectarme de todo.
        </p>
    </details>

    <details>
        <summary className="text-white cursor-pointer select-none">
            Mi atención al detalle
        </summary>

        <p className="mt-3">
            A veces, dedico más tiempo del necesario a investigar un tema o tarea
            antes de tomar una decisión. Me gusta comprender los problemas,
            contrastar información y evaluar alternativas. Por eso, busco
            equilibrar la profundidad de mi análisis con una mejor gestión
            del tiempo, reconociendo cuándo tengo información suficiente
            para avanzar.
        </p>
    </details>

    <div className="my-5 flex items-center gap-3">
    <hr className="flex-1 border-white/20" />

    <span className="text-xs uppercase tracking-widest text-white/60">
        Ubicación actual
    </span>

    <hr className="flex-1 border-white/20" />
</div>
</div>


                        <div className="grid grid-cols-2 gap-5 my-6">

                            {/* País */}
                            <div className="flex items-center gap-3">
                                <div className="div-diseño-iconos p-3 rounded-lg shrink-0">
                                    <Globe size={22} strokeWidth={1.8} />
                                </div>

                                <div className="leading-tight">
                                    <span className="block text-label uppercase opacity-60">
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
                                    <span className="block text-label uppercase opacity-60">
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
                <div className="seccion-tarjetas mx-auto mt-5 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4  text-center  
                        ">
                    {estadisticas.map(({ icon: Icon, valor, texto, clase }) => (
                        <div key={texto} className={clase}>
                            {/* Icono */}
                            <div className="flex justify-center">
                                <div className="div-diseño-iconos p-3 rounded-lg">
                                    <Icon className="color-blue-light" size={25} />
                                </div>
                            </div>

                            {/* Valor y título */}
                            <div className="text-shadow-1">
                                <h3 className="text-title mt-2 mb-1">
                                    {valor}
                                </h3>

                                <p className="titulo-tarjeta subtitle-primary text-label text-center uppercase text-white mx-5">
                                    {texto}
                                </p>
                            </div>

                            {/* Descripción */}
                            <div className="px-5 ">
                                <p className="descripcion-tarjeta text-small pt-2 text-center">
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
