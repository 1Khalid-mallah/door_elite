// backend/middleware/protect.js
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

/**
 * Authentication middleware to protect routes
 * Verifies JWT token from cookies and sets user in request
 */
const protect = async (req, res, next) => {
  try {
    // Get token from cookies
    const { token } = req.cookies;

    // Check if token exists
    if (!token) {
      return res.status(401).json({ 
        success: false, 
        message: "Not authorized, no token provided" 
      });
    }

    // Verify token
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    
    // Check if token has valid ID
    if (!tokenDecode.id) {
      return res.status(401).json({ 
        success: false, 
        message: "Invalid token format" 
      });
    }

    // Find user by ID and exclude password field
    const user = await User.findById(tokenDecode.id).select('-password');
    
    // Check if user exists
    if (!user) {
      return res.status(401).json({ 
        success: false, 
        message: "User not found" 
      });
    }

    // Set user ID in request for use in controllers
    req.userId = tokenDecode.id;
    req.user = user;
    
    next();
  } catch (error) {
    console.error('Auth middleware error:', error);
    return res.status(401).json({ 
      success: false, 
      message: "Not authorized, token verification failed" 
    });
  }
};

export default protect;