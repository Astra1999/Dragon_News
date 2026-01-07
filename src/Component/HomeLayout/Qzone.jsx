import React from 'react';
import swimmingImage from '../../assets/swimming.png'
import classRoom from '../../assets/class.png'
import playGround from '../../assets/playground.png'
import bg from '../../assets/bg.png'

const Qzone = () => {
    return (
        <div className='bg-base-200 p-4'>
            <h1 className='font-bold mb-4 grid '>Q-zone</h1>
            <div className='space-y-5'>
                <img src={swimmingImage} alt="Swimming" />
                <img src={classRoom} alt="classRoom" />
                <img src={playGround} alt="playGround" />
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default Qzone;