// routes/serviceRoutes.js
import express from 'express';
import { listServices, getService, addService, updateService, deleteService } from '../controllers/serviceController.js';
import multer from 'multer';

// Configure multer for file handling
const upload = multer({ dest: 'uploads/' });

const serviceRouter = express.Router();

// Public routes
serviceRouter.get('/list', listServices);
serviceRouter.get('/:id', getService);

// Admin only routes
serviceRouter.post('/add', upload.single('image'), addService);
serviceRouter.put('/:id', upload.single('image'), updateService);
serviceRouter.delete('/:id', deleteService);

export default serviceRouter;