import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiStar, 
  FiClock, 
  FiUsers, 
  FiAward,
  FiArrowRight,
  FiUser,
  FiScissors,
  FiTool,
  FiHeart
} from 'react-icons/fi';

const MenSalon = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      name: "Haircut & Beard Styling",
      image: "https://images.unsplash.com/photo-1514336937476-a5b961020a5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "₨800",
      duration: "45 min",
      rating: 4.8,
      reviews: 189,
      category: "Hair Care",
      description: "Professional cuts & styling",
      badge: "Popular"
    },
    {
      id: 2,
      name: "Hair Color & Spa",
      image: "https://images.unsplash.com/photo-1571454870742-43c314f3a81a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "₨1,500",
      duration: "90 min",
      rating: 4.7,
      reviews: 124,
      category: "Beauty",
      description: "Color treatment & relaxation",
      badge: "Trending"
    },
    {
      id: 3,
      name: "Pedicure & Manicure",
      image: "https://images.unsplash.com/photo-1693776528646-6403e47575dd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "₨600",
      duration: "45 min",
      rating: 4.6,
      reviews: 156,
      category: "Nail Care",
      description: "Complete hand & foot care",
      badge: "Quick"
    },
    {
      id: 4,
      name: "Facial & Cleanup",
      image: "https://images.unsplash.com/photo-1728949202468-c37fdbd76856?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "₨1,200",
      duration: "60 min",
      rating: 4.8,
      reviews: 203,
      category: "Skincare",
      description: "Deep cleansing & refresh",
      badge: "Premium"
    }
  ];

  const handleCardClick = () => {
    navigate('/services');
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Popular': return 'bg-gradient-to-r from-emerald-500 to-emerald-600';
      case 'Trending': return 'bg-gradient-to-r from-teal-500 to-teal-600';
      case 'Quick': return 'bg-gradient-to-r from-teal-400 to-emerald-500';
      case 'Premium': return 'bg-gradient-to-r from-emerald-600 to-teal-500';
      default: return 'bg-gradient-to-r from-gray-500 to-slate-600';
    }
  };

  return (
    <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div className="mb-8 lg:mb-0">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl mb-4">
              <FiUser className="text-white text-xl" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Grooming for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Men</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Professional grooming services designed specifically for men. 
              From classic cuts to modern styling, we've got you covered.
            </p>
          </div>
          
          <button 
            onClick={handleCardClick}
            className="group inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-2xl font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View All Services
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Features strip */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="flex items-center space-x-4 bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-emerald-100">
            <div className="bg-emerald-100 p-3 rounded-xl">
              <FiScissors className="text-emerald-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Expert Barbers</h3>
              <p className="text-sm text-gray-600">Trained professionals</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-teal-100">
            <div className="bg-teal-100 p-3 rounded-xl">
              <FiTool className="text-teal-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Premium Tools</h3>
              <p className="text-sm text-gray-600">Latest equipment</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-emerald-100">
            <div className="bg-emerald-100 p-3 rounded-xl">
              <FiUsers className="text-emerald-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Quick Service</h3>
              <p className="text-sm text-gray-600">Efficient timing</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-teal-100">
            <div className="bg-teal-100 p-3 rounded-xl">
              <FiHeart className="text-teal-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Hygiene First</h3>
              <p className="text-sm text-gray-600">Clean & sanitized</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              onClick={handleCardClick}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 hover:-translate-y-3"
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-20">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white ${getBadgeColor(service.badge)}`}>
                  {service.badge}
                </div>
              </div>
              
              {/* Category */}
              <div className="absolute top-4 right-4 z-20">
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-xs font-medium text-gray-800">{service.category}</span>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Rating overlay */}
                <div className="absolute bottom-4 left-4 z-10">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 flex items-center gap-2">
                    <FiStar className="text-amber-400 fill-current" size={14} />
                    <span className="text-sm font-semibold text-gray-900">{service.rating}</span>
                    <span className="text-xs text-gray-600">({service.reviews})</span>
                  </div>
                </div>
                
                {/* Price overlay */}
                <div className="absolute bottom-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full px-3 py-2">
                    <span className="text-sm font-bold">{service.price}</span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900 group-hover:text-emerald-700 transition-colors text-lg">
                    {service.name}
                  </h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FiArrowRight className="text-emerald-600" size={18} />
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FiClock size={14} />
                    <span>{service.duration}</span>
                  </div>
                  
                  <div className="text-emerald-600 font-semibold">
                    {service.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Looking Sharp Has Never Been Easier</h3>
            <p className="text-emerald-100 mb-6">
              Book your grooming session with our expert barbers and stylists
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={handleCardClick}
                className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Book Grooming
              </button>
              <button 
                onClick={handleCardClick}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
              >
                View All Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenSalon;