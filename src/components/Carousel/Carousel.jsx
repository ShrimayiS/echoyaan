// src/components/Carousel.js
import React, { useState, useEffect } from 'react';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrevClick = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-64 md:h-96">
      <div className="overflow-hidden h-full">
        <div
          className="flex transition-transform duration-500 h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="min-w-full h-full relative" key={index}>
              <img src={slide.image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-8 z-10">
                <h2 className="text-xl md:text-4xl font-bold mb-2">{slide.title}</h2>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors">{slide.buttonText}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handlePrevClick}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
      >
        &#10094;
      </button>
      <button
        onClick={handleNextClick}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
