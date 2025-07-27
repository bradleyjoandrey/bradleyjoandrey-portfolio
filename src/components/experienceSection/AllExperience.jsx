import React from 'react'
import SingleExperience from './SingleExperience'
import { FaArrowRight } from "react-icons/fa";
import {motion} from 'framer-motion';
import {fadeIn} from '../../framerMotion/variants';

const experiences = [
    {
        job: 'IT Intern',
        company: 'Petrobras Singapore Private Limited',
        date: 'Jul 2021 - Jan 2022',
        responsibilities: [
            'Delivered technical support to 40+ end-users, resolving software and network issues to ensure smooth operations.',
            'Developed VBA automation solutions that streamlined repetitive IT processes, cutting manual workload by up to 30%.',
            'Created interactive Excel dashboards with integrated automation to visualise IT ticket data, enabling faster issue identification and improved efficiency.',
        ],
    },
    {
        job: '...',
        company: '',
        date: '',
        responsibilities: [],
    },
    {
        job: '...',
        company: '',
        date: '',
        responsibilities: [],
    }
]

const AllExperience = () => {
    return (
        <div className='flex md:flex-row sm:flex-col items-center justify-between'>
            {experiences.map((experience, index) => {
                return (
                    <>
                    <SingleExperience key = {index} experience = {experience} />
                    {index < 2? (
                        <motion.div variants={fadeIn('right', 0.2)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.2}}>
                            <FaArrowRight className='text-6xl text-blue-500 lg:block sm:hidden'/>
                        </motion.div>
                    ) : ('')}
                        
                    </>
                );
            })}
        </div>
    );
};

export default AllExperience