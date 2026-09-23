import "./hero-right.css";

import {
  Code2,
  Database,
  BrainCircuit,
  ArrowUpRight
} from "lucide-react";

function HeroRight() {
  return (
    <div className=" items-center  items-center  m-auto">
      <span className="w-50 h-50 "></span>
      <div className="card  w-full  items-center  rounded-xl">
        <div className="m-5 rounded-full">
          <h2 className="font-mono font-bold">Áreas principales</h2>
        </div>
        {/* <div className=" m-5 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div>
          div con grid
        </div>
        </div> */}
        {/*Fuera del grid */}
          <div className="m-5  contenido-card-hijo p-3 flex flex-row   rounded-xl">
            {/* <Code2 className="diseño-icono rounded-xl  mr-5  " size={17} /> */}
            <div className="">
              <h4 className="font-mono">Desarrollo Web</h4>
              <p className="font-display">
                Conocimientos en fundamentos de programación y desarrollo web,
                trabajando con tecnologías como Django para backend y Tailwind CSS
                para interfaces web, además de consultas y manejo de bases de datos.
              </p>
              <span></span>
            </div>
          </div>
          <div className="m-5  contenido-card-hijo p-3 flex flex-row   rounded-xl">
            {/* <Code2 className="diseño-icono rounded-xl  mr-5  " size={17} /> */}
            <div>
              <h4 className="font-mono">ML/DL
                
              </h4>
              <p className="font-display">
                Experiencia academica en aprendizaje automatico, trabajando con modelos
                de regresión y clasificación, junto con fundamentos de Deep Learning como
                CNNs y Transformers, además de familiaridad con la metodología CRISP-DM.
                </p>
              <span></span>
              
            </div>
          </div>
        {/* FOOTER */}
        <div className=" footer-card py-2 rounded-b-xl  text-center ">
          <h2 className="font-mono ">FORMACIÓN</h2>
            <hr className="mx-auto w-4/5 my-1"></hr>
          <div>
            
          </div>
          <div className="flex flex-row justify-center  gap-2">
            <a
              href=""
              className="inline-flex items-center gap-1 "
            >
              MALLA ACADÉMICA
              <ArrowUpRight size={15} strokeWidth={2} />
            </a>

            <a
              href=""
              className="inline-flex items-center gap-1 "
            >
              COMPETENCIAS DEL PERFIL
              <ArrowUpRight size={15} strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroRight;