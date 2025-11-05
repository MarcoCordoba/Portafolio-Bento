import { createContext, useContext, useEffect, useRef, useState } from 'react';

const DarkModeContext = createContext();

const STORAGE_KEY = 'portfolio-dark-mode';
const MEDIA_QUERY = '(prefers-color-scheme: dark)';

const getStoredPreference = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const storedValue = window.localStorage.getItem(STORAGE_KEY);
    return storedValue !== null ? JSON.parse(storedValue) : null;
  } catch (error) {
    console.warn('No se pudo leer la preferencia de modo oscuro almacenada:', error);
    return null;
  }
};

const resolveInitialDarkMode = () => {
  const storedPreference = getStoredPreference();
  if (storedPreference !== null) {
    return storedPreference;
  }

  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia(MEDIA_QUERY).matches;
  }

  return true;
};

const applyDocumentTheme = (isDark) => {
  if (typeof document === 'undefined') {
    return;
  }

  const root = document.documentElement;
  const preferredScheme = isDark ? 'dark' : 'light';

  root.classList.toggle('dark', isDark);
  root.style.setProperty('color-scheme', preferredScheme);
  root.dataset.theme = preferredScheme;

  const meta = document.querySelector('meta[name="color-scheme"]');
  if (meta) {
    const contentValue = isDark ? 'dark light' : 'light dark';
    meta.setAttribute('content', contentValue);
  }
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode debe ser usado dentro de un DarkModeProvider');
  }
  return context;
};

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(resolveInitialDarkMode);
  const [hasStoredPreference, setHasStoredPreference] = useState(() => getStoredPreference() !== null);
  const storageUnavailableRef = useRef(false);

  useEffect(() => {
    applyDocumentTheme(isDarkMode);

    if (typeof window === 'undefined' || storageUnavailableRef.current) {
      return;
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(isDarkMode));
      if (!hasStoredPreference) {
        setHasStoredPreference(true);
      }
    } catch (error) {
      storageUnavailableRef.current = true;
      console.warn('No se pudo guardar la preferencia de modo oscuro:', error);
    }
  }, [isDarkMode, hasStoredPreference]);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia(MEDIA_QUERY);

    const handlePreferenceChange = (event) => {
      if (storageUnavailableRef.current || !hasStoredPreference) {
        setIsDarkMode(event.matches);
      }
    };

    try {
      mediaQuery.addEventListener('change', handlePreferenceChange);
      return () => mediaQuery.removeEventListener('change', handlePreferenceChange);
    } catch (error) {
      mediaQuery.addListener(handlePreferenceChange);
      return () => mediaQuery.removeListener(handlePreferenceChange);
    }
  }, [hasStoredPreference]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
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