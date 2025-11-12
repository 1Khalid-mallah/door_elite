import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar, FiClock } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

// Service carousel data with real images from your seeded database
const services = [
  {
    id: 1,
    name: "Complete Home Cleaning",
    description: "Professional deep cleaning service",
    price: "₹1,500",
    duration: "3 hours",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
    category: "Cleaning"
  },
  {
    id: 2,
    name: "Full Body Spa",
    description: "Relaxing full body spa treatment",
    price: "₹3,500",
    duration: "3 hours",
    rating: 4.8,
    image: "/images/spa-women.jpg",
    category: "Salon"
  },
  {
    id: 3,
    name: "Smart Home Setup",
    description: "Complete smart device installation",
    price: "₹2,500",
    duration: "4 hours",
    rating: 4.8,
    image: "/images/smart-home.jpg",
    category: "Technology"
  },
  {
    id: 4,
    name: "RO Purifier Installation",
    description: "Professional water purifier setup",
    price: "₹800",
    duration: "2 hours",
    rating: 4.6,
    image: "/images/ro-purifier.jpg",
    category: "Appliance"
  },
  {
    id: 5,
    name: "Interior Wall Painting",
    description: "Premium wall painting service",
    price: "₹25/sqft",
    duration: "8 hours",
    rating: 4.4,
    image: "/images/home-painting.jpg",
    category: "Painting"
  },
  {
    id: 6,
    name: "Men's Haircut",
    description: "Complete grooming experience",
    price: "₹400",
    duration: "45 mins",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1505503693641-1926193e8d57?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
    category: "Salon"
  },
  {
    id: 7,
    name: "Electrical Repair",
    description: "Safe electrical repair and maintenance",
    price: "₹1,000",
    duration: "2 hours",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
    category: "Electrical"
  },
  {
    id: 8,
    name: "Plumbing Leak Repair",
    description: "Professional leak detection and repair",
    price: "₹800",
    duration: "1.5 hours",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
    category: "Plumbing"
  }
];

const ServiceCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === services.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? services.length - 1 : currentIndex - 1);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === services.length - 1 ? 0 : currentIndex + 1);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleServiceClick = () => {
    navigate('/services');
  };

  const currentService = services[currentIndex];

  return (
    <div className="relative w-full mb-12">
      <div 
        className="relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer"
        onClick={handleServiceClick}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Main Image */}
        <div className="relative h-64 md:h-80">
          <img
            src={currentService.image}
            alt={currentService.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80';
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          
          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <FiChevronLeft size={20} />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <FiChevronRight size={20} />
          </button>

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between">
              <div className="text-white">
                {/* Category Badge */}
                <div className="inline-flex items-center bg-emerald-500/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold mb-3">
                  {currentService.category}
                </div>
                
                {/* Service Info */}
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {currentService.name}
                </h3>
                <p className="text-white/90 text-lg mb-4 max-w-md">
                  {currentService.description}
                </p>
                
                {/* Service Details */}
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <FiClock className="text-emerald-300" size={14} />
                    <span>{currentService.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiStar className="text-amber-300 fill-current" size={14} />
                    <span>{currentService.rating}</span>
                  </div>
                </div>
              </div>
              
              {/* Price and CTA */}
              <div className="mt-4 md:mt-0 md:text-right">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {currentService.price}
                </div>
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div 
            className="h-full bg-emerald-400 transition-all duration-100"
            style={{ 
              width: isAutoPlaying ? `${((Date.now() % 4000) / 4000) * 100}%` : '0%' 
            }}
          ></div>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-emerald-500 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Quick Preview Strip */}
      <div className="hidden md:flex justify-center mt-8 space-x-4 overflow-x-auto pb-2">
        {services.map((service, index) => (
          <button
            key={service.id}
            onClick={() => goToSlide(index)}
            className={`flex-shrink-0 flex items-center gap-3 px-4 py-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-emerald-100 text-emerald-800 shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-8 h-8 rounded-full object-cover"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.1.0&auto=format&fit=crop&w=100&q=80';
              }}
            />
            <span className="text-sm font-medium whitespace-nowrap">{service.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServiceCarousel;