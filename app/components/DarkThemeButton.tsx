"use client"
import React, { useState } from 'react'
import { MoonIcon, SunIcon } from './Icons';
import useThemeSwitcher from './hooks/useThemeSwitcher';

const DarkThemeButton = () => {
    const [colorTheme, setTheme] = useThemeSwitcher();
    const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);
  
    const toggleDarkMode = (checked: boolean) => {
      setTheme(colorTheme);
      setDarkSide(checked);
    };
  return (
    <button
    onClick={() => toggleDarkMode(darkSide)}
    className={`ml-3 flex items-center justify-center rounded-full p-1 ${
      colorTheme === 'light' ? 'bg-light text-dark' : 'bg-dark text-light'
    }`}>
    {colorTheme === 'dark' ? (
      <SunIcon className="fill-dark" />
    ) : (
      <MoonIcon className="fill-dark" />
    )}
  </button>
  )
}

export default DarkThemeButton