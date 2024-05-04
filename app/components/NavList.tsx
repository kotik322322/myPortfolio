
import React from 'react';
import { CustomLink } from './CustomLink';
import { motion } from 'framer-motion';

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import DarkThemeButton from './DarkThemeButton';

const NavList = () => {
  return (
    <div className="hidden w-full lg:flex justify-between items-center  ">
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
          <FaInstagram className='text-2xl text-orange-600'/>
        </motion.a>
        <motion.a
          href="/"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6"
          target={'_blank'}>
          <FaGithub className="text-2xl text-dark bg-light rounded-full p-1"/>
        </motion.a>
        <motion.a
          href="/"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6"
          target={'_blank'}>
          <FaLinkedin  className='text-2xl text-blue-600'/>
        </motion.a>

        <DarkThemeButton />
      </nav>
    </div>
  );
};

export default NavList;
