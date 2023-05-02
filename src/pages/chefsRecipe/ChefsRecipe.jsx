import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleChefsRecipe from '../../components/SingleChefsRecipe';

const ChefsRecipe = () => {
    const recipes = useLoaderData();
    const [chefInfo, setChefInfo] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data => setChefInfo(data))
    }, [])

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