import React from 'react'

// This component displays my fullname with a gradient text style.
// It switches between a long name (desktop) and a shorter name (mobile).

const NavbarLogo = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent sm:hidden md:block'>Bradley Joandrey</h1>
            <h1 className='bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent font-special font-extrabold text-2xl sm:block md:hidden'>Bradley</h1>
        </div>
    );
};

export default NavbarLogo