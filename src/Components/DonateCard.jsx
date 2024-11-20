import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const DonateCard = ({ CampaignData }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      {CampaignData.map((campaignData) => (
        <div key={campaignData.id} className="card bg-base-100 shadow-xl">
          <figure>
            <img className='h-80' src={campaignData.image} alt={campaignData.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{campaignData.title}</h2>
            <p>{campaignData.description}</p>
            <p>Location: {campaignData.division}</p>
            <div className="card-actions justify-end">
              <Link
                to={user ? `/DonationDetails` : '/Login'}
                state={{ CampaignData: campaignData }}
              >
                <button className="btn bg-[#137257] text-white">Donate Now</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DonateCard;
