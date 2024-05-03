"use client";
import { useEffect, useState, SetStateAction, Dispatch } from 'react';

const useThemeSwitcher = (): [string, Dispatch<SetStateAction<string>>] => {
  const storage = typeof window !== 'undefined' ? localStorage.theme : 'light';
  const [theme, setTheme] = useState<string>(storage);
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    // save theme to local storage
    localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
};

export default useThemeSwitcher;