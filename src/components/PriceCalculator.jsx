import React, { useState } from 'react';
import { DollarSign, Users, Clock } from 'lucide-react';

const PriceCalculator = () => {
  const [numInvites, setNumInvites] = useState(100);
  const [eventDuration, setEventDuration] = useState(7);

  // Price calculator function
  const calculatePrice = () => {
    const basePrice = 5000;
    const inviteMultiplier = 50;
    const durationMultiplier = 200;
    return basePrice + (numInvites * inviteMultiplier) + (eventDuration * durationMultiplier);
  };

  const calculatedPrice = calculatePrice();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <DollarSign className="mr-3 text-green-600" size={28} />
        Event Price Calculator
      </h2>
      
      <div className="space-y-8">
        {/* Number of Invites */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
            <Users className="mr-2 text-blue-600" size={20} />
            Number of Invites
          </label>
          <input
            type="range"
            min="10"
            max="1000"
            value={numInvites}
            onChange={(e) => setNumInvites(parseInt(e.target.value))}
            className="w-full h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer slider-blue"
          />
          <div className="flex justify-between text-xs text-gray-600 mt-2">
            <span>10</span>
            <span className="font-bold text-blue-700 text-lg">{numInvites} invites</span>
            <span>1000</span>
          </div>
        </div>

        {/* Duration of Event */}
        <div className="bg-green-50 p-4 rounded-lg">
          <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
            <Clock className="mr-2 text-green-600" size={20} />
            Duration of Event (Days)
          </label>
          <input
            type="range"
            min="1"
            max="30"
            value={eventDuration}
            onChange={(e) => setEventDuration(parseInt(e.target.value))}
            className="w-full h-3 bg-green-200 rounded-lg appearance-none cursor-pointer slider-green"
          />
          <div className="flex justify-between text-xs text-gray-600 mt-2">
            <span>1 day</span>
            <span className="font-bold text-green-700 text-lg">{eventDuration} days</span>
            <span>30 days</span>
          </div>
        </div>

        {/* Calculated Price Display */}
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-1 rounded-xl">
          <div className="bg-white p-6 rounded-lg text-center">
            <p className="text-sm text-gray-600 mb-2">Total Event Cost</p>
            <p className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              ₹{calculatedPrice.toLocaleString()}
            </p>
            <div className="text-sm text-gray-500 space-y-1">
              <p>Base Cost: ₹5,000</p>
              <p>Invites ({numInvites} × ₹50): ₹{(numInvites * 50).toLocaleString()}</p>
              <p>Duration ({eventDuration} days × ₹200): ₹{(eventDuration * 200).toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
            Book Event
          </button>
          <button className="bg-gradient-to-r from-gray-400 to-gray-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-gray-500 hover:to-gray-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
            Save Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceCalculator;