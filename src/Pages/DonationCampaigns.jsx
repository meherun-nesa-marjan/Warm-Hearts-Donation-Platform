import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DonateCard from '../Components/DonateCard';

const DonationCampaigns = () => {
    const CampaignData = useLoaderData()
    return (
        <div className='lg:w-10/12 mx-auto'>
            <div className="hero">
                <div className="hero-content text-center">
                    <div className="my-10">
                        <h1 className="font-bold text-3xl my-4">Donation Campaigns</h1>
                        <p>
                        WarmHearts organizes a Winter Cloth Collection and Distribution Program every year to stand with helpless and impoverished people against the severity of cold in winter. Donation collection, warm cloth collection and distribution, and the W.Clothing Donation charity hoodie are the main features of this program. The main reason behind this program is to spread warmth and put a smile on the faces of needy people.
                        </p>


                    </div>
                </div>
            </div>
            <div className="">
                <DonateCard key={CampaignData.id} CampaignData={CampaignData} />

            </div>
        </div>
    );
};

export default DonationCampaigns;