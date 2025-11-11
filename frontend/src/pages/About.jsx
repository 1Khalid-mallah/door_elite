import React from 'react';
import {
  FaUsers,
  FaGlobe,
  FaChartLine,
  FaShieldAlt,
  FaLightbulb,
  FaHandshake,
  FaStar,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaPlay,
  FaCheck,
  FaAward,
  FaRocket,
  FaHeart,
  FaCog
} from 'react-icons/fa';

const About = () => {
  const stats = [
    {
      icon: FaUsers,
      number: '50,000+',
      label: 'Verified Professionals',
      color: 'emerald'
    },
    {
      icon: FaGlobe,
      number: '25+',
      label: 'Cities Covered',
      color: 'blue'
    },
    {
      icon: FaStar,
      number: '2M+',
      label: 'Happy Customers',
      color: 'amber'
    },
    {
      icon: FaAward,
      number: '4.8/5',
      label: 'Average Rating',
      color: 'purple'
    }
  ];

  const values = [
    {
      icon: FaHeart,
      title: 'Customer First',
      description: 'We prioritize customer satisfaction above everything else, ensuring every service exceeds expectations.',
      color: 'emerald'
    },
    {
      icon: FaShieldAlt,
      title: 'Trust & Safety',
      description: 'Rigorous background checks and continuous monitoring ensure your safety and peace of mind.',
      color: 'blue'
    },
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'We leverage cutting-edge technology to streamline and enhance the service experience.',
      color: 'amber'
    },
    {
      icon: FaHandshake,
      title: 'Integrity',
      description: 'Transparent pricing, honest communication, and ethical business practices guide everything we do.',
      color: 'purple'
    },
    {
      icon: FaRocket,
      title: 'Excellence',
      description: 'We set high standards and continuously strive to exceed them in every interaction.',
      color: 'indigo'
    },
    {
      icon: FaCog,
      title: 'Reliability',
      description: 'Consistent, dependable service delivery you can count on, every single time.',
      color: 'green'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Co-Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c08640c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      linkedin: '#',
      instagram: '#',
      twitter: '#'
    },
    {
      name: 'Michael Chen',
      role: 'Co-Founder & CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      linkedin: '#',
      instagram: '#',
      twitter: '#'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Chief Operating Officer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      linkedin: '#',
      instagram: '#',
      twitter: '#'
    },
    {
      name: 'David Kumar',
      role: 'Chief Financial Officer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      linkedin: '#',
      instagram: '#',
      twitter: '#'
    },
    {
      name: 'Lisa Wang',
      role: 'Chief Product Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      linkedin: '#',
      instagram: '#',
      twitter: '#'
    },
    {
      name: 'Ahmed Hassan',
      role: 'Chief Marketing Officer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      linkedin: '#',
      instagram: '#',
      twitter: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full mb-8">
            <FaRocket className="text-white text-3xl" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600">DoorElite</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're revolutionizing how people access and deliver professional home services, 
            creating opportunities for millions while building trust in every interaction.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-${stat.color}-100 rounded-full mb-4`}>
                  <stat.icon className={`text-2xl text-${stat.color}-600`} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Founded with a vision to bridge the gap between skilled professionals and households
                  seeking quality services, DoorElite has grown into Pakistan's most trusted platform
                  for home services.
                </p>
                <p>
                  We believe that everyone deserves access to reliable, professional services 
                  delivered by verified experts. Our technology-first approach ensures transparency, 
                  quality, and convenience in every interaction.
                </p>
                <p>
                  Today, we're proud to empower thousands of professionals while serving millions 
                  of satisfied customers across the country.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  '5-Step Verification Process',
                  '24/7 Customer Support',
                  '100% Satisfaction Guarantee',
                  'Transparent Pricing'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-emerald-100 rounded-full p-1">
                      <FaCheck className="text-emerald-600 text-sm" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Our Mission"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-r from-emerald-400 to-amber-400 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every interaction we have.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-${value.color}-100 rounded-full mb-6`}>
                  <value.icon className={`text-2xl text-${value.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders driving innovation and excellence in the home services industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <a href={member.linkedin} className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                      <FaLinkedin />
                    </a>
                    <a href={member.instagram} className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition-colors">
                      <FaInstagram />
                    </a>
                    <a href={member.twitter} className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition-colors">
                      <FaTwitter />
                    </a>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-emerald-600 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-amber-600 opacity-90"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join millions of satisfied customers who trust DoorElite for their home service needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                  Book a Service
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
                  Partner With Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;