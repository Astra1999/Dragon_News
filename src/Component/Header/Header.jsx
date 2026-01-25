import React from 'react';
import logo from '../../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center items-center flex-col'>
        <img className=' pt-8 mb-4' src={logo} alt="" />
        <p className='text-accent mb-3'>Journalism Without Fear or Favour</p>
        <p className='font-semibold'>{format(new Date(), "EEEE ," )}<span className='text-accent'>{format(new Date()," MMMM, d, yyyy")}</span></p>
        </div>
    );
};

export default Header;
