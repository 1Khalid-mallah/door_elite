import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiStar, 
  FiArrowRight,
  FiAward,
  FiTrendingUp,
  FiZap,
  FiHeart
} from 'react-icons/fi';

const cardData = [
  {
    id: 1,
    title: 'AI-Powered Services',
    subtitle: 'Latest Tech',
    route: "/services",
    image: 'https://images.unsplash.com/photo-1634906344066-2c9dfd5e8ef7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'New',
    rating: '4.9',
    price: 'From ₨2,500'
  },
  {
    id: 2,
    title: 'Smart Wall Panels',
    subtitle: 'Premium Design',
    route: "/services",
    image: 'https://images.unsplash.com/photo-1701422522251-332666e37ed3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'Trending',
    rating: '4.8',
    price: 'From ₨8,500'
  },
  {
    id: 3,
    title: 'Pure Water Systems',
    subtitle: 'Health First',
    route: "/services",
    image: 'https://images.unsplash.com/photo-1570615541379-e6b7ab6d4eb9?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'Popular',
    rating: '4.7',
    price: 'From ₨15,000'
  },
  {
    id: 4,
    title: 'Smart Security',
    subtitle: 'Next-Gen',
    route: "/services",
    image: 'https://images.unsplash.com/photo-1646753002835-74296cb27a83?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'Hot',
    rating: '4.9',
    price: 'From ₨12,000'
  },
  {
    id: 5,
    title: 'Deep Kitchen Cleaning',
    subtitle: 'Hygiene Pro',
    route: "/services",
    image: 'https://images.unsplash.com/photo-1736433622548-4adbbc1c2cf2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'Premium',
    rating: '4.8',
    price: 'From ₨3,500'
  },
  {
    id: 6,
    title: 'Complete Home Painting',
    subtitle: 'Transform Space',
    route: "/services",
    image: 'https://images.unsplash.com/photo-1633466985376-01a6457f3176?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'Expert',
    rating: '4.9',
    price: 'From ₨25,000'
  },
  {
    id: 7,
    title: 'Tech Repair & Support',
    subtitle: 'All Devices',
    route: "/services",
    image: 'https://images.unsplash.com/photo-1658240527554-9cf987b4de49?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'Fast',
    rating: '4.7',
    price: 'From ₨1,500'
  },
  {
    id: 8,
    title: 'Luxury Spa Experience',
    subtitle: 'Wellness Pro',
    route: "/services",
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhJTIwYXl1cnZlZGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    badge: 'Luxury',
    rating: '4.9',
    price: 'From ₨8,000'
  },
  {
    id: 9,
    title: 'Premium Hair Studio',
    subtitle: 'Style Experts',
    route: "/services",
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFpciUyMHN0dWRpb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    badge: 'Trendy',
    rating: '4.8',
    price: 'From ₨2,000'
  },
  {
    id: 10,
    title: 'AC Maintenance Pro',
    subtitle: 'Climate Control',
    route: "/services",
    image: 'https://images.unsplash.com/photo-1709432767122-d3cb5326911a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'Essential',
    rating: '4.7',
    price: 'From ₨2,500'
  }
];

const getBadgeIcon = (badge) => {
  switch (badge) {
    case 'New': return <FiHeart className="w-3 h-3" />;
    case 'Trending': return <FiTrendingUp className="w-3 h-3" />;
    case 'Hot': return <FiZap className="w-3 h-3" />;
    case 'Popular': return <FiStar className="w-3 h-3" />;
    case 'Premium': return <FiAward className="w-3 h-3" />;
    default: return <FiStar className="w-3 h-3" />;
  }
};

// Unified color theory - Emerald brand with teal variations
const getBadgeColor = (badge) => {
  switch (badge) {
    case 'New': return 'bg-gradient-to-r from-emerald-500 to-emerald-600';
    case 'Trending': return 'bg-gradient-to-r from-teal-500 to-teal-600';
    case 'Hot': return 'bg-gradient-to-r from-amber-500 to-orange-600';
    case 'Popular': return 'bg-gradient-to-r from-emerald-600 to-teal-500';
    case 'Premium': return 'bg-gradient-to-r from-teal-600 to-emerald-500';
    case 'Expert': return 'bg-gradient-to-r from-emerald-700 to-teal-600';
    case 'Fast': return 'bg-gradient-to-r from-teal-400 to-emerald-500';
    case 'Luxury': return 'bg-gradient-to-r from-amber-400 to-amber-500';
    case 'Trendy': return 'bg-gradient-to-r from-emerald-500 to-teal-400';
    case 'Essential': return 'bg-gradient-to-r from-emerald-600 to-emerald-700';
    default: return 'bg-gradient-to-r from-emerald-500 to-teal-500';
  }
};

const NewNoteworthy = () => {
  const navigate = useNavigate();

  const handleCardClick = (route) => {
    navigate(route);
  };

  return (
    <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mb-6">
            <FiAward className="text-white text-2xl" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            New & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Noteworthy</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest innovations and trending services. From cutting-edge technology 
            to time-tested excellence, find what makes our platform special.
          </p>
        </div>
        
        {/* Desktop Grid (2 rows of 5 columns) */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-6 mb-12">
          {cardData.map((card) => (
            <div 
              key={card.id} 
              onClick={() => handleCardClick(card.route)}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border border-emerald-100 hover:-translate-y-2"
            >
              {/* Badge */}
              <div className="absolute top-3 left-3 z-10">
                <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold text-white ${getBadgeColor(card.badge)}`}>
                  {getBadgeIcon(card.badge)}
                  {card.badge}
                </div>
              </div>
              
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Rating overlay */}
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                  <div className="flex items-center gap-1">
                    <FiStar className="text-amber-400 fill-current" size={12} />
                    <span className="text-xs font-semibold text-gray-800">{card.rating}</span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-emerald-700 transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  {card.subtitle}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-emerald-600">
                    {card.price}
                  </span>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FiArrowRight className="text-emerald-600" size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet Grid */}
        <div className="hidden md:grid lg:hidden md:grid-cols-3 gap-6 mb-12">
          {cardData.slice(0, 6).map((card) => (
            <div 
              key={card.id} 
              onClick={() => handleCardClick(card.route)}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border border-emerald-100 hover:-translate-y-2"
            >
              <div className="absolute top-3 left-3 z-10">
                <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold text-white ${getBadgeColor(card.badge)}`}>
                  {getBadgeIcon(card.badge)}
                  {card.badge}
                </div>
              </div>
              
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                  <div className="flex items-center gap-1">
                    <FiStar className="text-amber-400 fill-current" size={12} />
                    <span className="text-xs font-semibold text-gray-800">{card.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-emerald-700 transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  {card.subtitle}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-emerald-600">
                    {card.price}
                  </span>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FiArrowRight className="text-emerald-600" size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden flex overflow-x-auto pb-4 gap-4 scroll-smooth snap-x snap-mandatory">
          {cardData.map((card) => (
            <div 
              key={card.id} 
              className="flex-shrink-0 w-64 snap-start bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer border border-emerald-100"
              onClick={() => handleCardClick(card.route)}
            >
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 z-10">
                  <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold text-white ${getBadgeColor(card.badge)}`}>
                    {getBadgeIcon(card.badge)}
                    {card.badge}
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                  <div className="flex items-center gap-1">
                    <FiStar className="text-amber-400 fill-current" size={12} />
                    <span className="text-xs font-semibold text-gray-800">{card.rating}</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-1">{card.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{card.subtitle}</p>
                <span className="text-sm font-semibold text-emerald-600">{card.price}</span>
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
            Explore All Services
            <FiArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewNoteworthy;