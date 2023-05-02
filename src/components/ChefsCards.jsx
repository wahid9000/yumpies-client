import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const ChefsCards = ({ chef }) => {
    const {id, name, image, year_of_experience, number_of_recipes, likes} = chef;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} className='rounded-lg h-48' alt="chef" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='flex items-center gap-2'><FaBriefcase></FaBriefcase>{year_of_experience}years</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefsCards;