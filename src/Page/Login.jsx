import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import alert from 'daisyui/components/alert';

const Login = () => {

    const {logIn} = use(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });

        logIn(email, password)
        .then((userCredential)=>{

            const user = userCredential.user;
            console.log(user)

        }).catch((error)=>{
            const errorCode = error.code
            const errorMesage = error.message
            alert(errorCode,errorMesage)
        })
    }

    return (
        <div className='flex justify-center min-h-screen items-center border'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='font-bold text-2xl text-center  mt-8'>Login Your Profile</h1>
                <form onSubmit={handleLogin} className="card-body px-10">

                    <fieldset className="fieldset">

                        {/* email */}

                        <label className="label text-black font-semibold">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />

                        {/* password */}

                        <label className="label text-black font-semibold">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </form>
                <h1 className='text-center text-xs py-3'>Don't Have Any Account? <span className='text-red-500 hover:underline'><Link to={'/auth/registration'}>Register</Link></span></h1>
            </div>
        </div>
    );
};

export default Login;