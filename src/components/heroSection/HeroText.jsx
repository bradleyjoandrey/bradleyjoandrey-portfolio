import React from 'react'

const HeroText = () => {
    return (
        <div className='flex text-white flex-col gap-4 h-full justify-center md:text-left sm:text-center'>
            <h2 className='lg:text-2xl sm:text-xl uppercase text-cyan'>Year 2 Undergraduate | Seeking Internship Opportunities</h2>
            <h1 className='md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special bg-gradient-to-r from-blue-700 to-blue-300 bg-clip-text text-transparent'>Bradley Joandrey</h1>
            <p className='text-lg mt-4 '>An aspiring tech professional 
                <br/>studying Information Systems at SMU, 
                <br/>with a keen interest in data and cybersecurity
            </p>
        </div>
    );
}

export default HeroText