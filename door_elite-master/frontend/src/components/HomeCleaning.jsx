import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiStar, 
  FiClock, 
  FiShield, 
  FiAward,
  FiArrowRight,
  FiCheckCircle,
  FiZap,
  FiDroplet
} from 'react-icons/fi';

const HomeCleaning = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      name: "Deep Home Cleaning",
      image: "https://images.unsplash.com/photo-1692576855758-318a1fa8ff6d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "₨3,500",
      originalPrice: "₨4,200",
      duration: "4-6 hours",
      rating: 4.9,
      reviews: 445,
      category: "Complete Clean",
      description: "Comprehensive cleaning for entire home",
      features: ["All rooms", "Kitchen & bathrooms", "Furniture cleaning"],
      badge: "Best Value",
      savings: "₨700"
    },
    {
      id: 2,
      name: "Sofa & Carpet Care",
      image: "https://images.unsplash.com/photo-1749372518270-4b9bcd93960e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "₨1,800",
      duration: "2-3 hours",
      rating: 4.8,
      reviews: 289,
      category: "Upholstery",
      description: "Professional fabric cleaning & restoration",
      features: ["Stain removal", "Odor elimination", "Fabric protection"],
      badge: "Popular"
    },
    {
      id: 3,
      name: "Pest Control",
      image: "https://images.unsplash.com/photo-1727198634758-e8e7f7614353?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "₨2,200",
      duration: "2-3 hours",
      rating: 4.7,
      reviews: 167,
      category: "Pest Control",
      description: "Safe & effective pest elimination",
      features: ["Cockroach control", "Ant treatment", "3-month warranty"],
      badge: "Essential"
    },
    {
      id: 4,
      name: "Bathroom Deep Clean",
      image: "https://images.unsplash.com/photo-1722935437914-dc77c2c93641?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "₨1,200",
      duration: "1-2 hours",
      rating: 4.8,
      reviews: 298,
      category: "Sanitization",
      description: "Complete bathroom hygiene & cleaning",
      features: ["Limescale removal", "Grout cleaning", "Disinfection"],
      badge: "Quick"
    },
    {
      id: 5,
      name: "Kitchen Deep Clean",
      image: "https://images.unsplash.com/photo-1556910096-6f5e72db6803?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "₨1,500",
      duration: "2-3 hours",
      rating: 4.9,
      reviews: 356,
      category: "Hygiene",
      description: "Professional kitchen sanitization",
      features: ["Appliance cleaning", "Grease removal", "Food-safe products"],
      badge: "Premium"
    }
  ];

  const handleClick = () => {
    navigate('/services');
  };

  // Unified emerald-teal color scheme
  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Best Value': return 'bg-gradient-to-r from-emerald-500 to-emerald-600';
      case 'Popular': return 'bg-gradient-to-r from-teal-500 to-teal-600';
      case 'Essential': return 'bg-gradient-to-r from-emerald-600 to-teal-500';
      case 'Quick': return 'bg-gradient-to-r from-teal-400 to-emerald-500';
      case 'Premium': return 'bg-gradient-to-r from-emerald-500 to-teal-400';
      default: return 'bg-gradient-to-r from-emerald-500 to-teal-500';
    }
  };

  return (
    <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div className="mb-8 lg:mb-0">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl mb-4">
              <FiDroplet className="text-white text-xl" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Cleaning</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Transform your home with our expert cleaning and pest control services. 
              Eco-friendly products, trained professionals, and guaranteed satisfaction.
            </p>
          </div>
          
          <button 
            onClick={handleClick}
            className="group inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-2xl font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore All Services
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="flex items-center space-x-4 bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-emerald-100">
            <div className="bg-emerald-100 p-3 rounded-xl">
              <FiShield className="text-emerald-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Eco-Friendly</h3>
              <p className="text-sm text-gray-600">Safe products</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-teal-100">
            <div className="bg-teal-100 p-3 rounded-xl">
              <FiAward className="text-teal-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Trained Teams</h3>
              <p className="text-sm text-gray-600">Professional staff</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-emerald-100">
            <div className="bg-emerald-100 p-3 rounded-xl">
              <FiCheckCircle className="text-emerald-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Satisfaction</h3>
              <p className="text-sm text-gray-600">100% guaranteed</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-teal-100">
            <div className="bg-teal-100 p-3 rounded-xl">
              <FiZap className="text-teal-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Latest Equipment</h3>
              <p className="text-sm text-gray-600">Advanced tools</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              onClick={handleClick}
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

              {/* Savings badge for first service */}
              {service.savings && (
                <div className="absolute bottom-4 right-4 z-20">
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full px-2 py-1">
                    <span className="text-xs font-bold">Save {service.savings}</span>
                  </div>
                </div>
              )}

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
                    <div className="text-center">
                      <div className="text-sm font-bold">{service.price}</div>
                      {service.originalPrice && (
                        <div className="text-xs line-through opacity-80">{service.originalPrice}</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
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
                
                {/* Features */}
                <div className="space-y-1 mb-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs text-gray-500">
                      <FiCheckCircle size={12} className="text-emerald-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
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
            <h3 className="text-2xl font-bold mb-2">Book Your Cleaning Today</h3>
            <p className="text-emerald-100 mb-6">
              Professional cleaning services with 100% satisfaction guarantee
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={handleClick}
                className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Quote
              </button>
              <button 
                onClick={handleClick}
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

export default HomeCleaning;