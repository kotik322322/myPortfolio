'use client';
import React from 'react';
import Logo from './Logo';
import { CustomLink } from './CustomLink';
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from './Icons';
import { motion } from 'framer-motion';
import BurgerMenu from './BurgerMenu';
import DarkThemeButton from './DarkThemeButton';
import useMenuToggle from './hooks/useMenuToggle';


const NavBar = () => {
  const [isOpen, toggleMenu] = useMenuToggle(false);

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative">
      {/* Burger Menu */}
      <button className="hidden lg:flex flex-col justify-center items-center" onClick={toggleMenu as () => void}>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        />
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm translate-y-0.5 transition-all duration-300 ease-out ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        />
      </button>
      {/* Burger Menu End*/}
      {/* ================================== */}
      <div className="w-full flex justify-between items-center  lg:hidden">
        <nav className="flex items-center justify-center gap-x-4">
          <CustomLink href="/" title="Home" />
          <CustomLink href="/about" title="About" />
          <CustomLink href="/projects" title="Projects" />
          <CustomLink href="/contacts" title="Contacts" />
        </nav>
        <nav className="flex items-center justify-center gap-x-4">
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6"
            href="/"
            target={'_blank'}>
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="/"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6"
            target={'_blank'}>
            <GithubIcon />
          </motion.a>
          <motion.a
            href="/"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6"
            target={'_blank'}>
            <LinkedInIcon />
          </motion.a>

          <DarkThemeButton />
        </nav>
      </div>
      {/* ================================== */}

      {isOpen && <BurgerMenu toggleMenu={toggleMenu}/>}
      <div className="absolute left-[50%]  top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
