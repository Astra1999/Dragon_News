import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='flex justify-center min-h-screen items-center border'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body px-10">
                    <h1 className='font-bold text-2xl text-center mb-8 mt-5'>Login Your Profile</h1>
                    <fieldset className="fieldset">

                        {/* email */}

                        <label className="label text-black font-semibold">Email</label>
                        <input type="email" className="input" placeholder="Email" />

                        {/* password */}

                        <label className="label text-black font-semibold">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <h1 className='text-center text-xs py-3'>Don't Have Any Account? <span className='text-red-500 hover:underline'><Link to={'/auth/registration'}>Register</Link></span></h1>
                </div>
            </div>
        </div>
    );
};

export default Login;