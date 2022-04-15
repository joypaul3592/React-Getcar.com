import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';

const Cars = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('AllCars.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])



    return (
        <div>
            <h1 className='text-5xl font-bold font-mono text-blue-700 mt-24'>Cars</h1>
            <div className='py-16  max-w-7xl mx-auto gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    cars.map(car => <Car key={car.id}
                        car={car}></Car>)
                }
            </div>
        </div>
    );
};

export default Cars; <h1>This is cars page </h1>