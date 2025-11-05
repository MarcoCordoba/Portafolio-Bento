import React, { useState } from 'react';
import BentoGrid from '../components/BentoGrid/BentoGrid';
import BentoCard from '../components/BentoGrid/BentoCard';
import ContactModal from '../components/ContactModal/ContactModal';
import { aboutMe,} from '../data/projectsData';
import { useDarkMode } from '../contexts/DarkModeContext';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGitAlt, FaDownload } from 'react-icons/fa';
import { SiTailwindcss, SiDjango, SiPostgresql, SiNestjs } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';

const Home = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [modalAbierto, setModalAbierto] = useState(false);

  return (
    <div className="main-container min-h-screen py-8 transition-colors duration-300">
      
      <BentoGrid>
        
        {/* card de presentacion*/}
        <BentoCard
          size="hero"
          className="relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 h-full">
            <div className="flex-1 order-2 sm:order-1">
              <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-blue-600 mb-2 sm:mb-3 leading-tight">
                {aboutMe.name}
              </h1>
              <h2 className="text-base sm:text-lg md:text-xl presentation-title font-semibold mb-2 sm:mb-3">
                {aboutMe.title}
              </h2>
              <p className="presentation-description text-xs sm:text-sm leading-relaxed">
                {aboutMe.description}
              </p>
            </div>
            
            <div className="flex-shrink-0 order-1 sm:order-2 w-full sm:w-auto flex justify-center sm:block">
              <img 
                src={aboutMe.profileImage} 
                alt={aboutMe.name}
                className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-2xl object-cover"
              />
            </div>
          </div>
        </BentoCard>

        {/* Contenedor para Experiencia y CV - Mismo row en móvil */}
        <div className="col-span-1 grid grid-cols-2 gap-3 sm:gap-4 sm:col-span-2 sm:grid-cols-2 row-span-1">
          {/*card de experiencia*/}
          <BentoCard
            size="sm"
            className="flex flex-col items-center justify-center text-center col-span-1 sm:col-span-1"
          >
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-1 sm:mb-2">
              +1
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wider px-1">
              Año de Experiencia
            </div>
          </BentoCard>

          {/*card de cv*/}
          <BentoCard
            size="sm"
            isClickable={true}
            link={aboutMe.resume}
            className="flex flex-col items-center justify-center text-center h-full relative col-span-1 sm:col-span-1"
          >
            <div className="text-sm sm:text-lg md:text-xl lg:text-2xl font-medium text-slate-800 dark:text-slate-200 leading-tight px-2">
              Descargar CV
            </div>
            <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 text-green-600 dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors">
              <FaDownload className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </div>
          </BentoCard>
        </div>

        {/* Contenedor para LinkedIn y Modo Claro/Oscuro - Mismo row en móvil */}
        <div className="col-span-1 grid grid-cols-2 gap-3 sm:gap-4 sm:col-span-2 sm:grid-cols-2 row-span-1">
          {/*card de linkedin*/}
          <BentoCard
            size="sm"
            isClickable={true}
            link={aboutMe.linkedin}
            className="flex items-center justify-center h-full col-span-1 sm:col-span-1"
          >
            <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </BentoCard>

          {/*card de modo claro/oscuro*/}
          <BentoCard
            size="sm"
            className="flex items-center justify-center h-full col-span-1 sm:col-span-1"
          >
            <div className="relative">
              <button 
              onClick={toggleDarkMode}
              className={`w-14 h-7 sm:w-16 sm:h-8 rounded-full p-1 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 ${
                isDarkMode ? 'bg-slate-700' : 'bg-orange-400'
              }`}
              title={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              <div className={`w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full shadow-md transform transition-all duration-300 ease-in-out flex items-center justify-center ${
                isDarkMode ? 'translate-x-7 sm:translate-x-8' : 'translate-x-0'
              }`}>
                {isDarkMode ? (
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                ) : (
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </button>
          </div>
        </BentoCard>
        </div>


        <div className="col-span-1 sm:col-span-2 md:col-span-3 row-span-1">
          
          {/*card de proyectos*/}
          <BentoCard
            size="xl"
            isClickable={true}
            link="/projects"
            className="h-full relative"
          >
            {/* Layout con GIF de fondo hasta los bordes */}
            <div className="absolute inset-0 overflow-hidden">
              {/* GIF de fondo cubriendo completamente */}
              <div className="absolute inset-0 w-full h-full opacity-30">
                <img 
                  src="/images/gifs/gif.coding.gif" 
                  alt="Background projects"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Contenido principal más abajo sin subrayado */}
              <div className="relative z-10 flex items-end h-full p-3 sm:p-4 md:p-6 pb-4 sm:pb-6 md:pb-8">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold projects-title leading-tight">
                    Mira mis proyectos
                  </h3>
                </div>
              </div>
            </div>
            
            {/* Flecha de navegación */}
            <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 projects-arrow">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </BentoCard>
        </div>

       
        {/*card de tecnologias*/}
        <BentoCard
          size="wide"
          className="flex items-center justify-center h-full p-3 sm:p-4"
        >
          <div className="grid grid-cols-2 grid-rows-5 sm:grid-cols-5 sm:grid-rows-2 gap-4 sm:gap-4 w-full max-w-md">
            {/* Tecnologías organizadas para móvil en 2 columnas */}
            <div className="flex items-center justify-center relative">
              <FaHtml5 className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 text-slate-400 dark:text-slate-500 hover:text-slate-500 dark:hover:text-slate-300 transition-colors cursor-pointer peer" />
              <div className="absolute bottom-full mb-2 invisible peer-hover:visible bg-gray-800 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                HTML
              </div>
            </div>
            <div className="flex items-center justify-center relative">
              <FaCss3Alt className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 text-slate-400 dark:text-slate-500 hover:text-slate-500 dark:hover:text-slate-300 transition-colors cursor-pointer peer" />
              <div className="absolute bottom-full mb-2 invisible peer-hover:visible bg-gray-800 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                CSS
              </div>
            </div>
            <div className="flex items-center justify-center relative">
              <FaJs className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 text-slate-400 dark:text-slate-500 hover:text-slate-500 dark:hover:text-slate-300 transition-colors cursor-pointer peer" />
              <div className="absolute bottom-full mb-2 invisible peer-hover:visible bg-gray-800 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                Javascript
              </div>
            </div>
            <div className="flex items-center justify-center relative">
              <FaReact className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 text-slate-400 dark:text-slate-500 hover:text-slate-500 dark:hover:text-slate-300 transition-colors cursor-pointer peer" />
              <div className="absolute bottom-full mb-2 invisible peer-hover:visible bg-gray-800 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                React
              </div>
            </div>
            <div className="flex items-center justify-center relative">
              <SiTailwindcss className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 text-slate-400 dark:text-slate-500 hover:text-slate-500 dark:hover:text-slate-300 transition-colors cursor-pointer peer" />
              <div className="absolute bottom-full mb-2 invisible peer-hover:visible bg-gray-800 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                Tailwind CSS
              </div>
            </div>
            <div className="flex items-center justify-center relative">
              <FaPython className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 text-slate-400 dark:text-slate-500 hover:text-slate-500 dark:hover:text-slate-300 transition-colors cursor-pointer peer" />
              <div className="absolute bottom-full mb-2 invisible peer-hover:visible bg-gray-800 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                Python
              </div>
            </div>
            <div className="flex items-center justify-center relative">
              <SiDjango className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 text-slate-400 dark:text-slate-500 hover:text-slate-500 dark:hover:text-slate-300 transition-colors cursor-pointer peer" />
              <div className="absolute bottom-full mb-2 invisible peer-hover:visible bg-gray-800 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                Django
              </div>
            </div>
            <div className="flex items-center justify-center relative">
              <FaGitAlt className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 text-slate-400 dark:text-slate-500 hover:text-slate-500 dark:hover:text-slate-300 transition-colors cursor-pointer peer" />
              <div className="absolute bottom-full mb-2 invisible peer-hover:visible bg-gray-800 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                Git
              </div>
            </div>
            <div className="flex items-center justify-center relative">
              <BiLogoPostgresql className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 text-slate-400 dark:text-slate-500 hover:text-slate-500 dark:hover:text-slate-300 transition-colors cursor-pointer peer" />
              <div className="absolute bottom-full mb-2 invisible peer-hover:visible bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                PostgreSQL
              </div>
            </div>
            <div className="flex items-center justify-center relative">
              <SiNestjs className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 text-slate-400 dark:text-slate-500 hover:text-slate-500 dark:hover:text-slate-300 transition-colors cursor-pointer peer" />
              <div className="absolute bottom-full mb-2 invisible peer-hover:visible bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                Nest.js
              </div>
            </div>
          </div>
        </BentoCard>

        
        {/*card de mi ubicacion*/}      
        <BentoCard
          size="md"
          className="flex flex-col items-center justify-center text-center h-full relative overflow-hidden"
        >
          {/* Main location pin with pulse animation */}
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-violet-500 rounded-full animate-ping opacity-20"></div>
            <div className="relative bg-violet-600 p-4 rounded-full">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
          
          {/* Location text - Villa María centrado, pin a su izquierda */}
          <div className="relative text-center">
            <div className="text-slate-800 dark:text-slate-200 font-bold text-lg leading-tight">
              Villa María
            </div>
            {/* Pin posicionado bien pegado a la izquierda del texto */}
            <span className="absolute top-0 right-full transform translate-x-1">📍</span>
            <div className="text-slate-600 dark:text-slate-300 font-medium text-sm mt-1">
              Córdoba, Argentina
            </div>
          </div>

        </BentoCard>

        {/*card de disponibilidad*/}
        <BentoCard
          size="md"
          className="relative overflow-hidden h-full md:col-span-3"
        >
          {/* Contenedor principal centrado */}
          <div className="relative z-10 h-full flex items-center justify-center p-4 sm:p-6">
            <div className="text-center">
              {/* Status */}
              <div className="mb-2 sm:mb-3">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-emerald-200 shadow-sm">
                  <div className="relative">
                    <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-40"></div>
                    <div className="relative w-2 h-2 sm:w-2.5 sm:h-2.5 bg-emerald-500 rounded-full"></div>
                  </div>
                  <span className="availability-title font-bold text-base sm:text-lg">
                    Disponible para trabajar
                  </span>
                </div>
              </div>

              {/* Texto descriptivo */}
              <p className="availability-subtitle text-xs sm:text-sm font-medium">
                🚀 Abierto a nuevas oportunidades
              </p>
            </div>
          </div>
          
        </BentoCard>
        
        {/*card de gif decorativo*/}
        <BentoCard
          size="sm"
          className="relative overflow-hidden row-span-2 sm:row-span-1"
        >
          <div className="absolute inset-0">
            <img 
              src="/images/gifs/Coding Hello World GIF.gif" 
              alt="Hello World coding animation"
              className="w-full h-full object-cover"
            />
          </div>
        </BentoCard>

        {/* Card de contacto */}
        <BentoCard
          size="full"
          className="h-full relative overflow-hidden"
        >
          <div className="relative z-10 flex items-center justify-between h-full w-full p-3 sm:p-4 md:p-6">
            {/* Lado izquierdo - Información (oculto en móvil) */}
            <div className="hidden sm:flex flex-1">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500 rounded-full animate-pulse opacity-20"></div>
                    <div className="relative bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-full">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200">
                    ¡Hablemos!
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                  ¿Tienes una idea? ¿Un proyecto en mente? 
                  <br />
                  <span className="text-blue-600 dark:text-blue-400 font-medium">Colaboremos juntos</span> para hacerla realidad.
                </p>
              </div>
            </div>

            {/* Lado derecho - Botón (centrado en móvil) */}
            <div className="w-full sm:w-auto sm:ml-8 flex justify-center sm:justify-end">
              <button
                onClick={() => setModalAbierto(true)}
                className="flex items-center gap-2 sm:gap-4 p-3 sm:p-4 md:p-5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 group shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="bg-white/20 p-2 sm:p-3 rounded-lg group-hover:bg-white/30 transition-colors">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-sm sm:text-base">Enviar Mensaje</div>
                  <div className="text-blue-100 text-xs sm:text-sm">Completa el formulario</div>
                </div>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </BentoCard>

        {/* Modal de Contacto */}
        <ContactModal 
          isOpen={modalAbierto} 
          onClose={() => setModalAbierto(false)} 
        />
      
      </BentoGrid>
    </div>
  );
};

export default Home;
