import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {

    const links = <>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'border-b-3 border-[#176AE5] pb-1' : '')}><li className='font-medium'>Home</li></NavLink>
        <NavLink to="/my-bookings" className={({ isActive }) => (isActive ? 'border-b-3 border-[#176AE5] pb-1' : '')}><li className='font-medium'>My-Bookings</li></NavLink>
        <NavLink to="/blogs" className={({ isActive }) => (isActive ? 'border-b-3 border-[#176AE5] pb-1' : '')}><li className='font-medium'>Blogs</li></NavLink>
        <NavLink to="/contactUs" className={({ isActive }) => (isActive ? 'border-b-3 border-[#176AE5] pb-1' : '')}><li className='font-medium'>Contact Us</li></NavLink>
    </>

    return (
        <div className="navbar lg:w-4/5 mx-auto py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    {/* small device */}
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-4">
                        {links}
                    </ul>
                </div>
                <div className='flex items-center'>
                <img className='hidden md:block lg:h-[46px] lg:w-[46px]' src="logo.png" alt="Logo" />
                <a className="btn btn-ghost text-[32px] font-extrabold hover:bg-[#176AE5] hover:text-white ">DocTime</a>
                </div>
            </div>
            {/* Large Device */}
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 lg:gap-12 opacity-70 text-[18px]">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-[#176AE5] text-white font-bold lg:text-[20px] rounded-full lg:px-[30px] lg:py-[20px] transition  hover:bg-[#EFEFEF] hover:text-[#176AE5] duration-300 hover:border-3 hover:border-[#176AE5]">Emergency</a>
            </div>
        </div>
    );
};

export default Navbar;