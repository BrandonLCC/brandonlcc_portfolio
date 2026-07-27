function ProjectCard({ title, description, image }) {
  return (
    <article className="w-full overflow-hidden border border-indigo-500/30 bg-white/5 backdrop-blur-md">
      
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-3 text-sm text-gray-400">
          {description}
        </p>

        <button className="mt-5 border border-cyan-400 px-4 py-2 text-cyan-400 transition hover:bg-cyan-400 hover:text-black">
          VER PROYECTO
        </button>
      </div>

    </article>
  );
}

export default ProjectCard;