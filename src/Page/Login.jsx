import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {

    const [error, setError] = useState('')
    const { logIn } = use(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({ email, password });

        logIn(email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log(user)
                navigate(`${location.state ? location.state : "/"}`);

            }).catch((error) => {
                const errorCode = error.code
                const errorMesage = error.message
                setError(errorCode, errorMesage);
            })
    }

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='font-bold text-2xl text-center  mt-8'>Login Your Profile</h1>
                <form onSubmit={handleLogin} className="card-body px-10">

                    <fieldset className="fieldset">

                        {/* email */}

                        <label className="label text-black font-semibold">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />

                        {/* password */}

                        <label className="label text-black font-semibold">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" required />
                        <div><a className="link link-hover">Forgot password?</a></div>


                        {error && <p className='text-red-600' >Invalid Email or Password</p>}

                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </form>
                <h1 className='text-center text-xs py-3'>Don't Have Any Account? <span className='text-red-500 hover:underline'><Link to={'/auth/registration'}>Register</Link></span></h1>
            </div>
        </div>
    );
};

export default Login;