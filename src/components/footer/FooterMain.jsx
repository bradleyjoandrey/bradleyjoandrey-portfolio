import React from 'react';
import { Link } from "react-scroll";

const links = [
    {link: "About Me", section: "about"},
    {link: "Skills", section: "skills"},
    {link: "Experience", section: "experience"},
    {link: "Projects", section: "projects"},
    {link: "Certificates", section: "certificates"},
];

const FooterMain = () => {
    return (
        <div className='px-4 py-8 mt-32'>
            <div className='w-full h-[2px] bg-white mt-60'>

            </div>
            <div className='md:flex sm:hidden justify-between mt-8 mb-4 max-w-[1200px] mx-auto'>
                <p className='text-3xl text-blue-500'>Bradley Joandrey</p>
                <ul className='flex gap-4 text-blue-700 text-xl'>
                    {links.map((item, index) => {
                        return (<li key={index}>
                                    <Link spy={true} smooth={true} duration={500} offset={-120} to={item.section} className='hover:text-cyan transition-all duration-500 cursor-pointer'>{item.link}</Link>
                                </li>);
                    })}
                </ul>
            </div>
        </div>
    )
}

export default FooterMain