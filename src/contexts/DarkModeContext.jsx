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
  
  // Inicializar en modo oscuro por defecto
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    
    // Cargar la preferencia del localStorage al montar el componente
    try {
      const savedMode = localStorage.getItem('portfolio-dark-mode');
      if (savedMode !== null) {
        const parsedMode = JSON.parse(savedMode);
        setIsDarkMode(parsedMode);
        // Aplicar inmediatamente la clase
        if (parsedMode) {
          document.documentElement.classList.add('dark');
        }
      }
    } catch (error) {
      console.error('Error loading dark mode preference:', error);
      // En caso de error, limpiar localStorage
      localStorage.removeItem('portfolio-dark-mode');
    }
  }, []);

  useEffect(() => {
    // Guardar en localStorage cada vez que cambie el estado
    try {
      localStorage.setItem('portfolio-dark-mode', JSON.stringify(isDarkMode));
    } catch (error) {
      console.error('Error saving dark mode preference:', error);
    }

    // Aplicar o remover la clase 'dark' del elemento html
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
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