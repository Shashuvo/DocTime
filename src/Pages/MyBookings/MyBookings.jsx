import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredDoctor } from '../../Utilities/AddToDB/addToDB';
import EmptyBookings from '../../Components/EmptyBookings/EmptyBookings';
import AppointmentList from '../../Components/AppointmentList/AppointmentList';
import { Bounce, ToastContainer, toast } from 'react-toastify';

const MyBookings = () => {
    const [appointmentList, setAppointmentList] = useState([]);
    const data = useLoaderData();

    useEffect(() => {
        const storedDoctorData = getStoredDoctor();
        const appointmentList = data.filter(appointment => storedDoctorData.includes(appointment.registration_number));
        setAppointmentList(appointmentList);
    }, [data]);

    const handleCancel = (registration_number) => {
        const updateAppointmentList = appointmentList.filter(doctor => doctor.registration_number !== registration_number);
        toast.error(`The appointment was cancelled successfully.`, {
            autoClose: 2000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            transition: Bounce,
        });

        setTimeout(() => {
            setAppointmentList(updateAppointmentList);;
        }, 2000);
    }

    return (
        <div className='w-4/5 mx-auto mb-20'>
            <ToastContainer
                closeOnClick
                pauseOnFocusLoss
            />
            {/* Empty Bookings */}
            {
                appointmentList.length === 0 && <EmptyBookings></EmptyBookings>
            }
            {/* Appointment List */}
            {
                appointmentList.length > 0 && <AppointmentList key={appointmentList.id} onCancel={handleCancel} appointmentList={appointmentList}></AppointmentList>
            }
        </div>
    );
};

export default MyBookings;