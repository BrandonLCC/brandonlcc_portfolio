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
      <div className="card  w-full  items-center  rounded-xl">
        <div className=" m-5 rounded-full font-bold">
          <h2>Areas</h2>
        </div>
        <div className=" m-5 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="contenido-card-hijo  p-3  flex flex-row  rounded-xl">
            <Code2 className="diseño-icono rounded-xl mr-5 " size={17} />
            <div className="">
              <h4>DESARROLLO WEB</h4>
              <p className="">ALorem ips conser</p>
              <span></span>
            </div>
          </div>

          <div className="contenido-card-hijo  p-3  flex flex-row  rounded-xl">
            <Code2 className="diseño-icono rounded-xl mr-5 " size={17} />
            <div className="">
              <h4>ML / DP</h4>
              <p className="">Resolviendo de diferentes </p>
              <span></span>
            </div>
          </div>
        </div>
        {/*Fuera del grid */}
          <div className="m-5  contenido-card-hijo p-3 flex flex-row   rounded-xl">
            <Code2 className="diseño-icono rounded-xl  mr-5  " size={17} />
            <div className="">
              <h4>ML/DP</h4>
              <p className="">Diversos modelos de prediccion,rsos modelos de prediccion, Lrsos modelos de prediccion, L Limpieza, Practicas y metodologia Crisp.DM.</p>
              <span></span>
            </div>
          </div>
        {/* FOOTER */}
        <div className="footer-card py-2  rounded-xl   text-center ">
          <h2>ESTUDIANTE INSTITUTO DUOC UC</h2>
          <hr className="mx-auto w-1/2"></hr>
          <a href="">MALLA ACADEMICA </a>
          <a href="">COMPENTENCIA DEL PERFIL</a>
        </div>



      </div>
    </div>
  );
}

export default HeroRight;