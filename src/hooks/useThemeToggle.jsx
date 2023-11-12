
import { useState, useEffect } from 'react';

const useThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
   
    return localStorage.getItem('theme') || 'light';
  });

 
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

  
    localStorage.setItem('theme', newTheme);

    setTheme(newTheme);
  };

  return { theme, toggleTheme };
};

export default useThemeToggle;
