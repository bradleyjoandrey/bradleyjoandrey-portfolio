import React from 'react'
import { LuArrowUpRight } from "react-icons/lu";
import { IoLogoLinkedin } from "react-icons/io5";


const NavbarBtn = () => {
    return (
        <a href="https://www.linkedin.com/in/bradley-joandrey-bj88/" target="_blank" rel="noopener noreferrer" className='px-4 py-3 rounded-full text-xl font-bold text-white border-blue-500 border flex items-center justify-center gap-2 bg-gradient-to-r from-blue-400 to-blue-600 hover:border-darkCyan hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow'>
            <div className='flex items-center gap-1'>
                <IoLogoLinkedin className='text-xl' />
                <span className='leading-none translate-y-0.5'>LinkedIn</span>
                <LuArrowUpRight className='text-xl sm:hidden md:block' />
            </div>
        </a>
    )

};

export default NavbarBtn