import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FiScissors,
  FiSmile,
  FiUser,
  FiTool,
  FiDroplet,
  FiStar,
  FiShield,
  FiClock
} from 'react-icons/fi';
import {
  MdOutlineCleaningServices,
  MdOutlineElectricalServices,
  MdOutlineHandyman,
  MdOutlineDesignServices
} from 'react-icons/md';
import ServiceCarousel from './ServiceCarousel';

function Hero() {
  const navigate = useNavigate();

  // Unified color scheme - Emerald brand with strategic variations
  const serviceCategories = [
    { 
      id: 1, 
      name: 'Salon & Spa', 
      icon: <FiScissors size={32} />, 
      color: 'from-emerald-400 to-emerald-600', 
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-600',
      route: '/services',
      description: 'Beauty & grooming'
    },
    { 
      id: 2, 
      name: 'Home Cleaning', 
      icon: <MdOutlineCleaningServices size={32} />, 
      color: 'from-teal-500 to-teal-700', 
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-600',
      route: '/services',
      description: 'Professional cleaning'
    },
    { 
      id: 3, 
      name: 'Electrical', 
      icon: <MdOutlineElectricalServices size={32} />, 
      color: 'from-emerald-500 to-emerald-700', 
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-700',
      route: '/services',
      description: 'Electrical services'
    },
    { 
      id: 4, 
      name: 'Plumbing', 
      icon: <FiDroplet size={32} />, 
      color: 'from-teal-400 to-emerald-600', 
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-600',
      route: '/services',
      description: 'Pipe & repair'
    },
    { 
      id: 5, 
      name: 'Handyman', 
      icon: <MdOutlineHandyman size={32} />, 
      color: 'from-emerald-400 to-teal-500', 
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-600',
      route: '/services',
      description: 'Repair services'
    },
    { 
      id: 6, 
      name: 'Painting', 
      icon: <MdOutlineDesignServices size={32} />, 
      color: 'from-teal-500 to-emerald-600', 
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-600',
      route: '/services',
      description: 'Interior & exterior'
    }
  ];

  // Enhanced right side images with better content
  const rightSideImages = [
    {
      src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80',
      alt: 'Professional cleaning service',
      title: 'Expert Cleaning',
      rating: '4.9'
    },
    {
      src: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80',
      alt: 'Professional electrician',
      title: 'Skilled Electricians',
      rating: '4.8'
    },
    {
      src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80',
      alt: 'Spa and wellness',
      title: 'Relax & Rejuvenate',
      rating: '4.9'
    },
    {
      src: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80',
      alt: 'Professional repair',
      title: 'Quality Repairs',
      rating: '4.8'
    }
  ];

  const handleServiceClick = (route) => {
    navigate(route);
  };

  return (
    <div className="relative bg-gradient-to-br from-emerald-50 via-white to-emerald-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
             }}>
        </div>
      </div>

      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Service Carousel - Position at top with proper spacing for fixed navbar */}
        <div className="mt-20 mb-8">
          <ServiceCarousel />
        </div>

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Home services at your{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
            doorstep
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Professional, verified, and trusted service providers for all your home needs.
          Book with confidence, get quality service every time.
        </p>
        
        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <FiShield className="text-emerald-600" />
            <span>Verified Professionals</span>
          </div>
          <div className="flex items-center gap-2">
            <FiStar className="text-amber-500" />
            <span>4.8/5 Customer Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <FiClock className="text-emerald-600" />
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Enhanced Services Grid */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What are you looking for?</h2>
              <p className="text-gray-600">Choose from our wide range of professional services</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {serviceCategories.map((service) => (
                <div 
                  key={service.id}
                  onClick={() => handleServiceClick(service.route)}
                  className="group relative bg-white rounded-2xl p-6 cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-emerald-100"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 ${service.bgColor} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <div className={service.textColor}>
                        {service.icon}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="font-bold text-gray-900 mb-1 group-hover:text-emerald-700 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Hover indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Enhanced Images Grid */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Excellence</h2>
              <p className="text-gray-600">See the quality in every service we provide</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {rightSideImages.map((image, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                    
                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                      <div className="flex items-center gap-1">
                        <FiStar className="text-amber-400 fill-current" size={14} />
                        <span className="text-sm font-medium">{image.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Professional badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-semibold text-gray-800">Verified</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Call to action */}
            <div className="text-center">
              <button
                onClick={() => navigate('/services')}
                className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-full font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Book Your Service
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;