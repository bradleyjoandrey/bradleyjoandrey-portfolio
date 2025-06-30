import React from 'react'
import { LuArrowDownRight } from "react-icons/lu"; //imported from https://react-icons.github.io/react-icons/search/#q=arrow%20down%20right

const NavbarBtn = () => {
    return (
        <button className='px-4 py-2 rounded-full text-xl font-bold text-white border-blue-500 border flex items-center gap-1 bg-gradient-to-r from-blue-400 to-blue-600 hover:border-darkCyan hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow'>
            Contact Me
            <div className='sm:hidden md:block'>
                <LuArrowDownRight />
            </div>
        </button>
    )
    
};

export default NavbarBtn