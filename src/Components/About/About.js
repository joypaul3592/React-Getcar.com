import React, { useState } from 'react';

const About = () => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div>
            <h1 className='text-5xl font-bold font-mono text-blue-700'>About</h1>
            <div className="accordding">
                <div className="accordion-item">
                    <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                        <div>Its headding</div>
                        <div>{isActive ? '-' : '+'}</div>
                    </div>
                    {isActive && <div className="accordion-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ea rem magni sapiente unde cum, quidem fugiat atque veniam debitis. Dignissimos temporibus a, explicabo est illo magnam nihil ut, quisquam alias quasi magni hic repellendus doloribus eaque molestias libero fugit?</div>}
                </div>
            </div>
        </div>
    );
};

export default About;