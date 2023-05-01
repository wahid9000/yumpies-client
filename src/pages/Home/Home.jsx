import React from 'react';
import Steak from '../../assets/steak.webp';
import { FaSignInAlt } from 'react-icons/fa';

const Home = () => {
    return (
        <div className='flex justify-evenly px-16 mt-16 items-center'>
            <div className='pl-5'>
                <h1 className='text-5xl font-bold'>
                    Explore and Learn Best Recipes
                </h1>
                <p className=' my-5'>We have added amazing recipes from some of the top chefs in United States. <br /> Explore and Enjoy!</p>
                <button className="btn btn-warning rounded-md hover:text-white hover:bg-red-600">Get Started<FaSignInAlt className='ml-2'></FaSignInAlt></button>
            </div>
            <div>
                <img src={Steak} className='w-96 h-96 rounded-2xl'  alt="" />
            </div>
        </div>
    );
};

export default Home;