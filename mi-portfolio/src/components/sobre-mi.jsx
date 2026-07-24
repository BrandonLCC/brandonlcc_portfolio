
function SobreMi() {
    return (
    
    <div className="min-h-screen ">

    {/* Imagen de perfil */}
    {/* para centrar la imagen: flex y justify*/}

    <div className="flex justify-center  py-10">
        <div class="mask-radial-at-center mask-radial-from-100% "></div>
            <img src="https://avatars.githubusercontent.com/brandonlcc" alt="Foto de perfil" className="w-35 h-35 rounded-full shadow-lg shadow-cyan-500/20"/>
    </div>

    {/* para centrar, div y el texto: flex y justify-center*/}
    <div className="flex justify-center">
        <div className="w-5/6 bg-white/10  ">
            <div>
                <p className="text-white pb-2">
                    Hola, me presento
                </p>

                <p className="text-white mb-3">
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
        </div>
    </div>

    </div>
    )

}

export default SobreMi;