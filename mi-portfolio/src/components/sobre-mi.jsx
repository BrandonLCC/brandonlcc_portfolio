import {
    BriefcaseBusiness,
    FolderCode,
    Code2,
    Rocket,
} from "lucide-react";

function SobreMi() {
    return (

        <div className="decoracion-seccion p-10  min-h-screen">

            <div className=" bg-white/0  flex ">
                <p className="diseño-sub-titulos-azul  mr-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl ">
                    Sobre
                </p>

                <p className="diseño-sub-titulos-morado   text-4xl sm:text-5xl md:text-6xl lg:text-7xl ">
                    mí
                </p>

            </div>
            <div className="flex mb-6 mt-4">
                <span className="w-15 pt-0.5 h-px fondo-personalizado-3 shadow-[0_0_3px_#063ef5b3]"></span>
                <span className="w-10 pt-0.5 h-px fondo-personalizado-2 shadow-[0_0_10px_#8000ffb3]"></span>
            </div>
            <div className="flex flex-row">

                <div className="bg-white/0 w-4/6 ">
                    <div className="sobre-mi-border-top bg-white/0 parrafo-sobre-mi  ">

                        <p className="text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quos nobis nam quisquam? Perspiciatis doloribus repudiandae
                            quam. Ratione aspernatur adipisci provident quaerat, harum
                            dolorum, delectus ab repudiandae impedit eveniet a quae.

                        </p>

                        <p className="text-white mb-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            dolorum, delectus ab repudiandae impedit eveniet a quae.

                        </p>

                        <p className="text-white">
                            dolorum, delectus ab repudiandae impedit eveniet a quae.

                        </p>
                    </div>

                    <div class="text-center flex flex-row grid grid-cols-5  mt-5">
                        <div className="bg-white/0 border-personalizado-1 py-3 text-center">
                            {/* pegado */}
                            <div className="text-shadow-1 py-2 flex justify-center">
                                <BriefcaseBusiness className="text-5xl text-cyan-400" />
                            </div>
                            <div className="text-shadow-1 py-2">
                                <h3 className="text-4xl font-bold text-white">2+</h3>
                            </div>

                            <div className="py-5">
                                <p className="text-white uppercase tracking-wider">
                                    AÑOS DE EXPERIENCIA
                                </p>
                            </div>
                        </div>

                        <div class="bg-white/0 border-personalizado-1 py-3">
                            <div className="text-shadow-1 py-2 flex justify-center">
                                <FolderCode className="text-5xl text-purple-400" />
                            </div>

                            <div className="text-shadow-1 py-2">
                                <h3 className="text-4xl font-bold text-white">5</h3>
                            </div>
                            <div className="py-5 ">
                                <p className="text-white ">PROYECTOS</p>

                            </div>
                        </div>

                        <div class="bg-white/0 border-personalizado-1 py-3">
                            <div className="text-shadow-1 py-2 flex justify-center">
                                <Code2 className="text-5xl text-cyan-400" />
                            </div>
                            <div className="text-shadow-1 py-2">
                                <h3 className="text-4xl font-bold text-white">1</h3>
                            </div>
                            <div className="py-5 ">
                                <p className="text-white">TECNOLOGIAS DOMINADAS</p>

                            </div>
                        </div>
                        <div class="bg-white/0 border-personalizado-1 py-3">
                            <div className="text-shadow-1 py-2 flex justify-center">
                                <Rocket className="text-8xl text-purple-400" />
                            </div>
                            <div className="text-shadow-1 py-2">
                                <h3 className="text-4xl font-bold text-white">0</h3>
                            </div>
                            <div className="py-5 ">
                                <p className="text-white">                LANZAMIENTOS
                                </p>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-3/6"> {/* div para la imagen o carta */}
                    {/* Imagen de perfil */}
                    {/* para centrar la imagen: flex y justify*/}

                    <div className="flex justify-center">
                        <div class="mask-radial-at-center mask-radial-from-100% "></div>
                        <img src="https://avatars.githubusercontent.com/brandonlcc" alt="Foto de perfil" className="w-50 h-50 rounded-full shadow-lg shadow-cyan-500/20" />
                    </div>

                </div>
            </div>
        </div>


    )

}

export default SobreMi;