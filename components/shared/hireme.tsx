"use client"
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HireLink = motion.create(Link)

const HireMe = () => {

    return (
        <>
        <HireLink whileTap={{scale:.9}} href="mailto:tanziribneali@gmail.com" className='flex items-center justify-center fixed left-10 translate-x-10 -translate-y-10 bottom-10 bg-dark  text-light  shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark md:w-12 md:h-12 md:text-[10px] animate-wave '> Hire Me</HireLink>
        </>
    );
};

export default HireMe;
