import React from 'react';
import { Link } from 'react-router-dom';

const PopularRecipes = ({ recipe }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={recipe.image} alt="recipe" /></figure>
            <div className="card-body mt-[40%]">
                <div>
                    <h2 className="card-title text-white">{recipe.recipe_name}</h2>
                    <p className='text-white'>{recipe.details}</p>
                </div>
                <div className="card-actions justify-center">
                <Link to={`/chefs/${recipe.chef_id}`}><button className="btn btn-warning rounded-lg mt-5">View Details</button></Link>
                </div>
            </div>
        </div>












        // <div className="card w-96 glass">
        //     <figure><img src={recipe.image} alt="car!" /></figure>
        //     <div className="card-body">
        //         <h2 className="card-title font-bold">{recipe.recipe_name}</h2>
        //         <p>{recipe.details}</p>
        //         <div className="card-actions justify-center">
        //             <Link to={`/chefs/${recipe.chef_id}`}><button className="btn btn-warning rounded-lg mt-5">View Details</button></Link>
        //         </div>
        //     </div>
        // </div>
    );
};

export default PopularRecipes;