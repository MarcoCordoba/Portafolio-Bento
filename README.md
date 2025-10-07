# 🎨 Portafolio Personal - Bento Grid Style

Un portafolio web moderno y responsivo construido con React, Tailwind CSS y un diseño inspirado en Bento Grid.

![React](https://img.shields.io/badge/React-18.x-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-cyan)
![Vite](https://img.shields.io/badge/Vite-5.x-purple)

## ✨ Características

- **Diseño Bento Grid**: Layout moderno e interactivo inspirado en el diseño de rejilla de Bento
- **Completamente Responsivo**: Se adapta perfectamente a todos los dispositivos
- **Animaciones Suaves**: Transiciones y efectos hover elegantes
- **Navegación Intuitiva**: Routing con React Router para una experiencia fluida
- **Página de Proyectos**: Sección dedicada con filtros por categoría
- **Optimizado para Performance**: Construido con Vite para carga rápida

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación
```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles
```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construir para producción  
npm run preview      # Vista previa de build
npm run lint         # Ejecutar linter
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── BentoGrid/
│   │   ├── BentoGrid.jsx    # Componente principal del grid
│   │   └── BentoCard.jsx    # Tarjetas individuales del Bento
│   └── ProjectCard/
│       └── ProjectCard.jsx   # Tarjetas para la página de proyectos
├── pages/
│   ├── Home.jsx             # Página principal con Bento Grid
│   └── Projects.jsx         # Página dedicada a proyectos
├── data/
│   └── projectsData.js      # Datos de proyectos y configuración
├── App.jsx                  # Componente raíz con routing
└── index.css               # Estilos globales y componentes
```

## 🎨 Personalización

### Datos Personales
Edita `src/data/projectsData.js` para personalizar:
- Información personal (`aboutMe`)
- Lista de habilidades (`skills`) 
- Proyectos (`projectsData`)

### Layout del Bento Grid
En `src/pages/Home.jsx` puedes:
- Cambiar el tamaño de las cards (`size` prop)
- Modificar los colores (`color` prop)
- Reorganizar la disposición de las tarjetas

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca principal
- **React Router DOM** - Navegación entre páginas
- **Tailwind CSS** - Framework de estilos utilitarios
- **Vite** - Build tool y servidor de desarrollo

## 🎯 Secciones del Portafolio

### Página Principal (Bento Grid)
- **Sobre Mí**: Información personal y links de contacto
- **Proyectos**: Vista previa con enlace a página completa
- **Tecnologías**: Stack técnico organizado por categorías
- **Contacto**: Información de contacto directo
- **Experiencia**: Resumen de experiencia profesional
- **CV/Resume**: Enlace de descarga

### Página de Proyectos
- **Filtros por Categoría**: Frontend, Backend, Full Stack
- **Tarjetas Detalladas**: Descripción, tecnologías, enlaces
- **Proyectos Destacados**: Marcados especialmente
- **Links Directos**: Demo en vivo y código fuente

---

⭐ ¡No olvides personalizar los datos con tu información!+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
