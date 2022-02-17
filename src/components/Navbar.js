import React, { useState } from 'react';
import {Link} from 'react-router-dom';


const Navbar = ({dropf}) => {


return <nav className='navbar' role='navigation' >
    <Link to='/' className='pl-8' >EGG</Link>
    <div className='mobile-menu' onClick={dropf} >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    </div>
    

    <div className='link-list'>
    <Link to='/#' className='nav-link' >Home</Link>
    <Link to='/#' className='nav-link' >Menu</Link>
    <Link to='/#' className='nav-link' >About</Link>
    <Link to='/#' className='nav-link' >Contact</Link>
    </div>
</nav>;
};

export default Navbar;