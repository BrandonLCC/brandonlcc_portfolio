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
      <div className="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tags.map((tag) => `#${tag}`)}</span>
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