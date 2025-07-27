import React from 'react'
import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import NavbarBtn from './NavbarBtn';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

const NavbarMain = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <div className="fixed top-0 left-0 w-full z-30 bg-black h-[120px]">
            <nav className='max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-40 flex mt-2'>
                <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-darkGrey items-center p-6 rounded-r-full rounded-l-full border-darkCyan border-[2px] ">
                    <NavbarLogo/>
                    <div className={`${menuOpen? 'sm:block':'sm:hidden'} lg:block`}>
                        <NavbarLinks/>
                    </div>               
                    <NavbarBtn/>
                </div>
                <div className='flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full border-[2px] border-darkCyan ml-[20px]'>
                    <button className="text-2xl p-3 border border-blue-500 rounded-full text-white " onClick = {toggleMenu}>             
                        <GiHamburgerMenu/>
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default NavbarMain