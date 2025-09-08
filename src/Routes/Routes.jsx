import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import MyBookings from '../Pages/MyBookings/MyBookings';
import Blogs from '../Pages/Blogs/Blogs';
import ContactUs from '../Pages/ContactUs/ContactUs';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';

const router =createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                index: true,
                path: "/",
                Component: Home
            },
            {
                path:"/my-bookings",
                Component:MyBookings
            },
            {
                path:"/blogs",
                Component:Blogs
            },
            {
                path:"/contactUs",
                Component:ContactUs
            }
        ]
    }
])

export default router;