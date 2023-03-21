import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import GoToTop from '../Pages/Shared/GoToTop/GoToTop';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <GoToTop></GoToTop>
            <Footer></Footer>
        </div>
    );
};

export default Main;