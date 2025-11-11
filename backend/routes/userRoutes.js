// backend/routes/userRoutes.js
import express from 'express';
import { registerUser, loginUser, logoutUser, getUserProfile, isAuth } from '../controllers/userController.js';
import protect from '../middleware/protect.js';

const userRouter = express.Router();

// Public routes (no authentication required)
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/logout', logoutUser);

// Protected routes (authentication required)
userRouter.get('/me', protect, getUserProfile);
userRouter.get('/is-auth', isAuth); // Use isAuth directly for auth check

export default userRouter;