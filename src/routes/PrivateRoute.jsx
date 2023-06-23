import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import loadingLogo from '../assets/loading.gif'
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const loaction = useLocation();

    if (loading) {
        return <div className='h-[500px] flex justify-center items-center'>
            <div><img src={loadingLogo} className='' alt="" /></div>
        </div>
    }
    if (user) {
        return children
    }

    return (
        <>
            {alert("Login First, Without a login, you can not visit the single toy details page")}
            <Navigate to={'/login'} state={{ from: loaction }} replace></Navigate>
            
        </>
    )

};

export default PrivateRoute;