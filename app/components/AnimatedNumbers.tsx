"use client"
import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring, } from 'framer-motion';
 

interface AnimatedNumbersProps {
  value: number;
}

const AnimatedNumbers = ({value}: AnimatedNumbersProps) => {
  const ref = useRef<HTMLElement>(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, {once: true});

  useEffect(() => {
    if(isInView) {
        motionValue.set(value)
    }
  }, [isInView, motionValue, value])

  useEffect(() => {
    springValue.on("change", (latest) => {
        if(ref.current && latest.toFixed(0) <= value ) {
            ref.current.textContent = latest.toFixed(0)
        }  

    })
  }, [springValue, value])
  return <span ref={ref}></span>;



return 
};

export default AnimatedNumbers;
