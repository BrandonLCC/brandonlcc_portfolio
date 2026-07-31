function ProjectCard({ title, description, image }) {
  return (
    <article className="w-full overflow-hidden border border-cyan-400/20 bg-white/5 backdrop-blur-md" id="proyectos">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-white">{title}</h3>

        <p className="mt-3 text-sm text-cyan-200/80">{description}</p>

        <button className="mt-5 border border-cyan-400/40 px-4 py-2 text-cyan-300 transition hover:bg-cyan-400/15 hover:text-white">
          VER PROYECTO
        </button>
      </div>
    </article>
  );
}

export default ProjectCard;