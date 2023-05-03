import React from 'react';
import Steak from '../assets/steak.webp';
import { FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeaderBanner = () => {
    return (
        <div className='md:flex justify-evenly px-16 mt-8 items-center bg-slate-100 py-20 rounded-xl shadow-xl'>
            <div className='text-center md:text-left '>
                <h1 className='text-5xl font-bold'>
                    Explore and Learn <br /> Best Recipes
                </h1>
                <p className=' my-5'>We have added amazing recipes from some of the top chefs <br /> in United States. Explore and Enjoy!</p>
                <Link to="/login"><button className="mb-5 btn btn-warning rounded-md hover:text-white hover:bg-red-600">Get Started<FaSignInAlt className='ml-2'></FaSignInAlt></button></Link>
            </div>
            <div>
                <img src={Steak} className='w-96  rounded-2xl' alt="" />
            </div>
        </div>
    );
};

export default HeaderBanner;