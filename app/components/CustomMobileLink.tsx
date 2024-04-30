'use client';
import { usePathname, useRouter } from 'next/navigation';

interface CustomMobileLinkProps {
  href: string;
  title: string;
  className?: string;
  toggleMenu: () => void;
}

const CustomMobileLink = ({ href, title, className = '', toggleMenu }: CustomMobileLinkProps) => {
  const pathName = usePathname();
  const router = useRouter();
  const handleClick = () => {
    toggleMenu();
    router.push(href);
  };
  return (
    <button className={`${className} relative group text-light dark:text-dark`} onClick={handleClick}>
      {title}
      <span
        className={`h-[1px] inline-block w-0  bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-dark ${
          pathName === href ? 'w-full' : 'w-0'
        }`}>
        &nbsp;
      </span>
    </button>
  );
};

export default CustomMobileLink;
