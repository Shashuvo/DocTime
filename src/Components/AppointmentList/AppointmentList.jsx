import React from 'react';
import AppointmentListCard from '../AppointmentListCard/AppointmentListCard';
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const AppointmentList = ({ appointmentList, onCancel }) => {
    const doctorData = appointmentList.map((doctor) => ({
        name: doctor.name,
        fee: parseInt(doctor.fee)
    }));

    const randomColor = () => {
        const letters = "456789ABCD";
        let color = "#";

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * letters.length)];
        }

        return color;
    };


    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
            ${x + width / 2}, ${y}
            C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
            Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };


    return (
        <div>
            {/* Graph */}
            <div className='bg-white rounded-3xl md:p-12 mb-[70px] md:mb-[100px]'>
                <p className="p-4 text-center text-lg font-semibold block md:hidden">
                    Scroll to see all doctors →
                </p>
                <div className='overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100'>
                    <div className='min-w-[700px]'>
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart data={doctorData} margin={{ top: 20, right: 20, left: 5, bottom: 5, }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" tick={{ fontSize: 13 }} />
                                <YAxis />
                                <Bar dataKey="fee" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                    {doctorData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={randomColor()} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            {/* Appointments */}
            <div className='text-center space-y-2 mb-8'>
                <h1 className='font-extrabold text-[40px]'>My Today Appointments</h1>
                <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
            </div>

            <div>
                {
                    appointmentList.map(appointment => <AppointmentListCard key={appointment.id} onCancel={onCancel} appointment={appointment}></AppointmentListCard>)
                }
            </div>
        </div>
    );
};

export default AppointmentList;