import React from 'react'
import { PiCircleThin } from "react-icons/pi";
import {motion} from 'framer-motion';
import {fadeIn} from '../../framerMotion/variants';

const HeroPic = () => {
    return (
        <motion.div variants={fadeIn('left', 0.2)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0}} className='h-full flex items-center justify-center'>
            <img src={`${import.meta.env.BASE_URL}images/HeroImage.png`} alt='Bradley Joandrey' className='max-h-[400px] w-auto'></img>
            <div className='absolute -z-10 flex justify-center items-center animate-pulse'>
                <PiCircleThin className='md:h-[90%] sm:h-[120%] min-h-[530px] w-auto text-gray-600 blur-md animate-[pulse_6s_ease-in-out_infinite]'/> 
            </div>
        </motion.div>
    )
}

export default HeroPic
