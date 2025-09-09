import React from 'react';
import { PiTrademarkRegisteredLight } from 'react-icons/pi';
import { useLoaderData, useParams } from 'react-router';
import AvailableDay from '../../Components/AvailableDay/AvailableDay';

const DoctorDetails = () => {
    const { registration_number } = useParams();
    const data = useLoaderData();
    console.log(registration_number, data);
    const showDoctor = data.find((doctor) => doctor.registration_number === registration_number);
    const { image, name, education, speciality, hospital, available_days, fee } = showDoctor;
    return (
        <div className='w-4/5 mx-auto mb-[78px]'>
            {/* profile details */}
            <div className='bg-white rounded-2xl mb-8'>
                <h1 className='text-center font-extrabold text-xl lg:text-[32px] pt-[40px] pb-2'>Doctor’s Profile Details</h1>
                <p className='text-center font-medium opacity-70 pb-[40px]'>Healing with Trust, Serving with Care.</p>
            </div>
            {/* doctors details */}
            <div className="hero bg-white rounded-3xl ">
                <div className="hero-content flex flex-col lg:flex-row lg:items-stretch justify-between lg:justify-start lg:mx-[56px] gap-3 lg:gap-6 lg:py-[56px]">
                    {/* image container */}
                    <div className="lg:w-1/3 lg:h-auto flex">
                        <img
                            src={image}
                            alt="Doctor Image"
                            className="rounded-3xl shadow-sm w-full object-cover lg:h-full"
                        />
                    </div>
                    {/* content container */}
                    <div className='w-11/12 lg:w-2/3 flex justify-center flex-col text-center md:text-start lg:h-full '>
                        <h1 className="text-[32px] font-extrabold mb-2">{name}</h1>
                        <p className='font-medium text-[18px] opacity-60'>{education}</p>
                        <p className='font-medium text-[18px] opacity-60'>{speciality}</p>
                        <div className='my-2 '>
                            <p className='font-medium text-[20px] opacity-50'>Working at</p>
                            <p className='font-bold text-[20px]'>{hospital}</p>
                        </div>
                        <div className=' border-b-2 border-dashed border-black/20 w-full my-3'></div>
                        <p className='flex gap-2 font-medium text-[18px] opacity-70  items-center'><PiTrademarkRegisteredLight size={30} />Reg No: {registration_number}</p>
                        <div className=' border-b-2 border-dashed border-black/20 w-full my-4'></div>
                        <p className='flex flex-col md:flex-row gap-2 items-center mb-3'><span className='font-bold'>Availability:</span>
                            {
                                available_days.map((availableDay, index) => <AvailableDay key={index} availableDay={availableDay}></AvailableDay>)
                            }
                        </p>
                        <p className='lg:flex lg:items-center'>
                            <span className='font-extrabold mr-2'>Consultation Fee: </span><span className='font-extrabold text-[#176AE5] mr-1'>Taka : {fee}</span> <span className='font-medium opacity-70 mr-1'> (incl. Vat) </span> <span className='font-medium text-[#176AE5]'>Per consultation</span>
                        </p>
                    </div>
                </div>
            </div>
            {/* book appointment */}
            <div>

            </div>
        </div>
    );
};

export default DoctorDetails;