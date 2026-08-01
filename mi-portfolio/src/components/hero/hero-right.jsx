import './hero-right.css'

function HeroRight() {
  return (
    <div className="w-full max-w-md mx-auto hero-right-wrapper">
      <div className="w-full borde-tarjeta rounded-[1.75rem] overflow-hidden relative hero-right-card">

        <div className="flex items-center justify-between px-4 py-3 bg-black/30">
          <p className="color-muted">Con ganas de triunfar</p>

          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-[var(--purple)]"></span>
            <span className="w-3 h-3 rounded-full bg-[var(--pink)]"></span>
            <span className="w-3 h-3 rounded-full bg-[var(--cyan)]"></span>
          </div>
        </div>

        <pre className="borde-tarjeta-codigo m-5 p-5 text-cyan-200">
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


