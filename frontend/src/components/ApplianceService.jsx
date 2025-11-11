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
  FiTool,
  FiPhone,
  FiSettings
} from 'react-icons/fi';

const ApplianceService = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      name: "AC Service & Repair",
      image: "https://images.unsplash.com/photo-1709432767122-d3cb5326911a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "₨2,500",
      duration: "2-4 hours",
      rating: 4.8,
      reviews: 324,
      category: "HVAC",
      description: "Complete AC maintenance & repair services",
      features: ["Filter cleaning", "Gas refilling", "6-month warranty"],
      badge: "Popular",
      isAvailable: true
    },
    {
      id: 2,
      name: "TV & Electronics",
      image: "https://images.unsplash.com/photo-1646821804389-9778ce2a4fd7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "₨1,200",
      duration: "1-2 hours",
      rating: 4.7,
      reviews: 189,
      category: "Electronics",
      description: "Expert TV repair & screen replacement",
      features: ["Screen repair", "Remote issues", "3-month warranty"],
      badge: "Expert"
    },
    {
      id: 3,
      name: "Laptop & Computer",
      image: "https://images.unsplash.com/photo-1658240527554-9cf987b4de49?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "₨1,800",
      duration: "2-3 hours",
      rating: 4.9,
      reviews: 267,
      category: "Technology",
      description: "Complete laptop diagnostic & repair",
      features: ["Hardware fix", "Software issues", "Data recovery"],
      badge: "Best Value"
    },
    {
      id: 4,
      name: "Geyser & Water Heater",
      image: "https://indoappliances.com/cdn/shop/files/AuraInstantGeyser.png?v=1729502424&width=600",
      price: "₨1,500",
      duration: "1-2 hours",
      rating: 4.6,
      reviews: 145,
      category: "Plumbing",
      description: "Professional water heater installation & repair",
      features: ["Element replacement", "Pipe fix", "Safety check"],
      badge: "Quick"
    },
    {
      id: 5,
      name: "Air Purifier & Filters",
      image: "https://images.unsplash.com/photo-1732229033839-c76b4071c449?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "₨800",
      duration: "1 hour",
      rating: 4.5,
      reviews: 98,
      category: "Health",
      description: "Filter replacement & maintenance service",
      features: ["HEPA filter", "Cleanse & sanitize", "Performance check"],
      badge: "Essential"
    }
  ];

  const handleClick = () => {
    navigate('/services');
  };

  // Sophisticated color theory based on Hero component analysis
  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Best Value': return 'bg-gradient-to-r from-emerald-400 to-emerald-600';
      case 'Popular': return 'bg-gradient-to-r from-teal-500 to-teal-700';
      case 'Expert': return 'bg-gradient-to-r from-emerald-600 to-teal-500';
      case 'Quick': return 'bg-gradient-to-r from-teal-400 to-emerald-600';
      case 'Essential': return 'bg-gradient-to-r from-emerald-500 to-teal-400';
      default: return 'bg-gradient-to-r from-emerald-500 to-teal-500';
    }
  };

  const getIconBgColor = (category) => {
    switch (category) {
      case 'HVAC': return 'bg-emerald-50';
      case 'Electronics': return 'bg-teal-50';
      case 'Technology': return 'bg-emerald-50';
      case 'Plumbing': return 'bg-teal-50';
      case 'Health': return 'bg-emerald-50';
      default: return 'bg-emerald-50';
    }
  };

  const getIconColor = (category) => {
    switch (category) {
      case 'HVAC': return 'text-emerald-600';
      case 'Electronics': return 'text-teal-600';
      case 'Technology': return 'text-emerald-700';
      case 'Plumbing': return 'text-teal-600';
      case 'Health': return 'text-emerald-600';
      default: return 'text-emerald-600';
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-white to-emerald-100 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
             }}>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div className="mb-8 lg:mb-0">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl mb-6 shadow-lg">
              <FiSettings className="text-white text-2xl" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Appliance</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mb-8">
              Professional repair and maintenance for all your home appliances. 
              Certified technicians, genuine parts, and satisfaction guaranteed.
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
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
          
          <button 
            onClick={handleClick}
            className="group inline-flex items-center bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-full font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View All Services
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Service categories with sophisticated color theory */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="bg-emerald-100 p-4 rounded-2xl">
              <FiShield className="text-emerald-600" size={28} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Genuine Parts</h3>
              <p className="text-sm text-gray-600">100% authentic</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-teal-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="bg-teal-100 p-4 rounded-2xl">
              <FiAward className="text-teal-600" size={28} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Certified Techs</h3>
              <p className="text-sm text-gray-600">Expert repair</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="bg-emerald-100 p-4 rounded-2xl">
              <FiCheckCircle className="text-emerald-600" size={28} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Warranty</h3>
              <p className="text-sm text-gray-600">Up to 6 months</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-teal-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="bg-teal-100 p-4 rounded-2xl">
              <FiPhone className="text-teal-600" size={28} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">24/7 Support</h3>
              <p className="text-sm text-gray-600">Always available</p>
            </div>
          </div>
        </div>

        {/* Enhanced Services Grid with sophisticated design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              onClick={handleClick}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 hover:-translate-y-3"
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-20">
                <div className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-bold text-white ${getBadgeColor(service.badge)} shadow-lg`}>
                  {service.badge}
                </div>
              </div>
              
              {/* Category icon */}
              <div className="absolute top-4 right-4 z-20">
                <div className={`${getIconBgColor(service.category)} backdrop-blur-sm rounded-full p-3`}>
                  <FiTool className={`${getIconColor(service.category)}`} size={16} />
                </div>
              </div>

              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Sophisticated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Rating overlay */}
                <div className="absolute bottom-4 left-4 z-10">
                  <div className="bg-white/95 backdrop-blur-sm rounded-full px-4 py-3 flex items-center gap-2 shadow-lg">
                    <FiStar className="text-amber-400 fill-current" size={16} />
                    <span className="text-sm font-bold text-gray-900">{service.rating}</span>
                    <span className="text-xs text-gray-600">({service.reviews})</span>
                  </div>
                </div>
                
                {/* Price overlay */}
                <div className="absolute bottom-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-full px-4 py-3 shadow-lg">
                    <div className="text-center">
                      <div className="text-sm font-bold">{service.price}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900 group-hover:text-emerald-700 transition-colors text-lg leading-tight">
                    {service.name}
                  </h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <FiArrowRight className="text-emerald-600" size={20} />
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="space-y-2 mb-5">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs text-gray-500">
                      <FiCheckCircle size={14} className="text-emerald-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FiClock size={16} />
                    <span>{service.duration}</span>
                  </div>
                  
                  <div className="text-emerald-600 font-bold">
                    {service.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced Bottom CTA */}
        <div className="text-center mt-20">
          <div className="relative bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-3xl p-10 text-white overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" 
                   style={{
                     backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                   }}>
              </div>
            </div>
            
            <div className="relative">
              <h3 className="text-3xl font-bold mb-3">Need Appliance Repair?</h3>
              <p className="text-emerald-100 mb-8 text-lg max-w-2xl mx-auto">
                Expert technicians available 24/7 with genuine parts and comprehensive warranty coverage
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button 
                  onClick={handleClick}
                  className="bg-white text-emerald-600 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  Book Now
                </button>
                <button 
                  onClick={handleClick}
                  className="border-3 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-emerald-600 transition-all duration-300"
                >
                  Get Free Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplianceService;