"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/constants/navbar";
import MobileNav from "./mobile-nav";
import SocialLink from "./social-link";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        className="flex-col justify-center items-center hidden lg:flex my-2 text-light dark:text-dark"
        onClick={handleClick}
      >
        <span
          className={`bg-dark transition-all duration-300 ease-out dark:bg-light block h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark transition-all duration-300 ease-out dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark transition-all duration-300 ease-out dark:bg-light block h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      {isOpen ? (
        <div
          className="min-w-full min-h-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          onClick={handleClick}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="min-w-[70vw] z-30 flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
          >
            <nav className="flex items-center flex-col justify-center">
              {navLinks.map((item) => (
                <MobileNav
                  key={item.id}
                  href={item.to}
                  title={item.name}
                  toggle={handleClick}
                />
              ))}
            </nav>

            <SocialLink mobile />
          </motion.div>
        </div>
      ) : null}
    </>
  );
};

export default MobileMenu;
