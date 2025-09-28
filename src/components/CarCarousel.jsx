import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

const CarCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [show360View, setShow360View] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-6">
      {/* Image Carousel */}
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-96">
          <img 
            src={images[currentImageIndex]} 
            alt={`Car view ${currentImageIndex + 1}`}
            className="w-full h-full object-cover transition-all duration-500"
          />
          
          {/* Navigation buttons */}
          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all duration-200 hover:scale-110"
          >
            <ChevronRight size={20} />
          </button>

          {/* Image indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentImageIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
              />
            ))}
          </div>

          {/* Image counter */}
          <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
      </div>

      {/* 360° View Button */}
      <div className="text-center">
        <button
          onClick={() => setShow360View(!show360View)}
          className={`inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
            show360View 
              ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg' 
              : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg'
          }`}
        >
          <RotateCcw className={`mr-2 ${show360View ? 'animate-spin' : ''}`} size={20} />
          {show360View ? '360° View Active' : 'Enable 360° View'}
        </button>
        
        {show360View && (
          <div className="mt-6 p-6 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-xl text-white shadow-xl transform animate-pulse">
            <div className="backdrop-blur-sm bg-white bg-opacity-10 rounded-lg p-4">
              <p className="text-xl font-bold mb-2">🌟 360° Interactive View Mode</p>
              <p className="text-sm mb-4 opacity-90">
                Drag to rotate • Zoom with scroll • Full immersive experience
              </p>
              <div className="relative">
                <div className="w-full h-3 bg-white bg-opacity-20 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-white to-yellow-200 rounded-full animate-pulse" style={{width: '85%'}}></div>
                </div>
                <p className="text-xs mt-2 opacity-75">Loading high-resolution 360° assets...</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarCarousel;