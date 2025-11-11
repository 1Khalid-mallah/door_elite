import React, { useState } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPaperPlane,
  FaChevronDown,
  FaChevronUp,
  FaCheck
} from 'react-icons/fa';
import { toast } from 'react-toastify';

const Contact = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full mb-6">
            <FaPaperPlane className="text-white text-2xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help! Reach out to us with any questions, feedback, or support needs. 
            Our team is dedicated to providing exceptional service.
          </p>
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="xl:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-colors">
                  <div className="bg-emerald-500 p-3 rounded-full">
                    <FaPhone className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone Support</h3>
                    <p className="text-gray-600 text-sm mb-1">Available 24/7</p>
                    <a href="tel:+18001234567" className="text-emerald-600 font-medium hover:text-emerald-700">
                      +1 (800) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl bg-amber-50 hover:bg-amber-100 transition-colors">
                  <div className="bg-amber-500 p-3 rounded-full">
                    <FaEnvelope className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Support</h3>
                    <p className="text-gray-600 text-sm mb-1">Response within 2 hours</p>
                    <a href="mailto:support@doorelite.com" className="text-amber-600 font-medium hover:text-amber-700">
                      support@doorelite.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                  <div className="bg-blue-500 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Head Office</h3>
                    <p className="text-gray-600 text-sm">
                      Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors">
                  <div className="bg-purple-500 p-3 rounded-full">
                    <FaClock className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600 text-sm">
                      Mon-Fri: 9:00 AM - 6:00 PM<br />
                      Sat-Sun: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-3">
                  <a href="#" className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                    <FaFacebook />
                  </a>
                  <a href="#" className="bg-blue-400 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                    <FaTwitter />
                  </a>
                  <a href="#" className="bg-pink-500 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-colors">
                    <FaInstagram />
                  </a>
                  <a href="#" className="bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="xl:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Tell us more about your inquiry..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-3 px-6 rounded-lg font-medium hover:from-emerald-700 hover:to-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-center">
              Quick answers to common questions. Can't find what you're looking for? Contact us directly.
            </p>
          </div>
          
          <div className="divide-y divide-gray-200">
            {[
              {
                question: "How can I book a service?",
                answer: "Book services easily through our website or mobile app. Simply select your desired service, choose a convenient time slot, and complete the payment process. Our verified professionals will arrive at your doorstep."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit/debit cards, UPI payments, net banking, digital wallets (PhonePe, Google Pay, Paytm), and cash payments. All transactions are secure and encrypted."
              },
              {
                question: "Can I reschedule or cancel my appointment?",
                answer: "Yes! You can reschedule or cancel your appointment up to 2 hours before the scheduled time through your account dashboard or by contacting our customer support."
              },
              {
                question: "Are your service professionals verified?",
                answer: "Absolutely. All our professionals undergo a comprehensive 5-step verification process including background checks, skill assessment, and reference verification."
              },
              {
                question: "What is your service guarantee policy?",
                answer: "We offer a 100% satisfaction guarantee. If you're not satisfied with our service, we'll make it right or provide a full refund. We also offer free re-service if you're not completely happy."
              }
            ].map((item, index) => (
              <div key={index}>
                <button
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium text-gray-900">{item.question}</span>
                  {activeIndex === index ? (
                    <FaChevronUp className="text-emerald-500 flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="text-emerald-500 flex-shrink-0" />
                  )}
                </button>
                <div className={`px-6 pb-6 text-gray-600 transition-all duration-300 ${
                  activeIndex === index ? 'block' : 'hidden'
                }`}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;