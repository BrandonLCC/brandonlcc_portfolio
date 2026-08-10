import "./hero-right.css";

import {
  Code2,
  Database,
  BrainCircuit,
  ArrowUpRight
} from "lucide-react";

function HeroRight() {
  return (
    <div className="w-full  h-full  ">
      <div className="card  w-full bg-white/3 rounded-xl">
        <div className=" m-5  bg-white/3 rounded-xl">
          <h2>atmospheric chart</h2>

        </div>
        <div className=" m-5  h-50  gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  bg-white/3">
          <div className="flex flex-row w-full  bg-white/5  rounded-xl">
            <Code2 className="bg-white/5 m-2" size={40} />

            <div>
              <h2>DESARROLLO WEB</h2>
              <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            </div>

          </div>

         <div className="flex flex-row w-full  bg-white/5  rounded-xl">
            <Code2 className="bg-white/5 m-2" size={40} />

            <div>
              <h2>DESARROLLO WEB</h2>
              <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            </div>

          </div>

       <div className="flex flex-row w-full  bg-white/5  rounded-xl">
            <Code2 className="bg-white/5 m-2" size={40} />

            <div>
              <h2>DESARROLLO WEB</h2>
              <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            </div>

          </div>

         <div className="flex flex-row w-full  bg-white/5  rounded-xl">
            <Code2 className="bg-white/5 m-2" size={40} />

            <div>
              <h2>DESARROLLO WEB</h2>
              <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            </div>

          </div>
        </div>
        {/* FOOTER */}
        <div className="footer-card w-full   text-center col-end">
          <h2>ESTUDIANTE INSTITUTO DUOC UC </h2>
          <a href="">MALLA ACADEMICA </a>
          <a href="">Competencias del perfil</a>
        </div>



      </div>
    </div>
  );
}

export default HeroRight;