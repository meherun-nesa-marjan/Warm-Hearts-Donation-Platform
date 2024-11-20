import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Bannar from '../Components/Bannar';
import About from '../Components/About';
import Work from '../Components/Work';
import Ourimpact from './Ourimpact';
import Volunteer from './Volunteer';
const MainHome = () => {
    const CampaignData = useLoaderData()
    return (
        <div>
            <Bannar key={CampaignData.id} CampaignData={CampaignData} />
            <About />
            <Work />
            <Ourimpact />
            <Volunteer />
        </div>
    );
};

export default MainHome;