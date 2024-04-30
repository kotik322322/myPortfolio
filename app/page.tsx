import Image from 'next/image';
import Layout from './components/Layout';
import profileImg from '../public/images/devpic.png';
import AnimatedText from './components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from './components/Icons';
import HireMe from './components/HireMe';
import lightBulb from '../public/images/miscellaneous_icons_1.svg';

export default function Home() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen dark:text-light ">
      <Layout className="pt-0 md:p-16 sm:pt-8">
        <div className="flex flex-col items-center justify-between w-full">
          <div className="w-1/2 ">
            <Image
              src={profileImg}
              alt=""
              className="w-full h-auto  inline-block"
              priority
              sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw "
            />
          </div>

          <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
            <AnimatedText
              text="Turning Vision Into Reality with Code"
              className="text-center xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl text-3xl"
            />
            <p className="my-4 font-medium md:text-sm text-xs xl:text-base ">
              As a skilled Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus sequi
              iure ipsam optio fugit?
            </p>

            <div className="flex items-center mr-auto mt-2 lg:m-auto">
              <Link
                href="/resume.pdf"
                target="_blank"
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light transition-all duration-150 md:p-2 md:px-4 md:text-base"
                download={true}>
                Resume
                <LinkArrow className="w-6 ml-1" />
              </Link>
              <Link
                href="kotan23111995@gmail.com"
                className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>

      <HireMe />
    </main>
  );
}
