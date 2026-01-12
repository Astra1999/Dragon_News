import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userImage from '../../assets/user.png'
import { AuthContext } from '../../Provider/AuthProvider';
import alert from 'daisyui/components/alert';

const Navbar = () => {
    const { user,logOut } = use(AuthContext);

    const handleLogOut = () => {
        console.log("User Trying to logout")
        logOut()
        .then(()=>{
            alert("You Sign Out Successfully")
        }).catch((error)=>{
            const errorMesage = error.message;
            alert(errorMesage);
        })
    }

    return (
        <div className='flex justify-between items-center mt-4'>
            <div className=''>{user && user.email}</div>
            <div className='gap-8 flex text-accent'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>

            <div className='flex gap-2'>
                <img src={userImage} alt="" />
                {
                    user ? (<button onClick={handleLogOut} className='btn btn-primary '>LogOut</button>) : (<Link to={'/auth/login'} className='btn btn-primary '>Login</Link>)
                }




            </div>
        </div>
    );
};

export default Navbar;