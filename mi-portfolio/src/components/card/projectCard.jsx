import "./proyectCard.css";
import Enlace from "../enlace/enlace";
import { useState } from "react";
/* Iconos */
import { EyeClosed } from 'lucide-react'; /* Ojos cerrados */
import { Eye } from 'lucide-react';


function ProjectCard({ title, description, image, link, tags }) {
      const [mostrar, setMostrar] = useState(false);

  return (
    <article
      className="flex flex-col w-full overflow-hidden   bg-white/5 "
      id="proyectos"
    >      <div className="aspect-video w-full overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-white/80">
            {title.charAt(0)}
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        {/* tags */}

        {/* Con flex y flex-wrap nos permite que los tags 
        se ajusten automáticamente al ancho del contenedor */}
        <div className="flex content-end  flex-wrap pt-4 pb-2">
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
              className="bg-white/10 rounded-full px-3 py-1   mr-2 mb-2 "
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-3 ">{description}</p>


        <div className="mt-auto pt-6">
          <Enlace
            variant="secondary"
            href={link}
            className="inline-block transition hover:bg-highlight-hover" 
            onClick={() => setMostrar(!mostrar)}
          >
            VER PROYECTO 
            {mostrar ? (
                <Eye className="ml-2" size={17} strokeWidth={2} />
            ) : (
                <EyeClosed className="ml-2" size={17} strokeWidth={2} />
            )}
       
          </Enlace>

          {/*

          Modificaciónes para alinear el botón al fondo de la tarjeta:
          ¿Por qué estas clases?

          1. article → flex flex-col
            Convierte la tarjeta en un contenedor Flex y organiza
            la imagen y el contenido en una columna.

          2. Contenido → flex flex-col flex-1
            Organiza los elementos verticalmente y hace que el
            contenido ocupe todo el espacio restante de la tarjeta.

          3. Botón → mt-auto
            Utiliza el espacio libre como margen superior,
            empujando el botón hasta la parte inferior.

          Resultado:
          Todas las tarjetas con la misma altura tendrán
          el botón alineado al fondo.

          */}

        </div>

      </div>
    </article>
  );
}

export default ProjectCard;