"use client"
import React from 'react';
import { motion } from "framer-motion";

const quote = {
    initial:{
        opacity:1,
    },
    animate:{
        opacity:1,
        transition:{
            delay:0.5,
            staggerChildren:0.08,
        }
    }
}

const singleWord = {
    initial:{
        opacity:0,
        y:50,
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:0.5,
        }
    }
}
interface AnimateProps {
    text: string;
    className?: string;
}
const AnimatedText:React.FC<AnimateProps> = ({text, className=""}) => {
    return (
        <div className='w-full mx-auto py-0 flex items-center justify-center text-center overflow-hidden sm:py-2'>
            <motion.h1 className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className}`}
            variants={quote}
            initial="initial"
            animate="animate"
            >
            {
                text.split(" ").map((word:string, index:number) => (
                    <motion.span key={`${word}-${index}`} className='inline-block'
                    variants={singleWord}
                    >
                        {word}&nbsp;
                    </motion.span>
                ))
            }
            </motion.h1>
        </div>
    );
};

export default AnimatedText;