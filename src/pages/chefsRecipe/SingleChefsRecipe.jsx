import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaHeart,  FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';


const SingleChefsRecipe = ({ chefRecipe }) => {

    const { recipe_name, ingredients, ratings, cooking_method } = chefRecipe;

    const [enable, setEnable] = useState(true);

    const handleAddToFavourite = () => {
        toast("Added To Favourites");
        setEnable(false);
    }



    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl border">
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{recipe_name}</h2>
                    <h3 className='text-lg font-semibold'> Required Ingredients:</h3>
                    <ul className='pl-5'>
                        {ingredients.map(ingredient => {
                            return <li className='list-disc'>{ingredient}</li>
                        })}
                    </ul>
                    <h3 className='text-lg font-semibold'> Cooking Method:</h3>
                    <p>{cooking_method}</p>

                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-1 mt-5'>
                            <Rating
                                placeholderRating={ratings}
                                readonly
                                emptySymbol={<FaRegStar></FaRegStar>}

                                placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                            />
                            <span>{ratings}</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaShareAlt></FaShareAlt>
                        </div>
                    </div>
                    <div className='text-center mt-5'>
                        <button disabled={!enable} onClick={handleAddToFavourite} className="btn bg-red-700 rounded-lg text-white hover:bg-yellow-600"><FaHeart className='mr-1'></FaHeart>Add To Favourites</button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default SingleChefsRecipe;