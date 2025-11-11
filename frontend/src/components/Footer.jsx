import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
  FaApple,
  FaGooglePlay,
  FaHeart,
  FaShieldAlt,
  FaAward,
  FaHeadset
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Home Cleaning', icon: '🧹' },
    { name: 'Plumbing Services', icon: '🔧' },
    { name: 'Electrical Work', icon: '⚡' },
    { name: 'AC Service & Repair', icon: '❄️' },
    { name: 'Carpentry', icon: '🔨' },
    { name: 'Painting', icon: '🎨' }
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about', icon: FaHeart },
    { name: 'Contact', path: '/contact', icon: FaHeadset },
    { name: 'Careers', path: '#', icon: FaAward },
    { name: 'Trust & Safety', path: '#', icon: FaShieldAlt },
    { name: 'Press & Media', path: '#', icon: FaYoutube }
  ];

  const legalLinks = [
    'Terms of Service',
    'Privacy Policy', 
    'Cookie Policy',
    'Refund Policy'
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full flex items-center justify-center mr-3">
                <span className="text-gray-900 text-lg font-bold">🌿</span>
              </div>
              <h3 className="text-2xl font-bold text-white">DoorElite</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Pakistan's most trusted platform for professional home services.
              Connecting skilled professionals with households since 2014.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-3">
              <a href="#" className="bg-emerald-600 hover:bg-emerald-500 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaFacebook />
              </a>
              <a href="#" className="bg-blue-500 hover:bg-blue-400 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaTwitter />
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-500 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaInstagram />
              </a>
              <a href="#" className="bg-blue-700 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaLinkedin />
              </a>
              <a href="#" className="bg-red-600 hover:bg-red-500 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-emerald-400">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to="/services" 
                    className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 group"
                  >
                    <span className="mr-3 text-lg">{service.icon}</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-400">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 group"
                  >
                    <link.icon className="mr-3 text-emerald-400" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & App */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-purple-400">Get in Touch</h4>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="bg-emerald-600 p-2 rounded-full">
                  <FaEnvelope className="text-white text-sm" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Us</p>
                  <a href="mailto:support@doorelite.com" className="text-white hover:text-emerald-400 transition-colors">
                    support@doorelite.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-amber-600 p-2 rounded-full">
                  <FaPhone className="text-white text-sm" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call Us</p>
                  <a href="tel:+18001234567" className="text-white hover:text-amber-400 transition-colors">
                    +1 (800) 123-4567
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-2 rounded-full">
                  <FaMapMarkerAlt className="text-white text-sm" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Head Office</p>
                  <p className="text-white">Pakistan</p>
                </div>
              </div>
            </div>

            
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          
          {/* Copyright */}
          <div className="text-center lg:text-left">
            <p className="text-gray-400">
              © {currentYear} DoorElite. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Empowering millions of professionals worldwide
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((link, index) => (
              <Link 
                key={index}
                to="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Security & Trust */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-emerald-800 px-3 py-2 rounded-full">
              <FaShieldAlt className="text-emerald-400 text-sm" />
              <span className="text-emerald-400 text-sm font-medium">SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2 bg-amber-800 px-3 py-2 rounded-full">
              <FaAward className="text-amber-400 text-sm" />
              <span className="text-amber-400 text-sm font-medium">Verified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <span>🌟 4.8/5 Customer Rating</span>
              <span>•</span>
              <span>🛡️ 100% Secure Payments</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;