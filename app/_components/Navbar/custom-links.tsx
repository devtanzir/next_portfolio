"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface LinkProps {
  href: string;
  title: string;
  className?: string;
}
const CustomLink: React.FC<LinkProps> = ({ href, title, className = "" }) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`${className} relative group text-dark dark:text-light`}
    >
      {title}

      <span
        className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
            ${path === href ? "w-full" : "w-0"}
          `}
      >
        &nbsp;
      </span>
    </Link>
  );
};
export default CustomLink;
