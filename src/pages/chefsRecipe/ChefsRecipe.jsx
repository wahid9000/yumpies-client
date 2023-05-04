import { useLoaderData } from 'react-router-dom';

import { FaBriefcase, FaCookie, FaThumbsUp } from 'react-icons/fa';
import SingleChefsRecipe from './SingleChefsRecipe';

const ChefsRecipe = () => {
    const chefsInfo = useLoaderData();
    return (
        <div>

            <div>
                <div className="card lg:card-side bg-teal-200 shadow-xl mx-auto w-[70%] my-10 ">
                    <figure><img className='rounded-lg ml-2 my-2' src={chefsInfo.image} alt="Album" /></figure>
                    <div className="card-body w-[100%] md:w-[50%]">
                        <h2 className="card-title font-bold">{chefsInfo.name}</h2>
                        <p className=''>{chefsInfo.details}</p>
                        
                        <div className='flex justify-start gap-3 mt-2'>
                        <div className='flex items-center gap-1.5'>
                          <FaBriefcase></FaBriefcase>
                          <p>{chefsInfo.year_of_experience}years</p>  
                        </div>
                        <div className='flex items-center gap-1.5'>
                            <FaCookie></FaCookie>
                            <p>{chefsInfo.number_of_recipes}recipes</p>
                        </div>
                        <div className='flex items-center gap-1.5'>
                            <FaThumbsUp></FaThumbsUp>
                            <p>{chefsInfo.likes}</p>
                        </div>
                        

                    </div>
                        
                    </div>
                </div>
            </div>


            <div>
                <h2 className='text-2xl font-bold text-center mt-5'>Get The Taste Of The Best Recipe From {chefsInfo.name}</h2>
                <div className='grid lg:grid-cols-3 mt-10 gap-5'>
                    {
                        chefsInfo?.recipes?.map(chefRecipe => <SingleChefsRecipe
                            key={chefRecipe.id}
                            chefRecipe={chefRecipe}
                        ></SingleChefsRecipe>)
                    }
                </div>
            </div>

        </div>
    );
};

export default ChefsRecipe;