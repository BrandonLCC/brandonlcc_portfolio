import './hero-right.css'

function HeroRight() {
  return (
<div className="w-full mx-auto">
<div className="relative w-full h-[450px] flex items-center justify-center">

  {/* Tarjeta de fondo */}
  <div
    className="
      absolute
      w-[70%]
      h-[70%]
      rounded-xl
      border border-white/10
      bg-white/5
      backdrop-blur-sm

      -rotate-2
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

      w-[55%]
      h-auto

      rounded-xl
      object-cover

      rotate-0

      shadow-[20px_20px_40px_rgba(0,0,0,0.45)]

      transition-all
      duration-300

      hover:scale-105
      hover:rotate-0
    "
  />

</div>
</div>
  )
}

export default HeroRight;


