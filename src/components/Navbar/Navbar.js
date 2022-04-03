import React, { useState } from 'react';
import Logo from '../../images/asus-Logo.png';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='flex justify-between w-10/12 mx-auto py-6 '>
            <div className="logo">
                <img src={Logo} alt="not-found" />
            </div>
              <div className="main-menu bg-green-200 ">
                <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                 </div>
                <ul className={`md:flex justify-center absolute md:static bg-green-200 w-2/6 duration-500 ease-in ${open ? 'right-0 top-12': 'right-[-200px] right-0'}`}>
                    <li><Link className='lg:mr-4' to='/'>HOME</Link></li>
                    <li><Link className='lg:mr-4' to='/reviews'>REVIEWS</Link></li>
                    <li><Link className='lg:mr-4' to='/dashboard'>DASHBOARD</Link></li>
                    <li> <Link className='lg:mr-4' to='/blog'>BLOG</Link></li>
                    <li><Link className='lg:mr-4' to='/about'>ABOUT</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;