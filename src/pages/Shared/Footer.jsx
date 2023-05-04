import React from 'react';
import { FaGoogle, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='mt-10 md:mt-20 py-5 md:py-10 px-5 bg-gray-900 text-white  pl-5 md:pl-20'>
            <div className='justify-center grid grid-cols-2 gap-3 md:grid-cols-5'>
                <div className='w-48'>
                    <h2 className='text-2xl font-bold'>Yumpies</h2>
                    <p className='py-3 pr-10 md:py-0 mb-5'>Best recipe website with numerous functionality to let our users explore. Stay to get the best experience.</p>
                    <div className='flex items-center gap-2'>
                        <FaGoogle></FaGoogle>
                        <FaTwitter></FaTwitter>
                        <FaYoutube></FaYoutube>
                        <FaInstagram></FaInstagram>
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl font-bold mb-3'>Categories</h2>
                    <p>Meat recipe</p>
                    <p>Snacks Recipe</p>
                    <p>Main Dishes</p>
                    <p>Baked Items</p>
                </div>

                <div>
                    <h2 className='text-2xl font-bold mb-3 mt-5 md:mt-0'>Popular Recipes</h2>
                    <p>Meat recipe</p>
                    <p>Snacks Recipe</p>
                    <p>Main Dishes</p>
                    <p>Baked Items</p>
                </div>

                <div>
                    <h2 className='text-2xl font-bold mb-3 mt-6 md:mt-0'>Sponsors</h2>
                    <p>Figma</p>
                    <p>Amazon</p>
                    <p>Google</p>
                    <p>Telerama</p>
                </div>

                <div>
                    <h2 className='text-2xl font-bold mb-3'>Blogs</h2>
                    <p>Best Meat Recipes</p>
                    <p>Best BreakFast Recipes</p>
                    <p>Best Dinner Recipes</p>
                </div>
            </div>
            <div className='text-center mt-8'>
                <p>All rights reserved © 2023 Yumpies
</p>
            </div>
        </div>

    );
};

export default Footer;