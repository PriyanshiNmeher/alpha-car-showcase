import React from 'react';
import { Car, Calendar, Gauge, DollarSign } from 'lucide-react';

const CarOverview = ({ carDetails }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <Car className="mr-3 text-blue-600" size={28} />
        Car Overview
      </h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
          <Car className="text-blue-600" size={24} />
          <div>
            <p className="text-sm text-gray-500">Model</p>
            <p className="font-bold text-gray-900">{carDetails.model}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
          <Calendar className="text-green-600" size={24} />
          <div>
            <p className="text-sm text-gray-500">Year</p>
            <p className="font-bold text-gray-900">{carDetails.year}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
          <Gauge className="text-orange-600" size={24} />
          <div>
            <p className="text-sm text-gray-500">Mileage</p>
            <p className="font-bold text-gray-900">{carDetails.mileage}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
          <DollarSign className="text-red-600" size={24} />
          <div>
            <p className="text-sm text-gray-500">Price</p>
            <p className="font-bold text-gray-900 text-lg">{carDetails.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarOverview;