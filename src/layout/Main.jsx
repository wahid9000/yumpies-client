import React from 'react';
import NavigationBar from '../pages/Shared/NavigationBar';
import Home from '../pages/Home/Home';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div className='px-5 md:px-20'>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>

            <Toaster />
        </div>



    );
};

export default Main;