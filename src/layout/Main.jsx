import React from 'react';
import NavigationBar from '../pages/Shared/NavigationBar';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Footer from '../pages/Shared/Footer';

const Main = () => {
    return (
        <div>
            <div className='px-5 md:px-20'>
                <NavigationBar></NavigationBar>
                <Outlet></Outlet>
            </div>
            
            <Footer></Footer>

            <Toaster />
        </div>



    );
};

export default Main;