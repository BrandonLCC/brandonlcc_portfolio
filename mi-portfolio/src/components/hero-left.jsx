
function Heroleft() {
    return (

        <div className="w-9/10  rounded-xl bg-[#0d1117] border border-white/10 shadow-xl overflow-hidden">

            {/* barra superior */}
            <div className="flex gap-2 px-4 py-3 bg-black/30">
                <span className="w-3 h-3 rounded-full bg-red-500"/>
                <span className="w-3 h-3 rounded-full bg-yellow-500"/>
                <span className="w-3 h-3 rounded-full bg-green-500"/>
            </div>

            {/* código */}
            <pre className="p-5 text-cyan-300">
                {`const developer = {
                name: "Brandon",
                role: "Frontend Developer"
                }`}
            </pre>

        </div>
    )
}

export default Heroleft;


