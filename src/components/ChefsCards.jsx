import React from 'react';
import { FaBriefcase, FaCookie, FaThumbsUp } from 'react-icons/fa';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';

const ChefsCards = ({ chef }) => {
    const { id, name, image, year_of_experience, number_of_recipes, likes } = chef;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <LazyLoad height={200}>
                    <figure><img src={image} className='rounded-lg h-48 shadow-lg mt-5' alt="chef" /></figure>
                </LazyLoad>
                
                <div className="card-body mt-2">
                    <h2 className="text-2xl font-bold text-center">{name}</h2>
                    <div className='flex justify-evenly mt-2'>
                        <div className='flex items-center gap-1.5'>
                          <FaBriefcase></FaBriefcase>
                          <p>{year_of_experience}years</p>  
                        </div>
                        <div className='flex items-center gap-1.5'>
                            <FaCookie></FaCookie>
                            <p>{number_of_recipes}recipes</p>
                        </div>
                        <div className='flex items-center gap-1.5'>
                            <FaThumbsUp></FaThumbsUp>
                            <p>{likes}</p>
                        </div>
                        

                    </div>

                    <div className="card-actions justify-center mt-5">
                        <Link to={`/chefs/${id}`}><button className="btn btn-warning rounded-md hover:bg-red-600 hover:text-white">View Recipes</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefsCards;