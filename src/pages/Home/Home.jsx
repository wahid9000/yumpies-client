import React from 'react';
import HeaderBanner from '../../components/HeaderBanner';
import { useLoaderData } from 'react-router-dom';
import ChefsCards from '../../components/ChefsCards';

const Home = () => {
    const chefsInfo = useLoaderData();
    return (
        <div>
            <HeaderBanner></HeaderBanner>
            <div className='mt-10'>
                <h2 className='text-4xl mb-10 font-bold text-left'>Our Chefs</h2>
                <div className='grid grid-cols-3 gap-5'>
                    {
                        chefsInfo.map(chef => <ChefsCards

                            key={chef.id}
                            chef={chef}

                        ></ChefsCards>)
                    }
                </div>

            </div>

        </div>

    );
};

export default Home;