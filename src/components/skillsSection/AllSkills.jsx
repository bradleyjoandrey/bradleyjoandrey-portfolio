import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { VscTerminalBash } from "react-icons/vsc";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import SingleSkill from './SingleSkill';
import {motion} from 'framer-motion';
import {fadeIn} from '../../framerMotion/variants';


// create an array 
const skills = [
    {
        skill: 'HTML',
        icon: FaHtml5,
    },
    {
        skill: 'CSS',
        icon: FaCss3Alt,
    },
    {
        skill: 'JavaScript',
        icon: IoLogoJavascript,
    },
    {
        skill: 'PHP',
        icon: FaPhp,
    },
    {
        skill: 'SQL',
        icon: SiMysql,
    },
    {
        skill: 'Python',
        icon: FaPython,
    },
    {
        skill: 'Bash Commands',
        icon: VscTerminalBash,
    },
];

const AllSkills = () => {
    return (
        <div>
            <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
                {skills.map((item, index) => {
                    return (
                        <motion.div variants={fadeIn('up', `0.${index}`)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.5}}>
                            <SingleSkill key = {index} text = {item.skill} imgSvg = {<item.icon/>}/>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    )
}

export default AllSkills