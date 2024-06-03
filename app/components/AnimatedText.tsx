'use client';
import React from 'react';
import { motion } from 'framer-motion';

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText = ({ text, className }: AnimatedTextProps) => {
  return (
    <div className="w-full flex items-center justify-center text-center overflow-hidden sm:py-0">
      <motion.h1
        variants={quote}
        initial="initial"
        animate="animate"
        className={`inline-block w-full text-dark font-bold capitalize ${className} dark:text-light`}>
        {text.split(' ').map((word: string, index: number) => (
          <motion.span variants={singleWord} key={word + '-' + index} className="inline-block">
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
