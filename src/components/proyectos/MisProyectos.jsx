import "./MisProyectos.css";
import ProjectCard from "../card/projectCard";

const proyectos = [

  {
    title: "FIFA Web",
    description: "Proyecto web enfocado en la presentación y despliegue del trabajo de FIFA.",
    tags: ["python", "python", "c"],
    /*        image: "https://opengraph.githubassets.com/1/BrandonLCC/FIFA_web", */

    image: "",
  },
  {
    title: "FIFA ML con Kedro",
    description:
      "Experimento de machine learning con pipelines y flujo de trabajo estructurado.",
    tags: ["python", "python", "c"],
        /*            image: "https://opengraph.githubassets.com/1/BrandonLCC/FIFA_ML_Kedro",
 */

    image: "",
    link: "https://github.com/BrandonLCC/FIFA_ML_Kedro",
  },
  {
    title: "RegistrAPP",
    description:
      "Aplicación enfocada en registro y gestión con una estructura más completa.",
    tags: ["python", "python", "c"],
           /*               image: "https://opengraph.githubassets.com/1/BrandonLCC/RegistrAPP",
 */
    image: "",
    link: "https://github.com/BrandonLCC/RegistrAPP",
  },
];

function MisProyectos() {
  return (
<section
  id="proyectos"
  className="mis-proyectos linea-horizontal w-full mx-auto  "
>

    {/*Para que el titulo no este al lado, elimina flex */}
  <div className=" linea-vertical w-full mx-auto max-w-5xl py-20">

    {/* IZQUIERDA */}
    <div className=" mb-5  mx-auto  text-center ">
      <span>MIS PROYECTOS</span>
      <h2 className="mb-5 subtitle-highlight font-orbitron text-4xl md:text-5xl">
        Proyectos destacados
      </h2>

      <p className="descripcion-titulo">
        adipisicing elit. Doloribus voluptatibus adipisci maxime soluta hic odio
        exercitationem neque voluptatum tenetur
      </p>

      {/* Hacer una animación activa en el diseño de la separacióm. */}
    </div>

    {/* DERECHA */}
   <div className="w-5/6 mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
    {proyectos.map((proyecto, index) => (
      <div
        key={proyecto.title}
        className={index === 0 ? "md:col-span-2 lg:col-span-2" : ""}
      >
        <ProjectCard {...proyecto} />
      </div>
    ))}
  </div>
</div>

  </div>
</section>
  );
}

export default MisProyectos;
