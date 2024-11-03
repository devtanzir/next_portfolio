"use client"
import Lottie from 'lottie-react';
import Coming from "@/lottie/coming-soon.json"

const ComingSoon = () => {
    return (
        <div className='flex justify-center items-center w-full h-[90vh]'>
        <div className='w-[400px] m-auto text-center'>
        <Lottie animationData={Coming} loop autoplay />
        <h6 style={{wordSpacing: "7px"}} className='text-gray-400 text-center font-bold text-[20px] uppercase mt-2'>Coming Soon !</h6>
        
        </div>
        </div>
    );
};

export default ComingSoon;