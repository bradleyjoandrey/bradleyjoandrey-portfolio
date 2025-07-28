import React from 'react'
import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import NavbarBtn from './NavbarBtn';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

// This component renders the entire navigation bar at the top, including:
// - My name (NavbarLogo)
// - Navigation links
// - The LinkedIn button
// - A responsive hamburger menu for mobile screens

const NavbarMain = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    const closeMenu = () => setMenuOpen(false);

    return (
        <div className="fixed top-0 left-0 w-full z-30 bg-black h-[120px]">
            <nav className='w-full max-w-screen-xl mx-auto px-2 fixed left-0 right-0 z-40 flex mt-2'>
                <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-darkGrey items-center p-4 rounded-r-full rounded-l-full border-darkCyan border-[2px] ">
                    <NavbarLogo />
                    <div className={`${menuOpen ? 'sm:block' : 'sm:hidden'} lg:block`}>
                        <NavbarLinks closeMenu={closeMenu} />
                    </div>
                    <NavbarBtn />
                </div>
                <div className='flex lg:hidden sm:block p-4 bg-black items-center justify-center rounded-full border-[2px] border-darkCyan ml-2'>
                    <button className="text-4xl p-3 text-white " onClick={toggleMenu}>
                        <GiHamburgerMenu />
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default NavbarMain