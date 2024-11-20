import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../Pages/Home";
import DonationCampaigns from "../Pages/DonationCampaigns.JSX";
import Error from "../Pages/Error";
import DonationDetails from "../Components/DonationDetails";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import MainHome from "../Components/MainHome";
import Privet from "../Components/Privet";
import Dashboard from "../Components/Dashboard";
import Updateprofile from "../Components/Updateprofile";
import Forgetpass from "../Components/Forgetpass";
import HowToHelp from "../Components/HowToHelp";



const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,

        children: [
          {
            path: "/",
            element: <MainHome />,
            loader: () => fetch('../Donate.json'),
          },
          {
            path: "/Campaigns",
            element: <DonationCampaigns />,
            loader: () => fetch('../Donate.json'),
          },
          {
            path:"/HowToHelp",
            element:<HowToHelp />
          },

          {
            path: "/DonationDetails",
            element: <Privet><DonationDetails /></Privet>,
          },
          {
            path: "/Dashboard",
            element:<Privet><Dashboard /></Privet>,
          },
          {
            path:"/UpdateProfile",
            element:<Privet><Updateprofile /></Privet>
          },
        
        ]
      },


      {
        path: "/Login",
        element: <Login />,

      },
      {
        path: "/ForgetPassword",
        element: <Forgetpass />,

      },
      {
        path: "/Registration",
        element: <Registration />,

      },


    ]


  },


]);
export default Routes;