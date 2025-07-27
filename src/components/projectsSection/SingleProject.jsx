import React from 'react'
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import {motion} from 'framer-motion';
import {fadeIn} from '../../framerMotion/variants';


const SingleProject = ({name, year, align, image, link}) => {
    return (
        <motion.div variants={fadeIn(align, 0.2)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0}} className={`flex w-full sm:flex-col-reverse items-center gap-8 ${align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} justify-end`}>
            <div className={`flex flex-col sm:items-center ${align === 'left' ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
                <h2 className='md:text-3xl sm:text-2xl text-cyan'>{name}</h2>
                <h2 className='text-xl font-light text-gray-400 font-special sm:text-center'>{year}</h2>
                <a href={link} target='_blank' className='text-lg flex gap-2 items-center sm:justify-center md:justify-start text-lightCyan hover:text-blue-800 transition-all duration-500 cursor-pointer'>
                View <HiArrowTopRightOnSquare/>
                </a>
            </div>
            <div className='max-h-[220px] max-w-[400px] overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white'>
                <img src={image} alt="Project Image" className='w-full h-full'/>
            </div>
        </motion.div>
    )
}

export default SingleProject