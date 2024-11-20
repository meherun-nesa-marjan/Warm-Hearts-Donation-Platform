import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Updateprofile = () => {
    const { user, UpdateUserProfile } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
    const navigate = useNavigate();
  
    const handleUpdateProfile = (e) => {
      e.preventDefault();
      const updatedData = { displayName: name, photoURL };
  
      UpdateUserProfile(updatedData)
        .then(() => {
          console.log("Profile updated successfully");
          navigate("/Dashboard");
        })
        .catch((error) => {
          console.error("Error updating profile:", error.message);
        });
    };
  
    return (
      <div className="min-h-screen flex justify-center items-center bg-base-200">
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Update Profile</h2>
          <form onSubmit={handleUpdateProfile}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered w-full"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="photoURL" className="block text-sm font-medium">
                Photo URL
              </label>
              <input
                type="text"
                id="photoURL"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="input input-bordered w-full"
                placeholder="Enter your photo URL"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full mt-4"
            >
              Update Information
            </button>
          </form>
        </div>
      </div>
    );
};

export default Updateprofile;