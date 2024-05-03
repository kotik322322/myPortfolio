"use client"
import React, { useState } from 'react'
import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
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
    className={`flex items-center justify-center rounded-full ${
      colorTheme === 'light' ? 'bg-light text-dark' : 'bg-dark text-light'
    }`}>
    {colorTheme === 'dark' ? (
      <MdOutlineWbSunny className="text-3xl text-dark bg-light rounded-full p-1 border-1.5 border-black" />
    ) : (
      <FaMoon className="text-3xl text-light bg-dark rounded-full p-1 border-1.5 border-light" />
    )}
  </button>
  )
}

export default DarkThemeButton