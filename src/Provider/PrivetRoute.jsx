import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loader from '../Page/Loader';

const PrivetRoute = ({ children }) => {
    const { user, loader } = use(AuthContext);
    const location = useLocation(); 

    if (loader) {
        return <Loader></Loader>   
    }

    if (user && user?.email) {
        return (children);
    };
    return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>


};

export default PrivetRoute;