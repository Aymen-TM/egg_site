import React from 'react';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
   

return <div className='hero-container'>
    <motion.h1
     initial={{scale:0}}
     animate={{scale:1}}
     transition={{duration:0.5,delay:0.5}}
     className='hero-title'>EGGCELLENT</motion.h1>
    <Link to='/#' className='hero-btn'>
    Order Now
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
    </Link>
</div>;
};

export default Hero;