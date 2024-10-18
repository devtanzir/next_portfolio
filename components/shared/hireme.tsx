"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const HireLink = motion.create(Link);

const HireMe = () => {
  return (
    <>
      <HireLink
        whileTap={{ scale: 0.9 }}
        href="mailto:tanziribneali@gmail.com"
        className="flex items-center justify-center fixed left-10 translate-x-10 -translate-y-10 bottom-10 bg-dark dark:bg-light  text-light dark:text-dark  shadow-md border border-solid border-dark dark:border-light w-20 h-20 rounded-full font-semibold hover:bg-light hover:dark:bg-dark hover:dark:text-light hover:text-dark md:w-12 md:h-12 md:text-[10px] animate-wave md:right-10 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0 md:-translate-x-10 md:translate-y-6"
      >
        Hire Me
      </HireLink>
    </>
  );
};

export default HireMe;
