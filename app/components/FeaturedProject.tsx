import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GithubIcon } from './Icons';

interface FeaturedProjectProps {
  type: string;
  title: string;
  summary: string;
  img: StaticImageData;
  link: string;
  github: string;
}

const FeaturedProject = ({ type, title, summary, img, link, github }: FeaturedProjectProps) => {
  return (
    <article className="w-full flex flex-col lg:flex-row items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-6 lg:p-16 relative rounded-br-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light" />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg">
        <Image
          src={img}
          alt={title}
          className="w-full h-auto hover:scale-105 transition-all duration-500"
          priority
          sizes="(max-width: 768px) 100vw,
                (max-width:1200px) 50vw,
                50vw
                "
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between pl-2 lg:pl-6">
        <span className="text-primary font-medium text-base lg:text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-lg lg:text-4xl font-semibold lg:font-bold dark:text-light">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light text-sm lg:text-base">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="hover:-translate-y-1 transition-all duration-200">
            <GithubIcon className='text-4xl lg:text-5xl'/>
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-4 lg:px-6 text-base lg:text-lg font-semibold dark:bg-light dark:text-dark hover:-translate-y-1 transition-all duration-200">
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
