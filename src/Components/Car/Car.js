import React from 'react';

const Car = ({ car }) => {
    return (
        <div className=' bg-stone-100  shadow-lg p-4 rounded'>
            <img className=' w-full md:h-72 h-98 mb-10 rounded' src={car.img} alt="" />

            <div className="car-info flex  items-center justify-between ">
                <div className="div  w-1/2 ml-5 text-left ">
                    <p className='text-xl font-mono'> Name: {car.model}</p>
                    <p className='text-xl font-mono'>{car.year}</p>
                </div>
                <div className="div w-1/2 ml-5 text-left ">
                    <p className='text-xl font-mono'> {car.company}</p>
                    <p className='text-xl font-mono'>Price: {car.price}</p>
                </div>
            </div>
            <div>
                <button className=' mt-8 bg-blue-700 text-white py-2 px-6 my-5 rounded font-mono text-xl'>Shop Now</button>
            </div>
        </div>
    );
};

export default Car;