// import React, { useEffect, useState } from 'react';
import { use } from 'react';
import Header from '../Component/Header/Header';
import RightAside from '../Component/HomeLayout/RightAside';
import NewsDetailsCard from './NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const NewsDetails = () => {

    const data = useLoaderData();
    const {user} = use(AuthContext);
    const { id } = useParams();
     const news = data.find((singleNews) => singleNews.id == id);

    // const [news, setNews] = useState({});
   
    // useEffect(() => {

    //     const newsDetails = data.find((singleNews) => singleNews.id == id);
    //     setNews(newsDetails);

    // }, [data, id]);


    return (
        <div>
            <header>
                <Header></Header>
            </header>

            <main className='w-10/12 mx-auto my-6 grid grid-cols-12 gap-6 py-10 '>

                <section className='col-span-9'>
                    <h1 className='font-bold'>Dragon News User : <span className='font-medium text-gray-400'>{user.email}</span></h1>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>

                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>


            </main>

        </div>
    );
};

export default NewsDetails;