import React from 'react';
import { Navigate, createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import MyBookings from '../Pages/MyBookings/MyBookings';
import Blogs from '../Pages/Blogs/Blogs';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import DoctorDetails from '../Pages/DoctorDetails/DoctorDetails';

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: "/",
                loader: async () => {
                    await new Promise(resolve => setTimeout(resolve, 250));
                    return fetch('/doctorsData.json')
                },
                Component: Home
            },
            {
                path: "/home",
                element: <Navigate to="/" replace />
            },
            {
                path: "/my-bookings",
                loader: async () => {
                    await new Promise(resolve => setTimeout(resolve,250));
                    return fetch('/doctorsData.json')
                },
                Component: MyBookings
            },
            {
                path: "/blogs",
                Component: Blogs
            },
            {
                path: "/contactUs",
                element: <ErrorPage></ErrorPage>
            },
            {
                path:"/doctorDetails/:registration_number",
                loader: async () => {
                    await new Promise(resolve => setTimeout(resolve,250));
                    return fetch('/doctorsData.json')
                },
                Component:DoctorDetails,
            },
        ]
    }
])

export default router;