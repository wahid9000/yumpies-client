import React from 'react';
import Recipe from "../assets/recipe.jpg"
import { MapContainer, TileLayer, useMap } from 'react-leaflet'

const Subscribe = () => {
    return (
        <div className='mt-16'>
            <div className='rounded-2xl'>



                <div className="grid md:grid-cols-3 justify-center">
                    <div className="md:col-span-2">
                        <img src={Recipe} alt="" />
                    </div>






                    <div className="text-center bg-gray-900 text-white ">
                        <div className='mt-10 md:mt-32'>
                            <h2 className='font-bold text-3xl mb-1'>Subscribe</h2>
                            <p className='font-semibold text-lg mb-5'>We will send you new recipes, offers and <br /> amazing tips every week.</p>

                            <input type="text" placeholder="Write your email" className="input mb-3 input-bordered rounded-md w-72 md:w-80 max-w-xs text-black font-semibold" />
                            <button className='btn btn-warning rounded-md mb-5'>Share</button>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Subscribe;