import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Bannar from '../Components/Bannar';
import About from '../Components/About';
import Work from '../Components/Work';
const MainHome = () => {
    const CampaignData = useLoaderData()
    return (
        <div>
            <Bannar key={CampaignData.id} CampaignData={CampaignData} />
            <About />
            <Work />
        </div>
    );
};

export default MainHome;