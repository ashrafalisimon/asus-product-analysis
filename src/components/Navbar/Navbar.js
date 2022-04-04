import React, { useState } from 'react';
import Logo from '../../images/asus-Logo.png';
import { Link, NavLink } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='flex justify-between w-10/12 mx-auto py-6 '>
            <div className="logo">
                <img src={Logo} alt="not-found" />
            </div>
              <div className="main-menu bg-green-300 ">
                <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                 </div>
                <ul className={`md:flex justify-center absolute md:static bg-green-300 w-2/6 duration-500 ease-in ${open ? 'right-0 top-12': 'top-[-500px] right-0'}`}>
                    <li><NavLink className= {({ isActive }) => (isActive ? "text-green-900 font-bold md:mr-2 lg:mr-4 p-2" : "md:mr-2 lg:mr-4 p-2")}
                     to='/'>HOME</NavLink></li>
                    <li><NavLink className= {({ isActive }) => (isActive ? "text-green-900 font-bold md:mr-2 lg:mr-4 p-2" : "md:mr-2 lg:mr-4 p-2")} to='/reviews'>REVIEWS</NavLink></li>
                    <li><NavLink className= {({ isActive }) => (isActive ? "text-green-900 font-bold md:mr-2 lg:mr-4 p-2" : "md:mr-2 lg:mr-4 p-2")} to='/dashboard'>DASHBOARD</NavLink></li>
                    <li> <NavLink className= {({ isActive }) => (isActive ? "text-green-900 font-bold md:mr-2 lg:mr-4 p-2" : "md:mr-2 lg:mr-4 p-2")} to='/blog'>BLOG</NavLink></li>
                    <li><NavLink className= {({ isActive }) => (isActive ? "text-green-900 font-bold p-2" : "p-2")} to='/about'>ABOUT</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;