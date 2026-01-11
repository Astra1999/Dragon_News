import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Registration = () => {
    const { createUser, setUser } = use(AuthContext)
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.Name.value
        const photo = form.PhotoURL.value
        const email = form.Email.value
        const password = form.Password.value

        console.log(name, photo, email, password);

        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential
                // console.log(user)
                setUser(user);
                alert('Login successfull')
            })
            .catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.Message;
                alert(errorMessage);

            })

    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 my-10 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='font-bold text-2xl text-center  mt-10'>Register Your Account</h1>
                <form onSubmit={handleRegister} className="card-body px-10">

                    <fieldset className="fieldset">

                        {/* Name */}

                        <label className="label text-black font-semibold">Name</label>
                        <input type="text" name='Name' className="input" placeholder="Name" />

                        {/* PhotoURL */}

                        <label className="label text-black font-semibold">Photo URL</label>
                        <input type="PhotoURL" className="input" name='PhotoURL' placeholder="Photo URL" />

                        {/* email */}

                        <label className="label text-black font-semibold">Email</label>
                        <input type="email" name='Email' className="input" placeholder="Email" />

                        {/* password */}

                        <label className="label text-black font-semibold">Password</label>
                        <input type="password" name='Password' className="input" placeholder="Password" />

                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                    <h1 className='text-center text-xs py-3'>Already Have an Account ? <span className='text-red-500 hover:underline'><Link to={'/auth/login'}>Login</Link></span></h1>
                </form>
            </div>
        </div>
    );
};

export default Registration;