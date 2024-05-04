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
      <main className="w-full flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuel Purpose" className="mb-4 lg:mb-16" />

          <div className="w-full grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-8">
            {/* Biography */}
            <div className="w-full flex flex-col items-start justify-start order-2 md:order-1 md:col-span-1 xl:col-span-3">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>

              <p className="font-medium text-base">
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
            {/* Biography End */}

            {/* Profile Image */}
            <div className="w-full relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light order-1 md:order-2 md:col-span-1 xl:col-span-3">
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
            {/* Profile Image End */}

            {/*Numbers */}
            <div
              className="w-full flex flex-row xl:flex-col justify-between xl:justify-start gap-4  order-3 md:col-span-2 
            lg:gap-16
            xl:col-span-2 
            ">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-4xl lg:text-7xl font-bold">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-sm lg:text-xl font-medium capitalize text-dark/75 dark:text-light">
                  Tratatam tratatam
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-4xl lg:text-7xl font-bold">
                  <AnimatedNumbers value={30} />+
                </span>
                <h2 className="text-sm lg:text-xl font-medium capitalize text-dark/75 dark:text-light">
                  Tratatam tratatam
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-4xl lg:text-7xl font-bold">
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className="text-sm lg:text-xl font-medium capitalize text-dark/75 dark:text-light">
                  Tratatam tratatam
                </h2>
              </div>
            </div>
            {/*Numbers End*/}
          </div>

          <Skills />
          {/* <Experience /> */}
        </Layout>
      </main>
    </div>
  );
};

export default AboutPage;
