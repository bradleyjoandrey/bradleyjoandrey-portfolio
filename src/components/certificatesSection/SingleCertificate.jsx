import React from 'react'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const SingleCertificate = ({ name, embedCode, publicLink }) => {
  return (
    <motion.div variants={fadeIn('up', 0.2)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0 }} className='p-4 w-full max-w-[350px] h-[400px] border-[2px] border-gray-400 rounded-lg text-center bg-black hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 transition-transform duration-500 flex flex-col overflow-hidden'>
      <h3 className='text-white font-bold text-lg mb-2 flex-shrink-0'>{name}</h3>
      <div className='flex-1 flex items-center justify-center mb-4 min-h-0 overflow-hidden'>
        <div
          className='flex items-center justify-center max-w-full max-h-full overflow-hidden [&>*]:max-w-full [&>*]:max-h-full [&>*]:mx-auto [&_iframe]:max-w-full [&_iframe]:max-h-full [&_iframe]:border-0'
          style={{ 
            background: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          dangerouslySetInnerHTML={{ __html: embedCode }}
        />
      </div>
      <div className='flex-shrink-0 flex justify-center'>
        <a href={publicLink} target='_blank' rel='noopener noreferrer' className='text-base text-lightCyan hover:text-blue-800 transition-all duration-500 cursor-pointer flex items-center gap-2 w-fit'>
          View on Credly <HiArrowTopRightOnSquare />
        </a>
      </div>
    </motion.div>
  );
};

export default SingleCertificate