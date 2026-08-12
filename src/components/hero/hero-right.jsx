import "./hero-right.css";

import {
  Code2,
  Database,
  BrainCircuit,
  ArrowUpRight
} from "lucide-react";

function HeroRight() {
  return (
    <div className="w-90 items-center  items-center  m-auto ">
      <div className="card  w-full  items-center  rounded-xl">
        <div className=" m-5 rounded-xl">
          <h2>Lo que hago</h2>

        </div>
        <div className="m-5 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="flex flex-row  rounded-xl">
            <Code2 className="diseño-icono rounded-xl mr-5 " size={17} />

            <div className="contenido-card-hijo ">
              <h4>DESARROLLO WEB</h4>
              <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span></span>
            </div>

          </div>

                  <div className="flex flex-row   rounded-xl">
            <Code2 className="diseño-icono rounded-xl  mr-5  " size={17} />

            <div className="contenido-card-hijo ">
              <h4>DESARROLLO WEB</h4>
              <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span></span>
            </div>

          </div>

        <div className="flex flex-row   rounded-xl">
            <Code2 className="diseño-icono rounded-xl  mr-5  " size={17} />

            <div className="contenido-card-hijo ">
              <h4>DESARROLLO WEB</h4>
              <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span></span>
            </div>

          </div>

        <div className="flex flex-row  rounded-xl">
            <Code2 className="diseño-icono rounded-xl  mr-5  " size={17} />

            <div className="contenido-card-hijo ">
              <h4>DESARROLLO WEB</h4>
              <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span></span>
            </div>

          </div>


       
        </div>
        {/* FOOTER */}
        <div className="footer-card py-2    text-center ">
          <h2>ESTUDIANTE INSTITUTO DUOC UC</h2>
          <a href="">MALLA ACADEMICA </a>
          <a href="">COMPENTENCIA DEL PERFIL</a>
        </div>



      </div>
    </div>
  );
}

export default HeroRight;