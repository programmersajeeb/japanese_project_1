import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    // const {admin} = useAuth();
    const { user, isLoading } = useAuth();

    let location = useLocation();
    if (isLoading) {
        return <img src="https://jthemes.net/themes/html/medservices/files/images/loader.gif" alt="" />
    }
    if (user.email) {
        return children;
    }
    return <Navigate to="/signin" state={ { from: location } }  replace />;
};

export default AdminRoute;