const ProjectCard = ({ project }) => {
  const { title, description, technologies, image, githubUrl1, githubUrl2, category } = project;

  return (
    <div
      className="
        bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 dark:border-slate-600/30 overflow-hidden
        transition-all duration-300 hover:shadow-xl hover:-translate-y-1
        group flex flex-col h-full
      "
    >

      {/* imagen del proyecto */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover"
        />

        <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300">
          {category}
        </div>
      </div>

      {/* Contenido del proyecto */}
      <div className="p-6 flex flex-col h-full">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>

          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
            {description}
          </p>

          {/* Technologies */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Enlaces del proyecto */}
        <div className="flex gap-3 flex-wrap mt-auto pt-4">
          {githubUrl1 && (
            <a
              href={githubUrl1}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              {githubUrl2 ? 'Frontend' : 'GitHub'}
            </a>
          )}

          {githubUrl2 && (
            <a
              href={githubUrl2}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Backend
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
