import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredDoctor } from '../../Utilities/AddToDB/addToDB';
import EmptyBookings from '../../Components/EmptyBookings/EmptyBookings';

const MyBookings = () => {
    const [appointmentList, setAppointmentList] = useState([]);
    const data = useLoaderData();

    useEffect(()=>{
        const storedDoctorData = getStoredDoctor();
        const appointmentList = storedDoctorData.filter(appointment=>storedDoctorData.includes(appointment.registration_number));
        setAppointmentList(appointmentList);
    },[data])

    return (
        <div className='w-4/5 mx-auto mb-20'>
            {/* Empty Bookings */}
            {
                appointmentList.length === 0 && <EmptyBookings></EmptyBookings>
            }
        </div>
    );
};

export default MyBookings;