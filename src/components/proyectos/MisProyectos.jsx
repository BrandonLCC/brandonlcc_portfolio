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
  className="mis-proyectos my-10 w-full max-w-9xl mx-auto py-20"
>

    {/*Para que el titulo no este al lado, elimina flex */}
  <div className=" w-full mx-auto gap-10 max-w-5xl ">

    {/* IZQUIERDA */}
    <div className="text-center  py-5">
      <span>MIS PROYECTOS</span>

      <h2 className="subtitle-highlight font-orbitron text-5xl">
        Proyectos destacados
      </h2>

      <p className="descripcion-titulo mt-5">
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
