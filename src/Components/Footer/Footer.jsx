import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Footer = () => {

    const links = <>
        <NavLink to="/"><a className="link link-hover font-medium hover:text-[#176AE5]">Home</a></NavLink>
        <NavLink to="/my-bookings"><a className="link link-hover font-medium hover:text-[#176AE5]">My-Bookings</a></NavLink>
        <NavLink to="/blogs"><a className="link link-hover font-medium hover:text-[#176AE5]">Blogs</a></NavLink>
        <NavLink to="/contactUs"><a className="link link-hover font-medium hover:text-[#176AE5]">Contact Us</a></NavLink>
    </>


    return (
        <div>
            <footer className="footer footer-horizontal footer-center text-base-content rounded p-10 bg-white">
                {/* Logo + Title */}
                <nav>
                    <div className='flex items-center justify-center '>
                        <img className=' h-[46px] w-[46px]' src="logo.png" alt="Logo" />
                        <a className="btn btn-ghost text-[32px] font-extrabold hover:bg-[#176AE5] hover:text-white ">DocTime</a>
                    </div>
                </nav>
                {/* Links */}
                <nav className="grid grid-flow-col gap-4 border-b-3 border-base-300 lg:w-3/5 pb-12">
                    <div className='flex justify-center items-center lg:gap-12 lg:text-[18px] opacity-70 gap-4'>
                        {links}
                    </div>
                </nav>
                {/* Social Links */}
                <nav>
                    <div className="grid grid-flow-col gap-6">
                        <a href="https://www.facebook.com/shahariat.hossen.524" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF size={36} className='hover:scale-140 hover:cursor-pointer duration-300' color="#1877F2" />
                        </a>
                        <a href="https://www.linkedin.com/in/shahariat-hossen-045456279/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={36} className='hover:scale-140 hover:cursor-pointer duration-300' color="#0A66C2" />
                        </a>
                        <a href="https://github.com/Shashuvo" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={36} className='hover:scale-140 hover:cursor-pointer duration-300' color="#333" />
                        </a>
                        <a href="https://www.instagram.com/o__shuv__o/?__pwa=1" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={36} className='hover:scale-140 hover:cursor-pointer duration-300' color="#E1306C" />
                        </a>
                    </div>
                </nav>
                {/* copyrights */}
                <aside>
                    <p className='opacity-70 text-[18px]'>Copyright © {new Date().getFullYear()} - All right reserved by DocTime</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;