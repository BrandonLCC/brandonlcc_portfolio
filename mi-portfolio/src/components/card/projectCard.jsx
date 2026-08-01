import "./proyectCard.css";


function ProjectCard({ title, description, image, link, tags }) {
  return (
    <article className="w-full overflow-hidden border border-highlight-subtle bg-white/5 backdrop-blur-md" id="proyectos">
      <div className="aspect-video w-full overflow-hidden gradient-card">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-white/80">
            {title.charAt(0)}
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-white">{title}</h3>

        <p className="mt-3 text-sm text-muted-secondary">{description}</p>

        {/* tags */}

        {/* Con flex y flex-wrap nos permite que los tags 
        se ajusten automáticamente al ancho del contenedor */}
        <div className="flex flex-wrap pt-4 pb-2">
          {/*

¿Qué hace tags.map()?

 desde App.jsx recibimos:

tags = ["React", "Tailwind", "TypeScript"]

1. map() recorre el arreglo elemento por elemento.

   Primera vuelta:
   tag = "React"

   Segunda vuelta:
   tag = "Tailwind"

   Tercera vuelta:
   tag = "TypeScript"

2. En cada vuelta, map() ejecuta la función:

   (tag) => (
      <span>{tag}</span>
   )

3. Como consecuencia, React crea un <span> por cada elemento del arreglo.

   Primera vuelta:
   <span>React</span>

   Segunda vuelta:
   <span>Tailwind</span>

   Tercera vuelta:
   <span>TypeScript</span>

4. Al finalizar, React renderiza:

   <span>React</span>
   <span>Tailwind</span>
   <span>TypeScript</span>

5. ¿Qué significa {tag}?

   {tag} inserta el valor de la variable "tag" dentro del JSX.

   Si tag = "React"

   entonces React renderiza:

   <span>React</span>

6. ¿Para qué sirve key={tag}?

   React necesita una clave única (key) para identificar cada elemento de la lista
   y actualizar solo los que cambien.

   Si los tags fueran:

   ["React", "Tailwind", "TypeScript"]

   las keys serían:

   key="React"
   key="Tailwind"
   key="TypeScript"

   Si pueden repetirse (por ejemplo ["React", "React"]),
   es recomendable usar un id único o, como último recurso, el índice.
*/}
          {tags.map((tag) => (
            <span
              key={tag}
              className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-block border border-highlight-medium px-4 py-2 text-highlight-text transition hover:bg-highlight-hover hover:text-white"
        >
          VER PROYECTO
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;