import React from 'react';
import { CustomLink } from './CustomLink';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedInIcon, TwitterIcon } from './Icons';
import DarkThemeButton from './DarkThemeButton';

const BurgerMenuContent = () => {
  return (
    <div className="hidden w-full xl:flex justify-between items-center  ">
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
  );
};

export default BurgerMenuContent;
