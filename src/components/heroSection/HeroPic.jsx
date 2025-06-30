import React from 'react'
import { PiCircleThin } from "react-icons/pi";

const HeroPic = () => {
    return (
        <div className='h-full flex items-center justify-center'>
            <img src='../../public/images/HeroImage.png' alt='Bradley Joandrey' className='max-h-[500px] w-auto'></img>
            <div className='absolute -z-10 flex justify-center items-center animate-pulse'>
                <PiCircleThin className='md:h-[90%] sm:h-[120%] min-h-[500px] w-auto text-gray-700 blur-md animate-[pulse_6s_ease-in-out_infinite]'/> 
            </div>
        </div>
    )
}

export default HeroPic