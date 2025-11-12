import { useState, useEffect, useCallback, useMemo } from "react";
import { useAppContext } from "../context/AppContext";
import { FiShoppingCart, FiClock, FiCheckCircle, FiFilter } from "react-icons/fi";
import { Link } from "react-router-dom";
import NavbarLayout from "../components/NavbarLayout";

const ServicesPage = () => {
  const { 
    cart, 
    addToCart, 
    searchQuery, 
    setSearchQuery, 
    services, 
    fetchServices, 
    serviceLoading 
  } = useAppContext();
  
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
  const [error, setError] = useState(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Categories for filtering
  const categories = useMemo(() => [
    { id: "all", name: "All Services" },
    { id: "plumbing", name: "Plumbing" },
    { id: "electrical", name: "Electrical" },
    { id: "salon", name: "Salon" },
    { id: "carpenter", name: "Carpentry" },
    { id: "cleaning", name: "Cleaning" },
    { id: "painting", name: "Painting" },
    { id: "tech", name: "Tech Services" }
  ], []);

  // Memoized fetch function to prevent infinite loops
  const loadServices = useCallback(async () => {
    try {
      setError(null);
      const params = {
        serviceType: activeCategory !== 'all' ? activeCategory : undefined,
        search: searchQuery || undefined,
        minPrice: priceRange.min > 0 ? priceRange.min : undefined,
        maxPrice: priceRange.max < 10000 ? priceRange.max : undefined,
        sort: sortBy !== 'default' ? sortBy : undefined
      };
      
      await fetchServices(params);
      setIsInitialLoad(false);
    } catch (err) {
      setError(err.message || "An error occurred while fetching services");
      console.error("Error fetching services:", err);
      setIsInitialLoad(false);
    }
  }, [activeCategory, searchQuery, sortBy, priceRange, fetchServices]);

  // Fetch services when filters change - but only if services array is empty or it's initial load
  useEffect(() => {
    if (isInitialLoad || services.length === 0) {
      loadServices();
    }
  }, [loadServices, isInitialLoad, services.length]);

  // Filter and sort services locally
  const filteredServices = useMemo(() => {
    let filtered = [...services];
    
    // Apply category filter if not already applied by API
    if (activeCategory !== 'all') {
      filtered = filtered.filter(service => service.serviceType === activeCategory);
    }
    
    // Apply search filter if not already applied by API
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query) ||
        service.provider.toLowerCase().includes(query)
      );
    }
    
    // Apply price range filter if not already applied by API
    filtered = filtered.filter(service => 
      service.price >= priceRange.min && service.price <= priceRange.max
    );
    
    // Apply sorting if not already applied by API
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }
    
    return filtered;
  }, [services, activeCategory, searchQuery, sortBy, priceRange]);

  // Handle add to cart
  const handleAddToCart = useCallback((service) => {
    addToCart(service);
  }, [addToCart]);

  // Clear search query when leaving the page
  useEffect(() => {
    return () => {
      setSearchQuery("");
    };
  }, [setSearchQuery]);

  const clearSearch = useCallback(() => {
    setSearchQuery("");
  }, [setSearchQuery]);

  // Handle price range change
  const handlePriceRangeChange = useCallback((type, value) => {
    setPriceRange(prev => ({
      ...prev,
      [type]: parseInt(value) || 0
    }));
  }, []);

  // Reset filters
  const resetFilters = useCallback(() => {
    setActiveCategory("all");
    setSortBy("default");
    setPriceRange({ min: 0, max: 10000 });
    setSearchQuery("");
  }, [setSearchQuery]);

  // Retry function
  const retryFetch = useCallback(() => {
    setError(null);
    setIsInitialLoad(true);
    loadServices();
  }, [loadServices]);

  // Loading state - only show on initial load
  if (serviceLoading && isInitialLoad) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 pb-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading services...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error && !serviceLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 pb-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-lg shadow-md max-w-md">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Error loading services</h3>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={retryFetch} 
            className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md font-medium"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <NavbarLayout bgClass="bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Professional Home Services
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Book trusted professionals for all your home service needs
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for services..."
              className="w-full px-4 py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-4">
            <FiFilter className="text-gray-500 mr-2" />
            <h3 className="text-lg font-medium text-gray-900">Filters</h3>
            <button 
              onClick={resetFilters}
              className="ml-auto text-sm text-emerald-600 hover:text-emerald-800"
            >
              Reset All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === category.id
                        ? "bg-emerald-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={priceRange.min}
                  onChange={(e) => handlePriceRangeChange('min', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                />
                <span className="text-gray-500">-</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={priceRange.max}
                  onChange={(e) => handlePriceRangeChange('max', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Loading indicator for filter changes */}
        {serviceLoading && !isInitialLoad && (
          <div className="text-center py-4">
            <div className="inline-flex items-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-emerald-500 mr-2"></div>
              <span className="text-gray-600">Updating...</span>
            </div>
          </div>
        )}

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredServices.map((service) => (
              <div
                key={service._id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x200?text=Service+Image';
                    }}
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-emerald-100 text-emerald-800">
                      {service.serviceType}
                    </span>
                    {service.rating > 0 && (
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="text-amber-500">★</span>
                        <span className="ml-1">{service.rating.toFixed(1)}</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <FiClock className="mr-1" />
                      <span>{service.duration} mins</span>
                    </div>
                    <div className="text-lg font-bold text-emerald-600">
                      ₹{service.price}
                    </div>
                  </div>
                  <button
                    onClick={() => handleAddToCart(service)}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md font-medium flex items-center justify-center transition-colors"
                  >
                    <FiShoppingCart className="mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center bg-gray-100 rounded-full h-16 w-16 mb-4">
              <FiCheckCircle className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No services found
            </h3>
            <p className="text-gray-500">
              {searchQuery ? (
                <>
                  No services match your search for "{searchQuery}".<br />
                  Try different keywords or browse all services.
                </>
              ) : (
                "Try adjusting your filters or check back later for new services"
              )}
            </p>
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md font-medium"
              >
                Clear Search
              </button>
            )}
          </div>
        )}

        {/* View Cart Button (shown only when cart has items) */}
        {cart.length > 0 && (
          <div className="mt-8 text-center">
            <Link
              to="/cart"
              className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-md font-medium transition-colors"
            >
              <FiShoppingCart className="mr-2" />
              Proceed to Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
            </Link>
          </div>
        )}
      </div>
    </NavbarLayout>
  );
};

export default ServicesPage;