import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiHome, 
  FiSmartphone, 
  FiShield, 
  FiWifi,
  FiZap,
  FiArrowRight,
  FiEye,
  FiLock,
  FiSettings
} from 'react-icons/fi';

const SmartHome = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/services');
  };

  const smartFeatures = [
    {
      icon: <FiLock className="w-6 h-6" />,
      title: "Smart Locks",
      description: "Keyless entry with mobile control"
    },
    {
      icon: <FiEye className="w-6 h-6" />,
      title: "Security Cameras",
      description: "24/7 monitoring with live feeds"
    },
    {
      icon: <FiZap className="w-6 h-6" />,
      title: "Smart Lighting",
      description: "Automated lighting control"
    },
    {
      icon: <FiSettings className="w-6 h-6" />,
      title: "Home Automation",
      description: "Complete smart home integration"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Section */}
        <div 
          onClick={handleClick}
          className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            
            {/* Content Side */}
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl mb-6">
                <FiHome className="text-white text-2xl" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Smart Home{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  Solutions
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your home into a smart, secure, and efficient living space with our 
                cutting-edge home automation and security solutions.
              </p>
              
              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {smartFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-emerald-50 rounded-xl">
                    <div className="text-emerald-600">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                      <p className="text-xs text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Explore Smart Home
                  <FiArrowRight className="ml-2" />
                </button>
                
                <button className="inline-flex items-center border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300">
                  <FiSmartphone className="mr-2" />
                  Download App
                </button>
              </div>
            </div>
            
            {/* Image Side */}
            <div className="relative h-96 lg:h-auto overflow-hidden">
              <img 
                src="/images/smart-home.jpg" 
                alt="Smart Home Automation Solutions"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay with smart device mockups */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Floating device widgets */}
              <div className="absolute top-8 right-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <FiWifi className="text-white" size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Connected</div>
                      <div className="text-xs text-gray-600">5 Devices</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="grid grid-cols-3 gap-3 text-center text-white">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3">
                    <div className="text-lg font-bold">24/7</div>
                    <div className="text-xs opacity-90">Security</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3">
                    <div className="text-lg font-bold">40%</div>
                    <div className="text-xs opacity-90">Energy Save</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3">
                    <div className="text-lg font-bold">100%</div>
                    <div className="text-xs opacity-90">Control</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Partners Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Powered by Leading Smart Home Technology</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Amazon Alexa", logo: "🎤" },
              { name: "Google Home", logo: "🏠" },
              { name: "Apple HomeKit", logo: "🍎" },
              { name: "Samsung SmartThings", logo: "📱" }
            ].map((partner, index) => (
              <div key={index} className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-3">{partner.logo}</div>
                <h4 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {partner.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartHome;