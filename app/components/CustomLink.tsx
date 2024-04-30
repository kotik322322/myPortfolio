"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

interface CustomLinkProps {
    href: string;
    title: string;
    className?: string;
  }
  
  export const CustomLink = ({ href, title, className }: CustomLinkProps) => {
    const pathName = usePathname()
    return (
      <Link href={href} className={`${className} relative group`}>
        {title}
        <span className={`h-[1px] inline-block w-0  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${pathName === href ? "w-full" : "w-0"} dark:bg-light`}>&nbsp;</span>
      </Link>
    );
  };