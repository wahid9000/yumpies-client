import React from 'react';
import NavigationBar from '../pages/Shared/NavigationBar';
import Home from '../pages/Home/Home';

const Main = () => {
    return (
        <div className='px-5 md:px-20'>
            <NavigationBar></NavigationBar>
            <Home></Home>
        </div>



    );
};

export default Main;