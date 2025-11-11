// models/serviceModel.js
import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: true 
    },
    description: { 
      type: String, 
      required: true 
    },
    price: { 
      type: Number, 
      required: true 
    },
    serviceType: { 
      type: String, 
      required: true,
      enum: ['plumbing', 'electrical', 'salon', 'carpenter', 'cleaning', 'painting', 'tech']
    },
    provider: { 
      type: String, 
      required: true 
    },
    duration: { 
      type: Number, 
      required: true // in minutes
    },
    image: { 
      type: String, 
      required: true 
    },
    rating: { 
      type: Number, 
      default: 0,
      min: 0,
      max: 5
    },
    reviewCount: { 
      type: Number, 
      default: 0 
    },
    available: { 
      type: Boolean, 
      default: true 
    }
  },
  { timestamps: true }
);

const Service = mongoose.models.service || mongoose.model('service', serviceSchema);

// Ensure the model is properly registered
try {
  if (!mongoose.models.service) {
    mongoose.model('service', serviceSchema);
  }
} catch (error) {
  console.error('Error registering Service model:', error);
}

export default Service;