import React from 'react';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router';
import Doctors from '../../Components/Doctors/Doctors';
import MedicalServices from '../../Components/MedicalServices/MedicalServices';
const Home = () => {
    const details = useLoaderData();
    return (
        <div>
            {/* Banner */}
            <Banner></Banner>

            {/* Doctors Section */}
            <div className='w-4/5 mx-auto mb-20'>
                {/* title */}
                <div className='gap-4 flex flex-col mb-8'>
                    <h1 className='font-extrabold lg:text-[40px] text-center text-3xl'>Our Best Doctors</h1>
                    <p className='text-center lg:w-4/5 mx-auto'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                </div>
                <div>
                    <Doctors details={details}></Doctors>
                </div>
            </div>
            {/* Medical Services */}
            <div className='w-4/5 mx-auto mb-20'>
                <div className='gap-4 flex flex-col mb-8'>
                    <h1 className='font-extrabold lg:text-[40px] text-center text-3xl'>We Provide Best Medical Services</h1>
                    <p className='text-center lg:w-4/5 mx-auto'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
                </div>

                <div>
                    <MedicalServices></MedicalServices>
                </div>
            </div>
        </div>
    );
};

export default Home;