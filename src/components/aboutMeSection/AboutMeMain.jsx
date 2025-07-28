import React from 'react'
import AboutMeText from './AboutMeText'
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

// This component serves as the main container for the "About Me" section.
// It arranges the text and any future content on larger screens
// and stacks them vertically on smaller screens using Tailwind CSS responsive classes.

const AboutMeMain = () => {
    return (
        <div id='about' className='flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] mb-[150px] justify-between items-center '>
            <motion.div variants={fadeIn('right', 0.2)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.5 }}>
                <AboutMeText />
            </motion.div>
            

        </div>
    )
}

export default AboutMeMain