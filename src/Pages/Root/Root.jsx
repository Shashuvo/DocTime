import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet, useLocation, useNavigation } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';

const Root = () => {
    const navigation = useNavigation();
    const isLoading = (navigation.state === 'loading');
    const location = useLocation();
    return (
        <div className='bg-[#EFEFEF]'>
            <ScrollToTop></ScrollToTop>
            {location.pathname !== "/contactUs" && <Navbar></Navbar>}
            {
                isLoading && (
                    <div className="fixed inset-0 flex justify-center items-center bg-black/40 z-50">
                        <span className="loading loading-bars loading-xl"></span>
                    </div>
                )
            }
            <Outlet key={location.pathname}></Outlet>
            {location.pathname !== "/contactUs" && <Footer></Footer>}
        </div>
    );
};

export default Root;