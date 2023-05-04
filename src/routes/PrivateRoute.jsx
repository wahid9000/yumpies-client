import React, { useContext } from 'react';
import { AuthContext } from '../pages/Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Audio, RotatingLines } from 'react-loader-spinner'

const PrivateRoute = ({children}) => {
    const location = useLocation();

    const {user, loading} = useContext(AuthContext);
    if(loading) {
        return <div><RotatingLines
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      /></div>
    
    }
    if(user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>

    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;