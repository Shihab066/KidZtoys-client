import React from 'react';
import errorPage from '../../assets/error.jpg'
import { Link } from 'react-router-dom';
import { useTitle } from '../../utilities/pageTitle';
const ErrorPage = () => {
    useTitle('404 page not found')
    return (
        <div className='text-center'>
            <img src={errorPage} className='w-[600px] mx-auto mt-20' alt="" />
            <h2 className='font-semibold text-3xl mb-10'>Page Not Found</h2>
            <Link to={'/'}><button className='btn btn-warning font-bold'>Back To Home</button></Link>
        </div>
    );
};

export default ErrorPage;