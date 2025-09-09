import React from 'react';
import { PiTrademarkRegisteredLight } from 'react-icons/pi';

const Doctor = ({ doctor }) => {
    const { image, name, experience, education, speciality, hospital, registration_number, available_days } = doctor;

    const today = new Date().toLocaleString('en-US', { weekday: 'long' });
    const isAvailable = available_days.includes(today);

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm p-8 rounded-2xl">
                <figure className='rounded-2xl'>
                    <img
                        className='w-full h-[248px] rounded-2xl'
                        src={image}
                        alt="Doctor Image" />
                </figure>
                <div className="card-body p-0 mt-3">
                    <div className='flex gap-2 mb-2'>
                        <div className={`badge rounded-2xl p-3 font-medium text-sm ${isAvailable ? "text-[#09982F] bg-[#09982F]/10 border-[#09982F]/20" : "text-[#982F09] bg-[#982F09]/10 border-[#982F09]/20"}`}>
                            {isAvailable ? 'Available' : 'Unavailable'}
                        </div>
                        <div className="badge rounded-2xl text-[#176AE5] bg-[#176AE5]/10 border-[#176AE5]/20 p-3 font-medium text-sm">{experience} Experience</div>
                    </div>
                    <h2 className="card-title mb-2 text-2xl font-extrabold">
                        {name}
                    </h2>
                    <p className='border-b-2 border-dashed border-gray-400 pb-4 mb-2 font-medium text-[18px] opacity-60'>{education} - {speciality}, {hospital}</p>


                    <p className='mb-2 flex gap-2 items-center font-medium text-[18px] opacity-70'><PiTrademarkRegisteredLight size={30} />Reg No: {registration_number}</p>
                    <div>
                        <button
                            className="btn btn-outline btn-primary w-full rounded-4xl text-[20px] text-[#176AE5] font-bold border-[#176AE5] hover:bg-[#176AE5] hover:text-white">
                            View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;