import React from 'react';
import Navbar from '../componenets/shared/navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../componenets/shared/footer/footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;