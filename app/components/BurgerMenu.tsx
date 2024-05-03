import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import DarkThemeButton from './DarkThemeButton';
import CustomMobileLink from './CustomMobileLink';

interface BurgerMenuProps {
  toggleMenu: () => void;
}

const BurgerMenu : React.FC<BurgerMenuProps> = ({ toggleMenu }) => {
  return (
    <motion.div initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}} animate={{scale:1, opacity:1}} className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">
      <nav className="flex flex-col flex-center justify-center gap-y-1.5">
        <CustomMobileLink href="/" title="Home" toggleMenu={toggleMenu} />
        <CustomMobileLink href="/about" title="About" toggleMenu={toggleMenu} />
        <CustomMobileLink href="/projects" title="Projects" toggleMenu={toggleMenu} />
        <CustomMobileLink href="/contacts" title="Contacts" toggleMenu={toggleMenu} />
      </nav>
      <nav className="flex items-center justify-center gap-x-1 md:gap-x-4 mt-4">
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
          href="/"
          target={'_blank'}>
          <FaInstagram className='text-3xl text-orange-600'/>
        </motion.a>
        <motion.a
          href="/"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className=""
          target={'_blank'}>
          <FaGithub className="text-3xl text-dark bg-light rounded-full p-1"/>
        </motion.a>
        <motion.a
          href="/"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
          target={'_blank'}>
          <FaLinkedin  className='text-3xl text-blue-600'/>
        </motion.a>

        <DarkThemeButton />
      </nav>
    </motion.div>
  );
};

export default BurgerMenu;
