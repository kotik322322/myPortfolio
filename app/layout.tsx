import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Script from 'next/script';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} font-medium bg-light w-full min-h-screen dark:bg-dark`}>
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
            } else {
          document.documentElement.classList.remove('dark')
          }`}
        </Script>
        <NavBar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
