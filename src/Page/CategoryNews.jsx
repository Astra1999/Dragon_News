import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Component/HomeLayout/NewsCard';

const CategoryNews = () => {

    const { id } = useParams();
    const data = useLoaderData();

    const [categoryNews, setCategoryNews] = useState([])

    useEffect(() => {


        if (id == "0") {
            setCategoryNews(data)
            return;
        }
        else if (id == "1") {
            const filteredNews = data.filter(news => news.others.is_today_pick == true);

            setCategoryNews(filteredNews)
            return;
        }

        else {
            const filteredNews = data.filter(news => news.category_id == id);
            console.log(filteredNews)
            setCategoryNews(filteredNews)
            return;
        }

    }, [data, id])


    return (
        <div>
            <h1 className='font-bold mb-4'>
                Total <span className='text-secondary'>{categoryNews.length}</span> News Found </h1>

            <div className='grid grid-cols-1 gap-5  shadow-2xl'>
                {
                    categoryNews.map(news => <NewsCard key={categoryNews.id} news={news} ></NewsCard>)
                }
            </div>

        </div>


    );
};

export default CategoryNews;