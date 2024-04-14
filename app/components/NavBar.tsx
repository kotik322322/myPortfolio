"use client"
import React from 'react';
import Logo from './Logo';
import { CustomLink } from './CustomLink';
import { GithubIcon, LinkedInIcon, TwitterIcon } from './Icons';
import {motion } from "framer-motion"
const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav className="flex items-center justify-center gap-x-4">
        <CustomLink href="/" title="Home" />
        <CustomLink href="/about" title="About" />
        <CustomLink href="/projects" title="Projects" />
        <CustomLink href="/contacts" title="Contacts" />
      </nav>
      <nav className='flex items-center justify-center gap-x-4'>
        <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6' href="/" target={'_blank'}>
          <TwitterIcon />
        </motion.a>
        <motion.a href="/" whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6' target={'_blank'}>
          <GithubIcon/>
        </motion.a>
        <motion.a href="/" whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6' target={'_blank'}>
          <LinkedInIcon/>
        </motion.a>
      </nav>
      <div className="absolute left-[50%]  top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
