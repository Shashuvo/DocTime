import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredDoctor } from '../../Utilities/AddToDB/addToDB';
import EmptyBookings from '../../Components/EmptyBookings/EmptyBookings';
import AppointmentList from '../../Components/AppointmentList/AppointmentList';

const MyBookings = () => {
    const [appointmentList, setAppointmentList] = useState([]);
    const data = useLoaderData();

    useEffect(()=>{
        const storedDoctorData = getStoredDoctor();
        const appointmentList = data.filter(appointment=>storedDoctorData.includes(appointment.registration_number));
        setAppointmentList(appointmentList);
    },[data]);

    return (
        <div className='w-4/5 mx-auto mb-20'>
            {/* Empty Bookings */}
            {
                appointmentList.length === 0 && <EmptyBookings></EmptyBookings>
            }
            {/* Appointment List */}
            {
                appointmentList.length > 0 && <AppointmentList key={appointmentList.id} appointmentList={appointmentList}></AppointmentList>
            }
        </div>
    );
};

export default MyBookings;