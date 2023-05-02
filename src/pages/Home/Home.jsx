import React from 'react';
import HeaderBanner from '../../components/HeaderBanner';
import { useLoaderData } from 'react-router-dom';
import ChefsCards from '../../components/ChefsCards';
import Quick from '../../components/Quick/Quick';


const Home = () => {
    const chefsInfo = useLoaderData();
    return (
        <div>
            <HeaderBanner></HeaderBanner>

            <div className='mt-16'>
                <h2 className='text-4xl mb-12 font-bold text-left'>Our Chefs</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        chefsInfo.map(chef => <ChefsCards

                            key={chef.id}
                            chef={chef}

                        ></ChefsCards>)
                    }
                </div>
            </div>

            <Quick></Quick>



        </div>

    );
};

export default Home;