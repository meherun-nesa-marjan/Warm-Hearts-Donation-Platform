import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useContext(AuthContext); 
  const navigate = useNavigate();

  const handleUpdateProfile = () => {
    navigate('/UpdateProfile');
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col items-center text-center">
        <h1 className="text-5xl font-bold">Welcome, {user?.displayName || "User"}!</h1>
        <p className="py-6">Here is your profile information:</p>

        <div className="card bg-base-100 w-96 shadow-xl p-6">
        
          <figure className="mb-4">
            <img
              src={user?.photoURL
                || "https://via.placeholder.com/150"}
              alt="User Profile"
              className="rounded-full w-32 h-32"
            />
          </figure>

        
          <div className="card-body text-left">
            <p><strong>Name:</strong> {user?.displayName || "No name provided"}</p>
            <p><strong>Email:</strong> {user?.email || "No email provided"}</p>
          </div>

      
          <div className="card-actions justify-end">
            <button onClick={handleUpdateProfile} className="btn bg-[#137257] text-white">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
