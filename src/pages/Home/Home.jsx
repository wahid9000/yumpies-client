import React from 'react';
import HeaderBanner from '../../components/HeaderBanner';
import { useLoaderData } from 'react-router-dom';
import ChefsCards from '../../components/ChefsCards';
import Quick from '../../components/Quick/Quick';
import PopularRecipes from '../../components/PopularRecipes';
import OurSponsors from '../../components/OurSponsors';
import Subscribe from '../../components/Subscribe';


const Home = () => {
    const chefsInfo = useLoaderData();
    return (
        <div>
            <HeaderBanner></HeaderBanner>

            <div className='mt-16 text-center'>
                <h2 className='text-4xl mb-12 font-bold text-center'>We Love Our Chefs</h2>
                <div className='justify-center grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    {
                        chefsInfo.map(chef => <ChefsCards

                            key={chef.id}
                            chef={chef}

                        ></ChefsCards>)
                    }
                </div>
            </div>

            <Quick></Quick>


            <div className='mt-16'>
                <h2 className='text-4xl mb-12 font-bold text-center'>Popular Recipes</h2>
                <div className='justify-center grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        chefsInfo.map((chef) =>
                            chef?.recipes?.slice(0, 1).map((recipe) => <PopularRecipes

                                key={recipe.chef_id}
                                recipe={recipe}
                            ></PopularRecipes>))
                    }
                </div>
            </div>

            <Subscribe></Subscribe>
            <OurSponsors></OurSponsors>







        </div>

    );
};

export default Home;