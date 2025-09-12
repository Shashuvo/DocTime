import React from 'react';

const AppointmentListCard = ({ appointment }) => {
    const { name, education, speciality, fee } = appointment;
    return (

        <div className='flex flex-col mb-8 bg-white rounded-3xl'>
            <div className='p-8'>
                <div className='flex flex-col gap-3 md:flex-row text-center lg:text-start justify-between items-center'>
                    <div className='flex flex-col gap-3'>
                        <h3 className='font-bold text-[20px]'>{name}</h3>
                        <p className='font-medium text-[14px] md:text-18px opacity-60'>{education} - {speciality}</p>
                    </div>
                    <div>
                        <p className='font-medium text-[14px] md:text-18px opacity-60'>Appointment Fee : {fee} Taka + Vat</p>
                    </div>
                </div>
                <div className=' border-b-2 border-dashed border-black/20 w-full my-4'></div>
                <button className='w-full font-semibold text-[18px] md:text-[20px] py-3 bg-white text-[#FF0000] hover:bg-[#FF0000] hover:text-white duration-300 btn transition rounded-full border-2 border-[#FF0000]'>Cancel Appointment</button>
            </div>
        </div>

    );
};

export default AppointmentListCard;
