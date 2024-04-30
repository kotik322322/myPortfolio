import React from 'react';
import Layout from '../components/Layout';
import AnimatedText from '../components/AnimatedText';
import FeaturedProject from '../components/FeaturedProject';
import project1 from '../../public/website1.jpg';
import Project from '../components/Project';

const Projects = () => {
  return (
    <div className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
      <Layout className="pt-16">
        <AnimatedText text="Imagination Trumps Knowledge!" className="mb-10" />

        <div className="grid grid-cols12 gap-24 gap-y-32">
          <div className="col-span-12">
            <FeaturedProject
              title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum."
              summary="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum."
              link={'/link'}
              type={'Featured Project'}
              img={project1}
              github={'https://github.com/kotik322322/next-nike-v2'}
            />
          </div>

          <div className="col-span-6">
            <Project
              title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum."
              summary="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum."
              link={'/link'}
              type={'Featured Project'}
              img={project1}
              github={'https://github.com/kotik322322/next-nike-v2'}
            />
          </div>
          <div className="col-span-6">
            <Project
              title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum."
              summary="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum."
              link={'/link'}
              type={'Featured Project'}
              img={project1}
              github={'https://github.com/kotik322322/next-nike-v2'}
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Projects;
