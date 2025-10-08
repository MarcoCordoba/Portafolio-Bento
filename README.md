# 🎨 Portafolio Personal - Bento Grid Style

Un portafolio web moderno y responsivo construido con React, Tailwind CSS y un diseño inspirado en Bento Grid.

![React](https://img.shields.io/badge/React-19.x-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.x-cyan)
![Vite](https://img.shields.io/badge/Vite-7.x-purple)
![EmailJS](https://img.shields.io/badge/EmailJS-4.x-green)
![Lucide React](https://img.shields.io/badge/Lucide--React-0.5x-orange)

## ✨ Características

- **Diseño Bento Grid**: Layout moderno e interactivo inspirado en el diseño de rejilla de Bento
- **Completamente Responsivo**: Se adapta perfectamente a todos los dispositivos
- **Animaciones Suaves**: Transiciones y efectos hover elegantes
- **Navegación Intuitiva**: Routing con React Router para una experiencia fluida
- **Página de Proyectos**: Sección dedicada con filtros por categoría
- **Formulario de Contacto**: Integración con EmailJS para envío de emails
- **Iconografía Moderna**: Iconos de Lucide React y React Icons
- **Modo Oscuro/Claro**: Sistema de tema dinámico con persistencia
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
│   ├── ContactModal/
│   │   └── ContactModal.jsx # Modal de contacto con EmailJS
│   └── ProjectCard/
│       └── ProjectCard.jsx  # Tarjetas para la página de proyectos
├── contexts/
│   └── DarkModeContext.jsx  # Context para modo oscuro/claro
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

- **React 19** - Biblioteca principal para la interfaz de usuario
- **React Router DOM** - Navegación entre páginas
- **Tailwind CSS** - Framework de estilos utilitarios
- **Vite** - Build tool y servidor de desarrollo
- **EmailJS** - Servicio para envío de emails desde el frontend
- **Lucide React** - Librería de iconos moderna y minimalista
- **React Icons** - Conjunto extenso de iconos populares

## 📧 Configuración de EmailJS

Para que el formulario de contacto funcione correctamente:

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Configura un servicio de email (Gmail, Outlook, etc.)
3. Crea una plantilla de email
4. En el componente `ContactModal.jsx`, actualiza:
   ```javascript
   const serviceId = 'tu_service_id';
   const templateId = 'tu_template_id';
   const publicKey = 'tu_public_key';
   ```

## 🎯 Secciones del Portafolio

### Página Principal (Bento Grid)
- **Sobre Mí**: Información personal y links de contacto
- **Proyectos**: Vista previa con enlace a página completa
- **Tecnologías**: Stack técnico organizado por categorías
- **Contacto**: Modal interactivo con formulario de EmailJS
- **Experiencia**: Resumen de experiencia profesional
- **CV/Resume**: Enlace de descarga
- **Toggle de Tema**: Cambio entre modo oscuro y claro

### Página de Proyectos
- **Filtros por Categoría**: Frontend, Backend, Full Stack
- **Tarjetas Detalladas**: Descripción, tecnologías, enlaces
- **Proyectos Destacados**: Marcados especialmente
- **Links Directos**: Demo en vivo y código fuente

---

⭐ **¡No olvides personalizar los datos con tu información!**

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún bug o tienes ideas para mejoras:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👤 Autor

**Marco Córdoba**
- LinkedIn: [marco-cordoba](https://www.linkedin.com/in/marco-cordoba-/)
- GitHub: [@MarcoCordoba](https://github.com/MarcoCordoba)

---

Hecho con ❤️ y React
