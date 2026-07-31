function ProjectCard({ title, description, image, link }) {
  return (
    <article className="w-full overflow-hidden border border-cyan-400/20 bg-white/5 backdrop-blur-md" id="proyectos">
      <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20">
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

        <p className="mt-3 text-sm text-cyan-200/80">{description}</p>

        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-block border border-cyan-400/40 px-4 py-2 text-cyan-300 transition hover:bg-cyan-400/15 hover:text-white"
        >
          VER PROYECTO
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;