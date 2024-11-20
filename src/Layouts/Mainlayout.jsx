import React from 'react';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Outlet} from 'react-router-dom';
const Mainlayout = () => {
    return (
        <div>
            <ToastContainer />
            <Outlet />
           
        </div>
    );
};

export default Mainlayout;