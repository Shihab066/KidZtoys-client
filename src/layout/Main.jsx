import React from 'react';
import Navbar from '../SharedPages/Navbar/Navbar';
import Footer from '../SharedPages/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;