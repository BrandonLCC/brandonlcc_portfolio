import './hero-right.css'

function HeroRight() {
  return (
    <div className="w-full mx-auto">
      <div className="relative w-full h-[450px] flex items-center justify-center">

        {/* Tarjeta de fondo */}

        {/*
        Para efecto traspareencia

         border border-white/10
      bg-white/5
      backdrop-blur-sm
        
        */}
        <div
          className="
      absolute
      w-[65%]
      h-[65%]
      rounded-xl
      border border-white/10
      bg-white/5
      backdrop-blur-sm

      -rotate-0
      translate-x-0
      translate-y-1

      shadow-[25px_25px_60px_rgba(0,0,0,0.35)]
    "
        />

        {/* Imagen */}
        <img
          src="https://avatars.githubusercontent.com/brandonlcc"
          alt="Foto de perfil"
          className="
                    absolute
                    z-10
                    w-[50%]
                    h-auto
                    grayscale

                    rounded-xl
                    object-cover

                    rotate-0
                    transition-all
                    
                    duration-300
                    shadow-[20px_20px_40px_rgba(0,0,0,0.45)]
                    hover:scale-105
                    hover:rotate-0
                  "
        />



      </div>

   {/**     <div className="
      border border-white/10
      shadow-[25px_25px_60px_rgba(0,0,0,0.35)]
      w-[50%]
      mx-auto
    ">

        <div className="flex  items-center justify-center p-4 gap-10 cursor-default">

          Estado: <span className="text-green-400">Activate *</span>

        </div>

      </div>*/}

    

    </div>
  )
}

export default HeroRight;


