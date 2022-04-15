import React, { useState } from 'react';

const About = () => {
    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isActive5, setIsActive5] = useState(false);
    const [isActive6, setIsActive6] = useState(false);
    return (
        <div className=' max-w-7xl mx-auto'>
            <h1 className='text-5xl font-bold font-mono text-blue-700 mt-24'>About</h1>
            <div className="accordding flex  justify-between  max-w-7xl  mx-auto">

                <div className=" w-1/2 mx-4">
                    <div className="accordion-item bg-stone-800    rounded shadow-md my-10">
                        <div className="accordion-title bg-slate-50  flex py-3 text-3xl font-mono items-center justify-between px-6 rounded  cursor-pointer" onClick={() => setIsActive(!isActive)}>
                            <div>What is Getcar?</div>
                            <div>{isActive ? '-' : '+'}</div>
                        </div>
                        {isActive && <div className="accordion-content p-3 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ea rem magni sapiente unde cum, quidem fugiat atque veniam debitis. Dignissimos temporibus a, explicabo est illo magnam nihil ut, quisquam alias quasi magni hic repellendus doloribus eaque molestias libero fugit?</div>}
                    </div>

                    <div className="accordion-item bg-stone-800  rounded shadow-md my-10">
                        <div className="accordion-title bg-slate-50   flex py-3 text-3xl font-mono items-center justify-between px-6 rounded  cursor-pointer" onClick={() => setIsActive2(!isActive2)}>
                            <div>How Dose it Work?</div>
                            <div>{isActive2 ? '-' : '+'}</div>
                        </div>
                        {isActive2 && <div className="accordion-content p-3 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ea rem magni sapiente unde cum, quidem fugiat atque veniam debitis. Dignissimos temporibus a, explicabo est illo magnam nihil ut, quisquam alias quasi magni hic repellendus doloribus eaque molestias libero fugit?</div>}
                    </div>

                    <div className="accordion-item bg-stone-800   rounded shadow-md my-10">
                        <div className="accordion-title bg-slate-50   flex py-3 text-3xl font-mono items-center justify-between px-6 rounded  cursor-pointer" onClick={() => setIsActive3(!isActive3)}>
                            <div>What is best deal?</div>
                            <div>{isActive3 ? '-' : '+'}</div>
                        </div>
                        {isActive3 && <div className="accordion-content p-3 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ea rem magni sapiente unde cum, quidem fugiat atque veniam debitis. Dignissimos temporibus a, explicabo est illo magnam nihil ut, quisquam alias quasi magni hic repellendus doloribus eaque molestias libero fugit?</div>}
                    </div>
                </div>

                <div className=" w-1/2 mx-4">
                    <div className="accordion-item bg-stone-800   rounded shadow-md my-10">
                        <div className="accordion-title bg-slate-50   flex py-3 text-3xl font-mono items-center justify-between px-6 rounded  cursor-pointer" onClick={() => setIsActive4(!isActive4)}>
                            <div>How About service?</div>
                            <div>{isActive4 ? '-' : '+'}</div>
                        </div>
                        {isActive4 && <div className="accordion-content p-3 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ea rem magni sapiente unde cum, quidem fugiat atque veniam debitis. Dignissimos temporibus a, explicabo est illo magnam nihil ut, quisquam alias quasi magni hic repellendus doloribus eaque molestias libero fugit?</div>}
                    </div>

                    <div className="accordion-item bg-stone-800   rounded shadow-md my-10">
                        <div className="accordion-title bg-slate-50   flex py-3 text-3xl font-mono items-center justify-between px-6 rounded  cursor-pointer" onClick={() => setIsActive5(!isActive5)}>
                            <div>Whice brand best?</div>
                            <div>{isActive5 ? '-' : '+'}</div>
                        </div>
                        {isActive5 && <div className="accordion-content p-3 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ea rem magni sapiente unde cum, quidem fugiat atque veniam debitis. Dignissimos temporibus a, explicabo est illo magnam nihil ut, quisquam alias quasi magni hic repellendus doloribus eaque molestias libero fugit?</div>}
                    </div>

                    <div className="accordion-item bg-stone-800   rounded shadow-md my-10">
                        <div className="accordion-title bg-slate-50   flex py-3 text-3xl font-mono items-center justify-between px-6 rounded  cursor-pointer" onClick={() => setIsActive6(!isActive6)}>
                            <div>How to get car?</div>
                            <div>{isActive6 ? '-' : '+'}</div>
                        </div>
                        {isActive6 && <div className="accordion-content p-3 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ea rem magni sapiente unde cum, quidem fugiat atque veniam debitis. Dignissimos temporibus a, explicabo est illo magnam nihil ut, quisquam alias quasi magni hic repellendus doloribus eaque molestias libero fugit?</div>}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;