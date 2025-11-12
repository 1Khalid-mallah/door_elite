import React from 'react';

/**
 * NavbarLayout Component
 * Provides consistent spacing for pages with fixed navbar
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.bgClass - Background classes (default: 'bg-gradient-to-br from-emerald-50 via-white to-amber-50')
 */
const NavbarLayout = ({ 
  children, 
  className = '', 
  bgClass = 'bg-gradient-to-br from-emerald-50 via-white to-amber-50' 
}) => {
  return (
    <div className={`min-h-screen ${bgClass} pt-20 pb-12 px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default NavbarLayout;