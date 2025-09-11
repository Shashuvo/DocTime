import React from 'react';
import { Link } from 'react-router';

const EmptyBookings = () => {
    return (
        <div className='text-center space-y-5'>
            <h1 className='text-3xl font-extrabold'>You haven’t made an appointment yet.</h1>
            <p className='opacity-30 font-bold'>Plan ahead — book your appointment today with trusted professionals.</p>

            <Link to="/"><button className='w-56  p-4 rounded-full text-white text-base font-semibold bg-[#176AE5] transition duration-300 hover:bg-white hover:text-[#176AE5] hover:border-3 hover:border-[#176AE5]'>Book Appointment</button></Link>
        </div>
    );
};

export default EmptyBookings;