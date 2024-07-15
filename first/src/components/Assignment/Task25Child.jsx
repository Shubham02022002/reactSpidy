import React, { useState } from 'react';

const Task25Child    = ({ images }) => {
    console.log(images);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const selectImage = (index) => {
        setSelectedImageIndex(index);
    };

    const nextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    if (!images || images.length === 0) {
        return <p>No images available</p>;
    }

    return (
        <div className="flex flex-col items-center">
            <div className="w-full max-w-lg">
                <img className="w-full rounded" src={images[selectedImageIndex]} alt="Selected" />
            </div>
            <div className="flex mt-4 space-x-2">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index}`}
                        className={`w-24 h-24 object-cover rounded cursor-pointer border-2 ${
                            index === selectedImageIndex ? 'border-blue-500' : 'border-gray-300'
                        }`}
                        onClick={() => selectImage(index)}
                    />
                ))}
            </div>
            <div className="mt-4 space-x-4">
                <button
                    className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
                    onClick={prevImage}
                >
                    Previous
                </button>
                <button
                    className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
                    onClick={nextImage}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Task25Child;
