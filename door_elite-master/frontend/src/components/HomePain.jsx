import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiPaintBucket, 
  FiPalette, 
  FiBrush, 
  FiArrowRight,
  FiStar,
  FiShield,
  FiAward
} from 'react-icons/fi';

const HomePainting = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/services');
  };

  return (
    <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Card */}
        <div 
          onClick={handleClick}
          className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            
            {/* Content Side */}
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl mb-6">
                <FiPaintBucket className="text-white text-2xl" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Transform Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  Home with Color
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional interior and exterior painting services with premium materials, 
                expert craftsmen, and lasting results that exceed your expectations.
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <FiShield className="text-emerald-600" size={20} />
                  </div>
                  <span className="text-sm font-medium text-gray-700">5-Year Warranty</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-teal-100 p-2 rounded-lg">
                    <FiAward className="text-teal-600" size={20} />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Premium Paint</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <FiStar className="text-emerald-600" size={20} />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Expert Teams</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Free Quote
                  <FiArrowRight className="ml-2" />
                </button>
                
                <button className="inline-flex items-center border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300">
                  <FiPalette className="mr-2" />
                  View Gallery
                </button>
              </div>
            </div>
            
            {/* Image Side */}
            <div className="relative h-96 lg:h-auto overflow-hidden">
              <img 
                src="/images/home-painting.jpg" 
                alt="Professional Home Painting Services"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay with stats */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="grid grid-cols-3 gap-4 text-center text-white">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm opacity-90">Projects</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                    <div className="text-2xl font-bold">4.9</div>
                    <div className="text-sm opacity-90">Rating</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                    <div className="text-2xl font-bold">5</div>
                    <div className="text-sm opacity-90">Years Exp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePainting;