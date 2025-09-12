import React from 'react';
import AppointmentListCard from '../AppointmentListCard/AppointmentListCard';

const AppointmentList = ({appointmentList}) => {
    // const doctorData = appointmentList.map((doctor)=>{
    //     name: doctor.name;
    //     fee: parseInt(doctor.fee);
    // });
    // console.log(doctorData)
    return (
        <div>
            {/* Graph */}
            <div>

            </div>
            {/* Appointments */}
            <div className='text-center space-y-2 mb-8'>
                <h1 className='font-extrabold text-[40px]'>My Today Appointments</h1>
                <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
            </div>

            <div>
                {
                    appointmentList.map(appointment=><AppointmentListCard key={appointment.id} appointment={appointment}></AppointmentListCard>)
                }
            </div>
        </div>
    );
};

export default AppointmentList;