import React, { useContext }  from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';
const Privet = ({children}) => {
    const { user, loading} = useContext(AuthContext)
    if (loading) {
        return (
          <div className="flex justify-center items-center h-screen">
            <span className="loading loading-bars loading-sm"></span>
          </div>
        );
      }
    if(user){
        return children;
    }
    return (
       <Navigate to={'/Login'}></Navigate>
    );
};

export default Privet;