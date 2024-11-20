import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet, useLocation } from 'react-router-dom';
const PageTitle = () => {
    const location = useLocation();

    useEffect(() => {
        switch (true) {
            case location.pathname === "/":
                document.title = "WarmHearts";
                break;

            case location.pathname === "/Campaigns":
                document.title = "WarmHearts|Campaigns";
                break;

            case location.pathname === "/HowToHelp":
                document.title = "WarmHearts|How to Help";
                break;

            case location.pathname.startsWith("/DonationDetails"):
                document.title = "WarmHearts|Donation Details";
                break;

            case location.pathname === "/Dashboard" ||
                location.pathname.startsWith("/Dashboard/"):
                document.title = "WarmHearts|Dashboard";
                break;

            case location.pathname === "/UpdateProfile":
                document.title = "WarmHearts|Update Profile";
                break;

            case location.pathname === "/Login":
                document.title = "WarmHeartsLogin";
                break;

            case location.pathname === "/Registration":
                document.title = "WarmHearts|Register";
                break;

            case location.pathname === "/ForgotPassword":
                document.title = "WarmHearts|Forgot Password";
                break;

            default:
                document.title = "WarmHearts";
                break;
        }
    }, [location]);

    return null;
};
const Mainlayout = () => {

    return (
        <div>
            
            <ToastContainer />
            <PageTitle />
            <div className="">
            <Outlet />
            </div>
            

        </div>
    );
};

export default Mainlayout;