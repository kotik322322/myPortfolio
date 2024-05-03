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
      <Layout>
        <div className="flex flex-col items-center justify-between w-full lg:flex-row">
          <div className="w-full md:hidden lg:inline-block lg:w-1/2 ">
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

          <div className="w-full flex flex-col items-center self-center text-center lg:text-left lg:w-1/2">
            <AnimatedText
              text="Turning Vision Into Reality with Code"
              className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:text-left"
            />
            <p className="my-4 font-medium md:text-sm text-xs xl:text-base ">
              As a skilled Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus sequi
              iure ipsam optio fugit?
            </p>

            <div className="w-full flex items-center justify-start mt-2 ">
              <Link
                href="/resume.pdf"
                target="_blank"
                className="flex items-center bg-dark text-light p-2 px-4 rounded-lg text-base font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light transition-all duration-150  md:text-lg md:py-2.5 md:px-6"
                download={true}>
                Resume
                <LinkArrow className="w-6 ml-1" />
              </Link>
              <Link
                href="kotan23111995@gmail.com"
                className="ml-4 p-2 px-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-lg md:py-2.5 md:px-6">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>

      {/* <HireMe /> */}
    </main>
  );
}
