import React from 'react';
import { Outlet} from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Home = () => {
   
    return (
        <div className=''>
             <Navbar />
            <div className="min-h-[calc(100vh-508px)]">
                <Outlet />
            </div>
            <Footer />
           
        </div>
    );
};

export default Home;