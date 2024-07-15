import React from 'react';
import Task25Child from './Task25Child';

const Task25 = () => {
    const images = ["https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80",
        "https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80",
        "https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80",
        
    ];

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Image Gallery</h1>
            <Task25Child images={images} />
        </div>
    );
};

export default Task25;
