import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center bg-base-200 gap-5 p-3 mt-5 '>
            <p className='bg-secondary text-base-100 px-3 py-2'>LatestNews</p>
            <Marquee className='flex gap-10' pauseOnHover={true} speed={60}>
                <p className='font-bold'> 1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eaque voluptate rerum sit, est quibusdam laboriosam saepe maiores sapiente rem dolores quo perferendis assumenda voluptatum consequatur enim. Delectus, facilis ipsa.</p>
                <p className='font-bold'> 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eaque voluptate rerum sit, est quibusdam laboriosam saepe maiores sapiente rem dolores quo perferendis assumenda voluptatum consequatur enim. Delectus, facilis ipsa.</p>
                <p className='font-bold'> 3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eaque voluptate rerum sit, est quibusdam laboriosam saepe maiores sapiente rem dolores quo perferendis assumenda voluptatum consequatur enim. Delectus, facilis ipsa.</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;