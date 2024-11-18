import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Mainlayout = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-[calc(100vh-508px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Mainlayout;