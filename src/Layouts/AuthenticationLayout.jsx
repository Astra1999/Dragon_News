import React from 'react';
import Login from '../Page/Login';
import Navbar from '../Component/Header/Navbar';
import { Outlet } from 'react-router';
import Registration from '../Page/Registration';

const AuthenticationLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='w-11/12 mx-auto py-4'>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthenticationLayout;