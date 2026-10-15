import "./MisProyectos.css";
import ProjectCard from "../card/projectCard";

const proyectos = [

  {
    etiqueta: "Repositorio",
    title: "FIFA ML con Kedro",
        link: "https://github.com/BrandonLCC/FIFA_ML_Kedro",

    description: "Aprendiendo a utilizar el framework Kedro y aplicando los diferentes pipelines de modelos supervisados y no supervisados",
    tags: ["Kedro","Jupyter", "Python", "Docker", "DVC", "ML"],
    image: "https://opengraph.githubassets.com/1/BrandonLCC/FIFA_ML_Kedro",
  },
  {
    etiqueta: "E-commerce",
    title: "FERREMAS",
    description:
      "Plataforma de e-commerce para una ferretería, desarrollada con Django.",
    tags: ["Django", "Python", "E-commerce"],
    image: "https://opengraph.githubassets.com/1/BrandonLCC/FERREMAS",
    link: "https://github.com/BrandonLCC/FERREMAS",
  },
  {
    etiqueta: "App Mobile",
    title: "RegistrAPP",
    description:
      "Aplicación enfocada en registro y gestión con una estructura más completa.",
    tags: ["IONIC", "QR", "TypeScript"],
    image: "https://opengraph.githubassets.com/1/BrandonLCC/RegistrAPP",
    link: "https://github.com/BrandonLCC/RegistrAPP",
  },
];

function MisProyectos() {
  return (
<section
  id="proyectos"
  className="seccion-mis-proyectos w-full mx-auto linea-horizontal  "
>

    {/*Para que el titulo no este al lado, elimina flex y no tiene px-20 pero se ajusta al margen py-20, verificar*/}
  <div className="  linea-vertical w-full mx-auto max-w-6xl px-5 sd:px-10 md:px-22  py-25">

    {/* IZQUIERDA */}
    <div className=" mb-5  mx-auto  text-center ">
      <span className="font-mono text-primary-text">MIS PROYECTOS</span>
      <h2 className="mb-5 font-mono font-bold text-title">
        Proyectos destacados
      </h2>

      <p className="descripcion-titulo font-display text-body">
        La sección de proyectos se encuentra en desarrllo :)
      </p>

      {/* Hacer una animación activa en el diseño de la separacióm. */}
    </div>

    {/* DERECHA */}
   <div className=" mx-auto">
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
