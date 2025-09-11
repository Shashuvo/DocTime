import React, { useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = ({ details }) => {

    const [showAll, setShowAll] = useState(false);

    const visibleDoctors = showAll ? details : details.slice(0, 6);

    const handleToggle = () => {
        setShowAll(prev => !prev);
    }

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-4/5 md:w-full mx-auto'>
                {
                    visibleDoctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                }
            </div>
            {details.length > 6 && (
                <div className='text-center mt-[48px]'>
                    <button onClick={handleToggle}
                        className="btn  btn-outline rounded-3xl bg-[#176AE5] text-white hover:bg-white hover:text-[#176AE5] hover:border-2 hover:border-[#176AE5] text-[20px] font-bold p-6 ">
                        {showAll ? 'Show Less' : 'View All Doctors'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Doctors;