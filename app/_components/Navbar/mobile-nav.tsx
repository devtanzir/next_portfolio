import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
interface LinkProps {
  href: string;
  title: string;
  className?: string;
  toggle: () => void;
}
const MobileNav: React.FC<LinkProps> = ({
  href,
  title,
  className = "",
  toggle,
}) => {
  const path = usePathname();

  const handleClick = () => {
    toggle();
  };

  return (
    <Link
      href={href}
      className={`${className} relative group my-2 text-light dark:text-dark`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${path === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default MobileNav;
