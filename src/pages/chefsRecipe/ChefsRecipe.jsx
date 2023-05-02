import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleChefsRecipe from '../../components/SingleChefsRecipe';
import SingleChefInfo from '../../components/SingleChefInfo';

const ChefsRecipe = () => {
    const recipes = useLoaderData();

    return (
        <div>
            <h2 className='text-2xl font-bold text-center mt-5'>Get The Taste Of The Best Recipe</h2>
            <div className='grid grid-cols-3 mt-10'>
                {
                    recipes.map(recipe => <SingleChefsRecipe
                        key={recipe.id}
                        recipe = {recipe}
                    
                    ></SingleChefsRecipe>)
                }
                
            </div>
        </div>
    );
};

export default ChefsRecipe;