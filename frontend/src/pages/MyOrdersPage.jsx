// frontend/src/components/MyOrdersPage.jsx
import React, { useState, useEffect } from 'react';
import { FiSearch, FiChevronDown, FiCalendar, FiMapPin, FiPhone, FiStar } from 'react-icons/fi';
import { useAppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

const MyOrdersPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState('');
  
  const { 
    bookings, 
    loading, 
    fetchUserBookings, 
    cancelBooking,
    completeBooking,
    axios 
  } = useAppContext();

  // Filter bookings based on active tab and search query
  useEffect(() => {
    const filtered = bookings.filter(booking => {
      // Get service type from first service
      const serviceType = booking.services && booking.services.length > 0 
        ? booking.services[0].service.serviceType 
        : '';
      
      const matchesTab = activeTab === 'all' || serviceType === activeTab || booking.status === activeTab;
      
      // Get service name from first service
      const serviceName = booking.services && booking.services.length > 0 
        ? booking.services[0].service.name 
        : '';
      
      const matchesSearch = serviceName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (booking.services && booking.services.length > 0 && 
         booking.services[0].service.provider.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesTab && matchesSearch;
    });
    setFilteredBookings(filtered);
  }, [bookings, activeTab, searchQuery]);

  // Fetch bookings on component mount
  useEffect(() => {
    if (bookings.length === 0) {
      fetchUserBookings();
    }
  }, []);

  // Get service icon based on type
  const getServiceIcon = (type) => {
    switch (type) {
      case 'plumbing': return '🔧';
      case 'electrical': return '⚡';
      case 'salon': return '💇';
      case 'carpenter': return '🔨';
      case 'cleaning': return '🧹';
      case 'painting': return '🎨';
      case 'tech': return '💻';
      default: return '📅';
    }
  };

  // Get status badge style
  const getStatusBadge = (status) => {
    switch (status) {
      case 'completed': return 'bg-emerald-100 text-emerald-800';
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'in-progress': return 'bg-amber-100 text-amber-800';
      case 'pending': return 'bg-gray-100 text-gray-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Handle booking cancellation
  const handleCancelBooking = async (bookingId) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      try {
        await cancelBooking(bookingId);
      } catch (error) {
        console.error('Error cancelling booking:', error);
      }
    }
  };

  // Handle booking completion with review
  const handleCompleteBooking = (booking) => {
    setSelectedBooking(booking);
    setShowReviewModal(true);
  };

  // Submit review
  const submitReview = async () => {
    try {
      await completeBooking(selectedBooking._id, rating, review);
      setShowReviewModal(false);
      setSelectedBooking(null);
      setRating(5);
      setReview('');
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-emerald-800">My Bookings</h1>
          <p className="mt-2 text-lg text-emerald-700">
            View your service booking history
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search bookings..."
              className="w-full pl-10 pr-4 py-2 border border-emerald-300 rounded-full focus:ring-2 focus:ring-amber-300 focus:border-amber-300 text-emerald-800"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute left-3 top-2.5 text-emerald-500">
              <FiSearch className="h-5 w-5" />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'all' 
                  ? 'bg-emerald-700 text-white hover:bg-emerald-800' 
                  : 'bg-white text-emerald-700 border border-emerald-300 hover:bg-emerald-50'
              }`}
            >
              All Bookings
            </button>
            <button
              onClick={() => setActiveTab('plumbing')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'plumbing' 
                  ? 'bg-emerald-700 text-white hover:bg-emerald-800' 
                  : 'bg-white text-emerald-700 border border-emerald-300 hover:bg-emerald-50'
              }`}
            >
              Plumbing
            </button>
            <button
              onClick={() => setActiveTab('electrical')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'electrical' 
                  ? 'bg-emerald-700 text-white hover:bg-emerald-800' 
                  : 'bg-white text-emerald-700 border border-emerald-300 hover:bg-emerald-50'
              }`}
            >
              Electrical
            </button>
            <button
              onClick={() => setActiveTab('salon')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'salon' 
                  ? 'bg-emerald-700 text-white hover:bg-emerald-800' 
                  : 'bg-white text-emerald-700 border border-emerald-300 hover:bg-emerald-50'
              }`}
            >
              Salon
            </button>
            <button
              onClick={() => setActiveTab('pending')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'pending' 
                  ? 'bg-amber-500 text-white hover:bg-amber-600' 
                  : 'bg-white text-amber-600 border border-amber-300 hover:bg-amber-50'
              }`}
            >
              Pending
            </button>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500"></div>
          </div>
        )}

        {/* Bookings List */}
        {!loading && (
          <>
            {filteredBookings.length > 0 ? (
              <div className="space-y-4">
                {filteredBookings.map((booking) => (
                  <div 
                    key={booking._id} 
                    className="bg-white shadow-md overflow-hidden rounded-lg hover:shadow-lg transition-shadow duration-300 border border-emerald-100"
                  >
                    <div className="px-4 py-5 sm:px-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="text-3xl">
                            {booking.services && booking.services.length > 0 && 
                             getServiceIcon(booking.services[0].service.serviceType)}
                          </div>
                          <div>
                            <h3 className="text-lg leading-6 font-medium text-emerald-800">
                              {booking.services && booking.services.length > 0 && 
                               booking.services[0].service.name}
                            </h3>
                            <p className="mt-1 text-sm text-emerald-600">
                              {booking.services && booking.services.length > 0 && 
                               booking.services[0].service.provider}
                            </p>
                            <div className="mt-2 flex flex-wrap gap-2">
                              <span className={`px-2 py-1 text-xs rounded-full ${getStatusBadge(booking.status)}`}>
                                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                              </span>
                              {booking.rating && (
                                <span className="flex items-center px-2 py-1 text-xs rounded-full bg-amber-100 text-amber-800">
                                  <FiStar className="mr-1 h-3 w-3 fill-current" />
                                  {booking.rating}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 sm:mt-0 text-right">
                          <p className="text-sm text-emerald-600">
                            {formatDate(booking.date)} at {booking.time}
                          </p>
                          <p className="mt-1 text-lg font-semibold text-emerald-800">
                            ₹{booking.totalAmount}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-emerald-100 px-4 py-4 sm:px-6 bg-emerald-50">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="space-y-1">
                          <p className="text-sm text-emerald-700">
                            <span className="font-medium">Address:</span> {booking.address}
                          </p>
                          <p className="text-sm text-emerald-700">
                            <span className="font-medium">Mobile:</span> {booking.mobile}
                          </p>
                          {booking.instructions && (
                            <p className="text-sm text-emerald-700">
                              <span className="font-medium">Instructions:</span> {booking.instructions}
                            </p>
                          )}
                        </div>
                        <div className="flex space-x-3">
                          <button className="px-4 py-2 border border-emerald-300 rounded-full text-sm font-medium text-emerald-700 hover:bg-emerald-100 transition-colors">
                            View Details
                          </button>
                          {booking.status === 'confirmed' && (
                            <button 
                              onClick={() => handleCompleteBooking(booking)}
                              className="px-4 py-2 border border-transparent rounded-full text-sm font-medium text-white bg-emerald-500 hover:bg-emerald-600 transition-colors shadow hover:shadow-md"
                            >
                              Complete
                            </button>
                          )}
                          {(booking.status === 'pending' || booking.status === 'confirmed') && (
                            <button 
                              onClick={() => handleCancelBooking(booking._id)}
                              className="px-4 py-2 border border-transparent rounded-full text-sm font-medium text-white bg-red-500 hover:bg-red-600 transition-colors shadow hover:shadow-md"
                            >
                              Cancel
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white shadow-md overflow-hidden rounded-lg text-center py-12 border border-emerald-100">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="mx-auto h-12 w-12 text-emerald-400" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-emerald-800">No bookings found</h3>
                <p className="mt-1 text-sm text-emerald-600">
                  {activeTab === 'all'
                    ? "You don't have any bookings yet."
                    : `You don't have any ${activeTab} bookings.`}
                </p>
                <div className="mt-6">
                  <Link
                    to="/services"
                    className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
                  >
                    Book a Service
                  </Link>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Rate Your Service
            </h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rating
              </label>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="text-2xl mr-1 focus:outline-none"
                  >
                    <FiStar 
                      className={`h-6 w-6 ${
                        star <= rating 
                          ? 'text-amber-400 fill-current' 
                          : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Review
              </label>
              <textarea
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Share your experience..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
              ></textarea>
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setShowReviewModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={submitReview}
                className="px-4 py-2 border border-transparent rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOrdersPage;