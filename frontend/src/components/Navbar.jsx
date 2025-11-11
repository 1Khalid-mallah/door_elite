import { useState, useEffect } from "react";
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiX,
  FiChevronDown
} from "react-icons/fi";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const {
    user,
    logout,
    cart,
    setSearchQuery,
    searchQuery
  } = useAppContext();

  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery || "");
  // const [showSearchDropdown, setShowSearchDropdown] = useState(false); // Disabled for simplified search
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'About', path: '/about' },
  ];

  const handleSearch = (query) => {
    setLocalSearchQuery(query);
    // setShowSearchDropdown(query.length > 0); // Disabled for simplified search
    setSearchQuery(query); // Update global search query immediately
  };

  const handleSearchSubmit = () => {
    setSearchQuery(localSearchQuery);
    if (location.pathname !== "/services") {
      navigate("/services");
    }
    // setShowSearchDropdown(false); // Disabled for simplified search
  };

  const handleLogout = async () => {
    try {
      await logout();
      setIsMenuOpen(false);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if (searchQuery && location.pathname === "/services") {
      setLocalSearchQuery(searchQuery);
    }
  }, [searchQuery, location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showUserDropdown && !event.target.closest('.user-dropdown-container')) {
        setShowUserDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showUserDropdown]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-emerald-700/95 to-emerald-800/95 backdrop-blur-sm text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-teal-200 hover:text-teal-100 flex items-center transition-colors">
            <span className="mr-2 text-2xl">🌿</span> DoorElite
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative group font-semibold px-3 py-2 hover:text-teal-200 transition-all duration-300 rounded-lg hover:bg-emerald-600/50"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-teal-300 to-emerald-300 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            <div className="relative mx-4">
              <input
                type="text"
                placeholder="Search services..."
                className="px-4 py-3 pl-12 rounded-full text-white w-72 focus:outline-none focus:ring-2 focus:ring-teal-300 bg-white/10 backdrop-blur-sm border border-white/20 focus:bg-white/20 transition-all duration-300"
                value={localSearchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearchSubmit()}
              />
              <FiSearch
                className="absolute left-4 top-3.5 text-teal-200 cursor-pointer hover:text-white transition-colors"
                onClick={handleSearchSubmit}
              />
            </div>

            <Link to="/cart" className="relative p-3 hover:bg-emerald-600/60 rounded-full transition-all duration-300 group">
              <FiShoppingCart className="h-5 w-5 text-teal-200 group-hover:text-white transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-teal-400 to-teal-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold shadow-lg">
                  {cartCount}
                </span>
              )}
            </Link>

            {user ? (
              <div className="relative user-dropdown-container">
                <button
                  onClick={() => setShowUserDropdown(!showUserDropdown)}
                  className="flex items-center space-x-2 focus:outline-none group"
                >
                  <div className="h-9 w-9 rounded-full bg-gradient-to-r from-teal-200 to-emerald-200 flex items-center justify-center text-emerald-800 font-bold shadow-lg group-hover:shadow-xl transition-all duration-300">
                    {user.name?.charAt(0).toUpperCase()}
                  </div>
                  <FiChevronDown className={`h-4 w-4 text-white transition-transform duration-300 ${showUserDropdown ? 'rotate-180' : ''}`} />
                </button>
                {showUserDropdown && (
                  <div className="absolute right-0 top-12 bg-white/95 backdrop-blur-sm text-gray-800 rounded-2xl shadow-2xl py-3 w-56 z-50 border border-emerald-100/50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="font-semibold text-emerald-700">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                    <Link to="/profile" onClick={() => setShowUserDropdown(false)} className="flex items-center gap-3 px-4 py-3 hover:bg-emerald-50 transition-colors">
                      <FiUser className="text-emerald-600" size={16} />
                      My Profile
                    </Link>
                    <Link to="/my-orders" onClick={() => setShowUserDropdown(false)} className="flex items-center gap-3 px-4 py-3 hover:bg-emerald-50 transition-colors">
                      <FiShoppingCart className="text-emerald-600" size={16} />
                      Booking History
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setShowUserDropdown(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-emerald-50 border-t border-gray-100 text-emerald-700 font-medium transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:from-teal-600 hover:to-teal-700 flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <FiUser className="h-4 w-4" />
                <span>Login</span>
              </Link>
            )}
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <Link to="/cart" className="relative p-2">
              <FiShoppingCart className="h-6 w-6 text-teal-200" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-teal-400 to-teal-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={toggleMenu}
              className="p-2 focus:outline-none text-teal-200 hover:text-white transition-colors"
            >
              <FiMenu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gradient-to-br from-emerald-800/95 to-emerald-900/95 backdrop-blur-md z-50 flex flex-col items-center justify-center space-y-8">
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 p-3 focus:outline-none text-teal-200 hover:text-white transition-colors rounded-full hover:bg-white/10"
          >
            <FiX className="h-6 w-6" />
          </button>

          <div className="w-4/5 mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                className="w-full px-6 py-4 pl-14 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-300 text-lg shadow-lg"
                value={localSearchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearchSubmit()}
              />
              <FiSearch
                className="absolute left-5 top-4.5 text-gray-500 cursor-pointer"
                onClick={handleSearchSubmit}
              />
            </div>
          </div>

          <div className="space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={toggleMenu}
                className="block text-2xl font-semibold px-6 py-3 hover:text-teal-200 transition-colors hover:bg-white/10 rounded-xl"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col space-y-4 mt-8 w-4/5">
            {user ? (
              <>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-teal-200 to-emerald-200 flex items-center justify-center text-emerald-800 font-bold text-lg mx-auto mb-2">
                    {user.name?.charAt(0).toUpperCase()}
                  </div>
                  <p className="font-semibold text-white">{user.name}</p>
                  <p className="text-teal-200 text-sm">{user.email}</p>
                </div>
                <Link
                  to="/profile"
                  onClick={toggleMenu}
                  className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-center hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="border-3 border-teal-300 text-teal-200 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={toggleMenu}
                  className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-center hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={toggleMenu}
                  className="border-3 border-teal-300 text-teal-200 px-8 py-4 rounded-full font-semibold text-center hover:bg-white/10 transition-all duration-300"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;