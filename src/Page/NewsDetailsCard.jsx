import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    const { image_url, title, details } = news
    console.log(news)
    return (
        <div className='border border-gray-100 shadow-xl rounded p-5 mt-5'>

            <figure>
                <img className=' w-full rounded' src={image_url} alt="" />
            </figure>

            <div className='py-5'>
                <h1 className='font-bold text-4xl'>{title}</h1>
                <p className='text-accent pt-5'>{details}</p>
            </div>


            <Link to={`/category/${news.category_id}`} ><a className='btn btn-secondary px-8 my-3'><FaArrowLeft></FaArrowLeft> All news in this category</a></Link>


        </div>
    );
};

export default NewsDetailsCard;