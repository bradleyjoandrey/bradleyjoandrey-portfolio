import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const ExperienceText = () => {
    return (
        <motion.div variants={fadeIn('down', 0.2)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.2 }} className='flex flex-col items-center mt-[100px]'>
            <h2 className='text-6xl text-blue-700 mb-5'>Experience</h2>
        </motion.div>
    )
}

export default ExperienceText