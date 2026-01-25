import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import Loader from './Loader';

const Registration = () => {
    const { createUser, setUser, updateUser } = use(AuthContext)
    const [nameError, setNameError] = useState('')
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.Name.value
        const photo = form.PhotoURL.value
        const email = form.Email.value
        const password = form.Password.value

        if (name.length < 5) {
            setNameError('Name should be more then 5 character');
        } else {
            setNameError('');
        }

        // console.log(name, photo, email, password);

        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential
                // console.log(user)

                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                        navigate('/')
                    }).catch((error) => {
                        console.log(error.message);
                        setUser(user)
                    })


                alert('SignUp successfull')
            })
            .catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode, errorMessage);

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
                        <input type="text" name='Name' className="input" placeholder="Name" required />

                        {nameError && <p>{nameError}</p>}

                        {/* PhotoURL */}

                        <label className="label text-black font-semibold">Photo URL</label>
                        <input type="PhotoURL" className="input" name='PhotoURL' placeholder="Photo URL" required />

                        {/* email */}

                        <label className="label text-black font-semibold">Email</label>
                        <input type="email" name='Email' className="input" placeholder="Email" required />

                        {/* password */}

                        <label className="label text-black font-semibold">Password</label>
                        <input type="password" name='Password' className="input" placeholder="Password" required
                            title="Must be at least 8 characters, include uppercase, lowercase, number & special character" />

                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                    <h1 className='text-center text-xs py-3'>Already Have an Account ? <span className='text-red-500 hover:underline'><Link to={'/auth/login'}>Login</Link></span></h1>
                </form>
            </div>
        </div>
    );
};

export default Registration;