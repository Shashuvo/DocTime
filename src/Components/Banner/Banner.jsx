import React from 'react';
import bannerImg from '../../assets/banner-img-1.png'

const Banner = () => {
    return (
        <div className='border-3 bg-linear-to-b from-[#FFFFFF]/0 to-[#FFFFFF]/100 border-white w-11/12 mx-auto rounded-3xl'>
            {/* title and description */}
            <div className='pt-8 lg:pt-16 w-3/4 mx-auto mb-6'>
                <h1 className='font-extrabold text-2xl lg:text-5xl text-center mb-4'>Dependable Care, Backed by Trusted <br className='hidden' />Professionals.</h1>
                <p className='font-medium text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            {/* search */}
            <div className='w-2/3 mx-auto flex flex-col lg:flex-row gap-4 mb-6'>
                <input type="text" placeholder="Search any doctor..." className="w-full input input-ghost bg-white rounded-3xl border-2 border-[#176AE5] focus:outline-[#176AE5] focus:border-2 focus:border-[#176AE5]" />
                <button className="btn btn-outline w-full lg:w-1/4 rounded-3xl bg-[#176AE5] text-white hover:bg-white hover:text-[#176AE5] hover:border-2 hover:border-[#176AE5] ">Search Now</button>
            </div>
            {/* image */}
            <div className='flex pb-[64px] w-11/12 mx-auto gap-6'>
                <img src={bannerImg} alt="Banner Image" />
                <img className='hidden md:block' src={bannerImg} alt="Banner Image" />
            </div>
        </div>
    );
};

export default Banner;