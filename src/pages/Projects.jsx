import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  
  return (
    
    <div className="main-container min-h-screen py-4 sm:py-6 md:py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
      
        {/* navegabilidad */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 mb-4 sm:mb-6 transition-colors text-sm sm:text-base"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al inicio
          </Link>
          
          {/* Titulo */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-3 sm:mb-4">
            Mis Proyectos
          </h1>
          
          {/* Descripcion */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-4xl leading-relaxed">
            Esta es una colección de proyectos que he desarrollado utilizando diferentes
            tecnologías y enfoques para consolidar conocimientos y mostrar mis habilidades.
          </p>
        </div>

        {/* Grilla de proyectos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;