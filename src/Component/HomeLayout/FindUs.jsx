import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaX, FaXTwitter } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div>
            <h1 className='font-bold mb-4'>Find Us On</h1>
            <div className="join join-vertical grid grid-cols-1">
                <button className="btn bg-base-100 join-item justify-start">

                    <FaFacebook></FaFacebook>  <h1>Facebook</h1>
                </button>
                <button className="btn bg-base-100 join-item justify-start">
                    <FaXTwitter></FaXTwitter> <h1>X</h1>
                </button>
                <button className="btn bg-base-100 join-item justify-start">
                    <FaInstagram></FaInstagram> <h1>Instagram</h1>
                </button>
            </div>
        </div>
    );
};

export default FindUs;