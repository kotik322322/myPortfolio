'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface SkillProps {
  name: string;
  x: string;
  y: string;
}

const Skill = ({ name, x, y }: SkillProps) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold text-sm bg-transparent py-1.5 px-3 text-dark shadow-dark cursor-pointer absolute
      dark:bg-light dark:bg-transparent dark:text-light md:py-3 md:px-6
       md:text-base md:bg-dark md:text-light dark:md:bg-light dark:md:text-dark"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}>
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2
        className="font-bold text-4xl mt-20 lg:mt-64 w-full text-center
      lg:text-8xl
      ">
        Skills
      </h2>
      <div
        className="w-full relative flex items-center justify-center rounded-full h-[50vh] bg-circularLight
      md:h-[60vh]
      lg:h-[80vh]   
      lg:bg-circularLightLg 
      xl:h-screen
      dark:bg-circularDark 
      dark:lg:bg-circularDarkLg">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-2  shadow-dark cursor-pointer 
        lg:p-6
        dark:text-dark 
        dark:bg-light
        ">
          Web
        </motion.div>

        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="React" x="0vw" y="12vw" />
        <Skill name="NextJs" x="20vw" y="-21vw" />
        <Skill name="Redux Toolkit" x="15vw" y="-12vw" />
        <Skill name="MongoDb" x="32vw" y="-5vw" />
        <Skill name="ExpressJs" x="0vw" y="-20vw" />
        <Skill name="Tailwind CSS" x="-25vw" y="18vw" />
        <Skill name="Git" x="18vw" y="18vw" />
      </div>
    </>
  );
};

export default Skills;
