import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../Pages/Home";
import DonationCampaigns from "../Pages/DonationCampaigns.JSX";


const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout />,
      children:[
        {
            path:"/",
            element: <Home />,
        },
        {
            path:"/Campaigns",
            element: <DonationCampaigns />
        },
        

      ]
     
    },
  ]);
  export default Routes;