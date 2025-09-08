import React from 'react';
import error from '../../assets/error.png'
import { NavLink } from 'react-router';
const ErrorPage = () => {
    return (
        <div className='h-screen pt-[30px] flex items-center justify-center'>
            <div class="container max-w-[400px] p-8 m-auto grid sm:max-w-[1200px] sm:grid-cols-2 sm:gap-8 lg:gap-[5rem]">
                <div class="header flex flex-col justify-end">
                    <h1 className='text-[4rem] font-black lg:text-[6rem]'>404</h1>
                    <h3 className='text-[2rem] font-black lg:text-[2.5rem]'>Page Not Found!</h3>
                </div>
                <img className='w-full max-w-[300px] mx-auto sm:max-w-[550px] sm:[grid-area:1/1/3/2]' src={error} alt="not found" />
                <div class="footer grid gap-8 place-content-baseline sm:max-w-[300px]">
                    <p className='text-base'>
                        We're sorry, the page you requested could not be found. Please go back
                        to the homepage!
                    </p>
                    <NavLink to="/" className="w-full"><button className='w-full flex justify-center items-center p-4 rounded-md text-white text-base font-semibold bg-[#176AE5] transition duration-300 hover:bg-white hover:text-[#176AE5] hover:border-3 hover:border-[#176AE5]'>GO HOME</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;