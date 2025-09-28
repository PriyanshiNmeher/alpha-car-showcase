import React from 'react';
import Header from './components/Header';
import CarCarousel from './components/CarCarousel';
import CarOverview from './components/CarOverview';
import PriceCalculator from './components/PriceCalculator';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import { carImages, carDetails } from './data/carData';
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <CarCarousel images={carImages} />
          
          {/* Right Column */}
          <div className="space-y-6">
            <CarOverview carDetails={carDetails} />
            <PriceCalculator />
          </div>
        </div>
        
        <FeaturesSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default App;