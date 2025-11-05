import { createContext, useContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode debe ser usado dentro de un DarkModeProvider');
  }
  return context;
};

export const DarkModeProvider = ({ children }) => {
  
  // Función para obtener el modo inicial
  const getInitialMode = () => {
    try {
      const savedMode = localStorage.getItem('portfolio-dark-mode');
      if (savedMode !== null) {
        return JSON.parse(savedMode);
      }
    } catch (error) {
      console.error('Error loading dark mode preference:', error);
      localStorage.removeItem('portfolio-dark-mode');
    }
    return true; // modo oscuro por defecto
  };

  // Inicializar con el valor correcto desde el principio
  const [isDarkMode, setIsDarkMode] = useState(getInitialMode);

  // Aplicar la clase inmediatamente al cargar
  useEffect(() => {
    const applyDarkMode = (darkMode) => {
      const htmlElement = document.documentElement;
      if (darkMode) {
        htmlElement.classList.add('dark');
      } else {
        htmlElement.classList.remove('dark');
      }
    };

    applyDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    // Guardar en localStorage cada vez que cambie el estado
    try {
      localStorage.setItem('portfolio-dark-mode', JSON.stringify(isDarkMode));
    } catch (error) {
      console.error('Error saving dark mode preference:', error);
    }

    // Aplicar o remover la clase 'dark' del elemento html
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const value = {
    isDarkMode,
    toggleDarkMode,
    setIsDarkMode
  };

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};