'use client';
import React from 'react';
import Logo from './Logo';
import BurgerMenu from './BurgerMenu';
import useMenuToggle from './hooks/useMenuToggle';
import BurgerMenuButton from './BurgerMenuButton';
import NavList from './NavList';

const NavBar = () => {
  const [isOpen, toggleMenu] = useMenuToggle(false);

  return (
    <header className="w-full px-8 sm:px-12 md:px-16 py-8 font-medium flex items-center justify-between dark:text-light relative">
      {/* Burger Menu Button */}
      <BurgerMenuButton toggleMenu={toggleMenu} isOpen={isOpen} />
      {/* Burger Menu Button End */}

      {/* List of Navigation */}
      <NavList />
      {/* Burger Menu List End */}

      {isOpen && <BurgerMenu toggleMenu={toggleMenu} />}
      <div className="absolute left-[50%]  top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
