import React from 'react'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion';

function Dropdown({drop,dropf}) {
    const variants ={
        close:{
            height:0,
        },
        open:{
            height:'250px',  
        }
    } 
return (
<>
    <motion.div
    variants={variants}
    initial='close'
    animate={drop ? 'open' : 'close'}
    transition={{type:'spring',stiffness:100,duration:0.5}}
     className={drop?'bg-yellow-500 grid grid-rows-4 w-full text-center':'hidden'} onClick={dropf}>
        <Link to='/#' className='nav-link'>Home</Link>
        <Link to='/#' className='nav-link'>Menu</Link>
        <Link to='/#' className='nav-link'>About</Link>
        <Link to='/#' className='nav-link'>Contact</Link>
    </motion.div>

</>
)
}

export default Dropdown