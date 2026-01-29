import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = ({ news }) => {

    return (
        <div className='flex items-center bg-base-200 gap-5 p-3 mt-5 '>
            <p className='bg-secondary text-base-100 px-3 py-2'>LatestNews</p>
            <Marquee className='flex gap-10' pauseOnHover={true} speed={60}>
              
              {
                news.map(title => (<span key={title.id} className='px-2 font-semibold'>
                    **{title.title}

                </span>))
              }

            </Marquee>
        </div>
    );
};

export default LatestNews;