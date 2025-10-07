import Conversor from '../assets/images/projects/Conversor.png';
import Notas from '../assets/images/projects/Home-notas.png';
import Scraping from '../assets/images/projects/Scraping-web.png'

export const projectsData = [
  {
    id: 1,
    title: "E-commerce App",
    description: "Aplicación full-stack de e-commerce con carrito de compras, sistema de pagos, gestión de usuarios y panel administrativo. Incluye autenticación, filtros avanzados y diseño responsive.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    image: "https://via.placeholder.com/400x250?text=E-commerce+App",
    githubUrl1: "https://github.com/username/ecommerce-frontend",
    githubUrl2: "https://github.com/username/ecommerce-backend",
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Scraping web",
    description: "Aplicación web que realiza web scraping de tres tiendas online, almacenando los productos (categoria, imagenes, precio, etc.) obtenidos en una base de datos. La información se procesa y muestra en tiempo real desde la propia web, permitiendo visualizar y comparar los datos extraídos de manera dinámica.",
    technologies: ["React", "Javascript", "tailwindcss", "django", "python", "Sqlite3"],
    image: Scraping,
    githubUrl1: "https://github.com/MarcoCordoba/Scraping_Front.git",
    githubUrl2: "https://github.com/MarcoCordoba/Scraping-Api.git",
    category: "Web App"
  },
  {
    id: 3,
    title: "Conversor de Monedas",
    description: "Aplicación web que permite convertir entre diferentes monedas utilizando tasas de cambio en tiempo real obtenidas de una API externa.",
    technologies: ["Javascript", "React", "API de ExchangeRate (v6)", "Css"],
    image: Conversor,
    githubUrl1: "https://github.com/MarcoCordoba/Conversos-Monedas.git",
    githubUrl2: null,
    category: "Web App"
  },
  {
    id: 4,
    title: "Gestor de Notas",
    description: "Aplicacion web para gestionar notas personales, elaborado con react y js en el front y el back con python, django, postgres. el sistema cuenta con inicio y registro de usuarios mediante JWT",
    technologies: ["React", "Javascript", "CSS", "Python", "Django", "PostgreSQL"],
    image: Notas,
    githubUrl1: "https://github.com/MarcoCordoba/App-Notas-Frontend.git",
    githubUrl2: "https://github.com/MarcoCordoba/App-Notas-Backend.git",
    category: "Full Stack"
  }
];

export const aboutMe = {
  name: "Hola, soy Marco Cordoba",
  title: "Desarrollador Full Stack",
  description: "Soy estudiante avanzado de Ingeniería en Sistemas y desarrollador Full Stack, con experiencia en proyectos web que me permiten integrar teoría académica con práctica real.",
  linkedin: "https://www.linkedin.com/in/marco-cordoba-/",
  resume: "/Cordoba_Marco_CV.pdf",
  profileImage: "/images/profile/Perfil.png" 
};