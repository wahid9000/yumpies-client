import { useLoaderData  } from 'react-router-dom';
import SingleChefsRecipe from '../../components/SingleChefsRecipe';

const ChefsRecipe = () => {
    const chefsInfo = useLoaderData();
    return (
        <div>
            <h2 className='text-2xl font-bold text-center mt-5'>Get The Taste Of The Best Recipe</h2>
            <div className='grid grid-cols-3 mt-10'>
                {
                    chefsInfo?.recipes?.map(chefInfo => <SingleChefsRecipe
                    key={chefInfo.id}
                    chefInfo = {chefInfo}    
                    ></SingleChefsRecipe>)
                }
            </div>
        </div>
    );
};

export default ChefsRecipe;