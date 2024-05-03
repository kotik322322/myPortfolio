import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import AnimatedText from '../components/AnimatedText';
import Layout from '../components/Layout';
import Image from 'next/image';
import profilePic from '../../public/profile.jpg';
import AnimatedNumbers from '../components/AnimatedNumbers';
import { useAnimation } from 'framer-motion';
import Skills from '../components/Skills';
import Experience from '../components/Experience';

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title> Kostiantyn Marfin | About Page</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuel Purpose" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">

            <div className="col-span-4 lg:col-span-3 flex flex-col items-start justify-start order-2">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>

              <p className="font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, neque tenetur.
                Ea dolorem minus quam, exercitationem eos, magni quidem, inventore praesentium
                cupiditate ad perferendis. Voluptatibus, ullam enim quia dolorem incidunt impedit
                libero dolorum? Repellendus, eveniet neque, labore laboriosam aperiam, natus
                perspiciatis officiis aliquam cumque ea maxime accusamus nesciunt!
              </p>

              <p className="my-4 font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, neque tenetur.
                Ea dolorem minus quam, exercitationem eos, magni quidem, inventore praesentium
                cupiditate ad perferendis. Voluptatibus, ullam enim quia dolorem incidunt impedit
                libero dolorum? Repellendus, eveniet neque, labore laboriosam aperiam, natus
                perspiciatis officiis aliquam cumque ea maxime accusamus nesciunt!
              </p>

              <p className="font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, neque tenetur.
                Ea dolorem minus quam, exercitationem eos, magni quidem, inventore praesentium
                cupiditate ad perferendis. Voluptatibus, ullam enim quia dolorem incidunt impedit
                libero dolorum? Repellendus, eveniet neque, labore laboriosam aperiam, natus
                perspiciatis officiis aliquam cumque ea maxime accusamus nesciunt!
              </p>
            </div>

            <div className="col-span-8 lg:col-span-3  relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light order-1 ">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Kostiantyn Marfin"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width:1200px) 50vw,
                50vw
                "
              />
            </div>

            <div className="col-span-8 lg:col-span-2 flex flex-row lg:flex-col items-end justify-between order-3">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light">
                  Tratatam tratatam
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={30} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light">
                  Tratatam tratatam
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light">
                  Tratatam tratatam
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
        </Layout>
      </main>
    </div>
  );
};

export default AboutPage;
