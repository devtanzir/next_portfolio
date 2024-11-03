"use client"
import Lottie from 'lottie-react';
import NotFound from "@/lottie/404.json"
import Link from 'next/link';

const NotFoundComponent = () => {
    return (
        <div className='flex justify-center items-center w-full h-[90vh]'>
            <div className='w-[400px] m-auto text-center'>
            <Lottie animationData={NotFound} loop autoplay />
            <h6 style={{wordSpacing: "7px"}} className='text-gray-400 text-center font-bold text-[20px] uppercase mb-5'>Maybe You Are Lost !</h6>
            <Link
            href={`/`}
            className="flex bg-dark dark:bg-light text-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:dark:bg-dark hover:text-dark hover:dark:text-light border-2 border-solid border-transparent hover:border-dark hover:dark:border-light md:p-2 md:px-4 md:text-base md:w-full md:items-center text-center justify-center"
          >
           Go Home
          </Link>
            </div>
        </div>
    );
};

export default NotFoundComponent;
