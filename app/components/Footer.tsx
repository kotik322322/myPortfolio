import React from 'react';
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-sm dark:text-light dark:border-light ">
      <Layout className="py-4 md:py-8 flex flex-col gap-y-4 sm:flex-row items-center justify-center sm:gap-x-10 ">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex flex-col sm:flex-row items-center">
          {' '}
          Build with{' '}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>by&nbsp;{' '}
          <Link href="/" className="underline underline-offset-2">
            Kostiantyn Marfin
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
