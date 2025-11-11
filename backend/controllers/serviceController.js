import Service from '../models/serviceModel.js';
import mongoose from 'mongoose';

// Get all services
const listServices = async (req, res) => {
  try {
    const { serviceType, search, minPrice, maxPrice, sort } = req.query;
    
    // Build query
    let query = { available: true };
    
    if (serviceType) {
      query.serviceType = serviceType;
    }
    
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { provider: { $regex: search, $options: 'i' } }
      ];
    }
    
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = parseFloat(minPrice);
      if (maxPrice) query.price.$lte = parseFloat(maxPrice);
    }
    
    // Sort options
    let sortOptions = {};
    if (sort === 'price-low') sortOptions.price = 1;
    else if (sort === 'price-high') sortOptions.price = -1;
    else if (sort === 'rating') sortOptions.rating = -1;
    else sortOptions.createdAt = -1;
    
    const services = await Service.find(query).sort(sortOptions);
    
    res.json({ success: true, services });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get single service
const getService = async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "Invalid service ID" });
    }
    
    const service = await Service.findById(id);
    
    if (!service) {
      return res.status(404).json({ success: false, message: "Service not found" });
    }
    
    res.json({ success: true, service });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Add new service (admin only)
const addService = async (req, res) => {
  try {
    const { name, description, price, serviceType, provider, duration } = req.body;
    const imageFile = req.file;
    
    if (!name || !description || !price || !serviceType || !provider || !duration) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }
    
    let imageUrl = '/images/default-service.jpg'; // Default image
    if (imageFile) {
      // In a real application, you would save the file to a directory or upload to a service
      imageUrl = `/uploads/${imageFile.filename}`;
    }
    
    const serviceData = {
      name,
      description,
      price: parseFloat(price),
      serviceType,
      provider,
      duration: parseInt(duration),
      image: imageUrl
    };
    
    const service = new Service(serviceData);
    await service.save();
    
    res.json({ success: true, message: "Service added successfully", service });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update service (admin only)
const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, serviceType, provider, duration, available, image } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "Invalid service ID" });
    }
    
    let updateData = {};
    
    if (name) updateData.name = name;
    if (description) updateData.description = description;
    if (price) updateData.price = parseFloat(price);
    if (serviceType) updateData.serviceType = serviceType;
    if (provider) updateData.provider = provider;
    if (duration) updateData.duration = parseInt(duration);
    if (available !== undefined) updateData.available = available === 'true';
    if (image) updateData.image = image;
    
    const service = await Service.findByIdAndUpdate(id, updateData, { new: true });
    
    if (!service) {
      return res.status(404).json({ success: false, message: "Service not found" });
    }
    
    res.json({ success: true, message: "Service updated successfully", service });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete service (admin only)
const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "Invalid service ID" });
    }
    
    const service = await Service.findByIdAndDelete(id);
    
    if (!service) {
      return res.status(404).json({ success: false, message: "Service not found" });
    }
    
    res.json({ success: true, message: "Service deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { listServices, getService, addService, updateService, deleteService };