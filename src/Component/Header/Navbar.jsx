import React from 'react';
import { Link, NavLink } from 'react-router';
import user from '../../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center mt-4'>
            <div></div>
            <div className='gap-8 flex text-accent'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>

            <div className='flex gap-2'>
                <img src={user} alt="" />
                <Link to={'/auth/login'} className='btn btn-primary '>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;