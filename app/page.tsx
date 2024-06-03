import Image from 'next/image';
import Layout from './components/Layout';
import profileImg from '../public/profile.jpg';
import AnimatedText from './components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from './components/Icons';

export default function Home() {
  return (
    <main className="flex items-center text-dark w-full  dark:text-light ">
      <Layout>
        <div className="flex flex-col items-center justify-between gap-y-5 my-5 w-full lg:flex-row lg:gap-x-20">
          {/* Image */}
          <div className="w-full relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-3 lg:p-8 dark:bg-dark dark:border-light ">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
            <Image src={profileImg} alt="Profile Image" className="w-full h-auto rounded-2xl" />
          </div>
          {/* Image */}

          {/* =====Text===== */}
          <div className="w-full flex flex-col items-center justify-center text-center lg:text-left lg:w-1/2">
            <AnimatedText
              text="Transforming Ideas into Innovative Solutions with Code"
              className="text-2xl md:text-5xl lg:text-6xl "
            />

          </div>
          {/* =====Text===== */}
          <div className="w-full flex items-center justify-center lg:justify-start ">
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
      </Layout>
    </main>
  );
}
