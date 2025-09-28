import React from 'react';
import { Car, RotateCcw, DollarSign } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Car,
      title: 'Premium Quality',
      description: 'Only the finest vehicles with comprehensive quality checks and certifications',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      icon: RotateCcw,
      title: '360° Experience',
      description: 'Interactive viewing technology for complete transparency and immersive experience',
      gradient: 'from-green-400 to-green-600'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'Clear, upfront pricing with our advanced calculator and no hidden fees',
      gradient: 'from-purple-400 to-purple-600'
    }
  ];

  return (
    <div className="mt-16 bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Alpha Motors?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl`}>
              <feature.icon className="text-white" size={36} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;