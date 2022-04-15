import React from 'react';
import About from '../About/About';
import Cars from '../Cars/Cars';

const Home = () => {
    return (
        <div>
            <div className="heroSection flex max-w-7xl mx-auto relative">
                <div className="heroText ">
                    <h1 className='text-6xl font-mono font-black absolute bg-white p-4 rounded top-3/4 opacity-70 backdrop-blur-md'>Choose Your Dream</h1>
                </div>
                <div className="heroImg">
                    <img src="https://freepngimg.com/thumb/audi/2-black-r8-audi-png-car-image.png" alt="" />
                </div>
            </div>
            <div className="about-container">
                <About></About>
                <Cars></Cars>
            </div>
        </div>
    );
};

export default Home;