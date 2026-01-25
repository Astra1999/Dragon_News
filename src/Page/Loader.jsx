import React from 'react';

const Loader = () => {
    return (
        <div className='flex min-h-screen justify-center items center '>
            <span className='font-semibold text-2xl'>loading  <span class="loading loading-dots loading-md"></span> </span>
        </div>
    );
};

export default Loader;