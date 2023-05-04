import React from 'react';
import Marquee from 'react-fast-marquee';
import Amazon from '../assets/sponsors/amazon.png'
import Google from '../assets/sponsors/google.png'
import Telerama from '../assets/sponsors/telerama.png'
import Figma from '../assets/sponsors/figma.png'

const OurSponsors = () => {
    return (
        <div className='mt-20'>
            <h2 className='text-4xl mb-12 font-bold text-center'>Our Sponsors</h2>
            <Marquee>
                <div className='flex justify-evenly items-center gap-32'>
                    <img src={Amazon} alt="" />
                    <img src={Google} alt="" />
                    <img src={Telerama} alt="" />
                    <img src={Figma} alt="" />
                </div>

            </Marquee>
        </div>
    );
};

export default OurSponsors;