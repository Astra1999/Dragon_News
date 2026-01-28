import React, { use } from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import Qzone from './Qzone';
import { AuthContext } from '../../Provider/AuthProvider';

const RightAside = () => {

    const { user } = use(AuthContext);

    return (
        <div className='space-y-6'>
            <div>

                {user ? "" : <SocialLogin></SocialLogin>}

            </div>
            <FindUs></FindUs>
            <Qzone></Qzone>
        </div>
    );
};

export default RightAside;