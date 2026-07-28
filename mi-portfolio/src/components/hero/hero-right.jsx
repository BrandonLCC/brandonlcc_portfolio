import './hero-right.css'

function HeroRight() {
    return (
        <div >

        <div className="w-10/10  borde-tarjeta  rounded-xl overflow-hidden">

          <div className="flex items-center justify-between px-4 py-3 bg-black/30">
  <p className="text-white">Con ganas de triunfar</p>

  <div className="flex gap-2">
    <span className="w-3 h-3 rounded-full bg-red-500"></span>
    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
    <span className="w-3 h-3 rounded-full bg-green-500"></span>
  </div>
</div>

            {/* código */}
            <pre className="borde-tarjeta-codigo   m-5 p-5 text-cyan-300">
                
                {`const developer = {
                name: "Brandon",
                role: "Frontend Developer",
                name: "Brandon",
                role: "Frontend Developer",
                name: "Brandon",
                role: "Frontend Developer"
                }
                return developer
                `}
                
            </pre>

        </div>
                </div>

    )
}

export default HeroRight;


