import React from 'react';
import successDoctor from '../../assets/success-doctor.png';
import successReview from '../../assets/success-review.png';
import successPatients from '../../assets/success-patients.png'
import successStaffs from '../../assets/success-staffs.png'
import CountUp from 'react-countup';


const MedicalServices = () => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div className="card bg-base-100 w-full shadow-sm rounded-2xl flex items-start px-12 py-10">
                <figure>
                    <img
                        src={successDoctor}
                        alt="Success Doctor" />
                </figure>
                <div>
                    <h2 className='text-[64px] font-extrabold'><CountUp end={199} duration={10} delay={3}></CountUp>+</h2>
                    <p className='font-semibold text-2xl opacity-60'>Total Doctors</p>
                </div>
            </div>

            <div className="card bg-base-100 w-full shadow-sm rounded-2xl flex items-start px-12 py-10">
                <figure>
                    <img
                        src={successReview}
                        alt="Success Review" />
                </figure>
                <div>
                    <h2 className='text-[64px] font-extrabold'><CountUp end={467} duration={10} delay={3}></CountUp>+</h2>
                    <p className='font-semibold text-2xl opacity-60'>Total Reviews</p>
                </div>
            </div>

            <div className="card bg-base-100 w-full shadow-sm rounded-2xl flex items-start px-12 py-10">
                <figure>
                    <img
                        src={successPatients}
                        alt="Success Patients" />
                </figure>
                <div>
                    <h2 className='text-[64px] font-extrabold'><CountUp end={1900} duration={10} delay={3}></CountUp>+</h2>
                    <p className='font-semibold text-2xl opacity-60'>Total Patients</p>
                </div>
            </div>

            <div className="card bg-base-100 w-full shadow-sm rounded-2xl flex items-start px-12 py-10">
                <figure>
                    <img
                        src={successStaffs}
                        alt="Success Staffs" />
                </figure>
                <div>
                    <h2 className='text-[64px] font-extrabold'><CountUp end={300} duration={10} delay={3}></CountUp>+</h2>
                    <p className='font-semibold text-2xl opacity-60'>Total Staffs</p>
                </div>
            </div>
        </div>
    );
};

export default MedicalServices;