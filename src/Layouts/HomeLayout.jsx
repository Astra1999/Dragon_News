import React from 'react';
import { Outlet, useLoaderData, useNavigation } from 'react-router';
import Header from '../Component/Header/Header';
import LatestNews from '../Component/Header/LatestNews';
import Navbar from '../Component/Header/Navbar';
import LeftAside from '../Component/HomeLayout/LeftAside';
import RightAside from '../Component/HomeLayout/RightAside';
import Loader from '../Page/Loader';

const HomeLayout = () => {

    const data = useLoaderData();
    const { state } = useNavigation();

    // console.log(data);
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-8/12 mx-auto '>
                    <LatestNews news={data}></LatestNews>
                </section>
                <nav className='w-8/12 mx-auto'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-8/12 mx-auto my-6  grid grid-cols-12 gap-6 '>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>


                <section className='main col-span-6 '>
                    {state == "loading" ? <Loader /> : <Outlet></Outlet>}
                </section>


                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>

        </div>
    );
};

export default HomeLayout;