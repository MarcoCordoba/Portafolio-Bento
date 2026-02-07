import Conversor from '../assets/images/projects/Conversor.png';
import Notas from '../assets/images/projects/Home-notas.png';
import Scraping from '../assets/images/projects/Scraping-web.png'
import Reservas from '../assets/images/projects/Gestor-reservas.png'

export const projectsData = [
  {
    id: 1,
    title: "Gestor de reservas temporales",
    description: "Aplicación web para la administración de alquileres temporales. Desplegada en la nube. El sistema contiene: Sistema de Reservas, Control de disponibilidad con calendario interactivo, Administración de Clientes, Panel de estadísticas, ingresos y estado de reservas en tiempo real, Historial Completo, Autenticación Segura",
    technologies: ["React", "Javascript", "tailwindcss", "Nest.js", "TypeScript" , "PostgreSQL", "TypeORM" ,"Docker", "Render", "Vercel", "Neon"],
    image: Reservas,
    demoUrl: "https://gestion-reservas-front.vercel.app/" // Enlace a la página desplegada
  },
  {
    id: 2,
    title: "Scraping web",
    description: "Aplicación web que realiza web scraping de tres tiendas online, almacenando los productos (categoria, imagenes, precio, etc.) obtenidos en una base de datos. La información se procesa y muestra en tiempo real desde la propia web, permitiendo visualizar y comparar los datos extraídos de manera dinámica con la posibilidad de aplicar diferentes filtros.",
    technologies: ["React", "Javascript", "tailwindcss", "django", "python", "Sqlite3"],
    image: Scraping,
    githubUrl1: "https://github.com/MarcoCordoba/Scraping_Front.git",
    githubUrl2: "https://github.com/MarcoCordoba/Scraping-Api.git"
  },
  {
    id: 3,
    title: "Conversor de Monedas",
    description: "Aplicación web que permite convertir entre diferentes monedas utilizando tasas de cambio en tiempo real.Los datos de las tasas de cambio son obtenidas de una API externa.",
    technologies: ["Javascript", "Css", "React", "API de ExchangeRate (v6)"],
    image: Conversor,
    githubUrl1: "https://github.com/MarcoCordoba/Conversos-Monedas.git"
  },
  {
    id: 4,
    title: "Gestor de Notas",
    description: "Aplicacion web para gestionar notas personales, elaborado con react y js en el front y el back con python, django, postgres. el sistema cuenta con inicio y registro de usuarios mediante JWT",
    technologies: ["React", "Javascript", "CSS", "Python", "Django", "PostgreSQL"],
    image: Notas,
    // Puedes usar demoUrl o githubUrl1/githubUrl2 según prefieras
    githubUrl1: "https://github.com/MarcoCordoba/App-Notas-Frontend.git",
    githubUrl2: "https://github.com/MarcoCordoba/App-Notas-Backend.git"
  }
];

export const aboutMe = {
  name: "Hola, soy Marco Cordoba",
  title: "Desarrollador Full Stack",
  description: "Soy estudiante de 5to año de Ingeniería en Sistemas y desarrollador Full Stack, con experiencia en proyectos web que me permiten integrar teoría académica con práctica real.",
  linkedin: "https://www.linkedin.com/in/marco-cordoba-/",
  resume: "/MarcoCordoba_CV.pdf",
  profileImage: "/images/profile/Perfil.png" 
};