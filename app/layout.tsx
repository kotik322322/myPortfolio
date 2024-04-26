import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' });



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} font-mont bg-light w-full min-h-screen`}>
      <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
