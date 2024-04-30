'use client';
import React, { useRef } from 'react';
import { useScroll, motion, spring } from 'framer-motion';
import LiIcon from './LiIcon';

interface DetailsProps {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}

const Details = ({ position, company, companyLink, time, address, work }: DetailsProps) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="">
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a href={companyLink} target="_blank" className="text-primary dark:text-primaryDark capitalize">
            @{company}
          </a>
        </h3>

        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>

        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Experience</h2>

      <div className="w-[-75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Software Engineer"
            company="Tratatam"
            companyLink="www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quod perferendis placeat atque provident."
          />

          <Details
            position="Software Engineer"
            company="Tratatam"
            companyLink="www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quod perferendis placeat atque provident."
          />

          <Details
            position="Software Engineer"
            company="Tratatam"
            companyLink="www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quod perferendis placeat atque provident."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
