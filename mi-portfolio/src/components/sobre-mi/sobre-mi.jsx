import "./sobre-mi.css";

import {
    BriefcaseBusiness,
    FolderCode,
    Code2,
    Rocket,
} from "lucide-react";

import bordePortal from "../../assets/img/backgrounds/borde_portal_transparente_fino.svg";
import Portal from "../../assets/img/backgrounds/Porta-Sobre-mí.png";
import Portalglow from "../../assets/img/backgrounds/Portal-Sobre-mí-glow.png";

function SobreMi() {
    return (

        <div className="fondo-svg  decoracion-seccion p-10  min-h-screen">

            <div className=" bg-white/0  flex ">
                <p className="subtitle-cyan  mr-2 text-4xl sm:text-5xl md:text-6xl lg:text-6xl ">
                    Sobre
                </p>

                <p className="subtitle-purple  text-4xl sm:text-5xl md:text-6xl lg:text-6xl ">
                    mí
                </p>

            </div>
            {/* Dividir entre "SOBRE MÍ" */}
            <div className="flex mb-6 mt-6">
                <span className="w-15 pt-0.0 h-px fondo-cyann shadow-[0_0_10px_#063ef5b3]"></span>
                <span className="w-10 pt-0.0 h-px fondo-purplee shadow-[0_0_10px_#8000ffb3]"></span>
            </div>

            <div className="flex flex-row">

                <div className="bg-white/0 w-4/6 ">
                    <div className="pl-5 sobre-mi-border-top bg-white/0 parrafo-sobre-mi  ">

                        <p className="mb-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quos nobis nam quisquam? Perspiciatis doloribus repudiandae
                            quam. Ratione aspernatur adipisci provident quaerat, harum
                            dolorum, delectus ab repudiandae impedit eveniet a quae.

                        </p>

                        <p className=" mb-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            dolorum, delectus ab repudiandae impedit eveniet a quae.

                        </p>

                        <p>
                            dolorum, delectus ab repudiandae impedit eveniet a quae.

                        </p>
                    </div>

                    {/* TARJETAS */}

                    <div class=" text-center flex flex-row grid gap-5 grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-4  mt-5 " >
                        <div className=" tarjetas-celestes py-3 text-center ">
                            <div className="fondo-svg">


                                {/* pegado */}
                                <div className="text-shadow-1 py-2 flex justify-center">
                                    <BriefcaseBusiness className="text-5xl  " size={50} />
                                </div>
                                <div className="text-shadow-1 py-2">
                                    <h3 className="text-4xl text-white font-bold">2+</h3>


                                    <div className="py-5">
                                        <p className=" uppercase  text-white tracking-wider">
                                            AÑOS DE EXPERIENCIA
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white/0 tarjetas-celestes py-3">
                            <div className="text-shadow-1 py-2 flex justify-center">
                                <FolderCode className="text-5xl " size={50} />
                            </div>

                            <div className="text-shadow-1 py-2">
                                <h3 className="text-4xl font-bold text-white">5</h3>
                            </div>
                            <div className="py-5 ">
                                <p className="text-white ">PROYECTOS</p>

                            </div>
                        </div>

                        <div class="bg-white/0 tarjetas-celestes py-3">
                            <div className="text-shadow-1 py-2 flex justify-center">
                                <Code2 className="text-5xl shadow-index" size={50} />
                            </div>
                            <div className="text-shadow-1 py-2">
                                <h3 className="text-4xl font-bold text-white">1</h3>
                            </div>
                            <div className="py-5 ">
                                <p className="text-white">TECNOLOGIAS DOMINADAS</p>

                            </div>
                        </div>
                        <div class="bg-white/0 tarjetas-celestes py-3">
                            <div className="text-shadow-1 py-2 flex justify-center">
                                <Rocket className="text-8xl shadow-index" size={50} />
                            </div>
                            <div className="text-shadow-1 py-2">
                                <h3 className="text-4xl font-bold text-white">0</h3>
                            </div>
                            <div className="py-5 ">
                                <p className="text-white">LANZAMIENTOS</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Se usa relative y luego absolute para que el marco este dentro de la imagen */}
                {/* Aplicamos un marco de tipo PNG pero como tuve problemas, lo convertimos en SVG con diseño personalizado */}

                <div className="bg-white/0 w-3/6 relative ">
                    <div className="flex justify-center">
                        <div className="animacion-flotante-foto relative absolute flex items-center justify-center w-[200px] h-[200px]">
                            {/* Foto */}
                            <img
                                src="https://avatars.githubusercontent.com/brandonlcc" alt="Foto de perfil" className="w-[180px] h-[180px] rounded-full" />
                            {/* Marco */}
                            <img
                                src={bordePortal} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] max-w-none" alt="Marco" />

                        </div>

                        <div className="bg-white/0">
                            <div>
                                <img
                                    src={Portal}
                                    className="animacion-flotante absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-5/20 w-[300px] h-[300px] max-w-none"
                                    alt="Portal"
                                />

                                <img
                                    src={Portal}
                                    className="animacion-flotante absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-5/20 w-[300px] h-[300px] max-w-none"
                                    alt="Portal"
                                />


                            </div>

                            <div>
                                <img
                                    src={Portalglow}
                                    className="animacion-flotante   absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-5/20 w-[150px] h-[150px] max-w-none opacity-85"
                                    alt="Marco"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* DIV seccion pequeña al final dividido en dos */}



            </div>
            <div className="flex flex-row mt-5">
                <div className="bg-white/10 w-2/6 text-white">
                    <h3 className="color-text-etiqueta">¿Qué me motiva?</h3>
                    <div>
                        <p>Me motiva la resolucion de problemas.. Lorem ipsum dolor sit amet </p>
                    </div>

                </div>
                <div className="mx-5 bg-white/10 w-2/6 text-white">
                    <h3 className="color-text-etiqueta">Fuera de código</h3>

                    <ul className="">
                        <li>- Me gustan los videojuegos</li>
                        <li>- Me gusta escuchar música</li>
                        <li>- Disfruto aprender nuevas tecnologías</li>
                    </ul>
                </div>
            </div>
        </div>


    )

}

export default SobreMi;