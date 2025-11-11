import 'dotenv/config';
import mongoose from 'mongoose';

// Define Service schema inline to ensure registration
const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  serviceType: { type: String, required: true },
  provider: { type: String, required: true },
  duration: { type: Number, required: true },
  image: { type: String, required: true },
  rating: { type: Number, default: 0 },
  reviewCount: { type: Number, default: 0 },
  available: { type: Boolean, default: true }
}, { timestamps: true });

const Service = mongoose.model('Service', serviceSchema);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

const seedServices = async () => {
  try {
    console.log('Connecting to database...');
    await connectDB();
    
    // Clear existing services
    await Service.deleteMany({});
    
    // Sample services
    const services = [
      {
        name: "Home Cleaning",
        description: "Complete home cleaning service with eco-friendly products",
        price: 1500,
        serviceType: "cleaning",
        provider: "UrbanClean",
        duration: 120,
        image: "/images/home-cleaning.jpg",
        rating: 4.5,
        reviewCount: 120
      },
      {
        name: "Plumbing Repair",
        description: "Professional plumbing repair and maintenance",
        price: 800,
        serviceType: "plumbing",
        provider: "QuickFix Plumbing",
        duration: 90,
        image: "/images/plumbing.jpg",
        rating: 4.3,
        reviewCount: 89
      },
      {
        name: "Electrical Repair",
        description: "Safe electrical repair and installation services",
        price: 1000,
        serviceType: "electrical",
        provider: "ElectroPro",
        duration: 60,
        image: "/images/electrical.jpg",
        rating: 4.7,
        reviewCount: 156
      },
      {
        name: "Men's Haircut",
        description: "Professional men's haircut and styling",
        price: 300,
        serviceType: "salon",
        provider: "StyleStudio",
        duration: 45,
        image: "/images/mens-salon.jpg",
        rating: 4.4,
        reviewCount: 203
      },
      {
        name: "Women's Facial",
        description: "Relaxing facial treatment for glowing skin",
        price: 1200,
        serviceType: "salon",
        provider: "GlowSpa",
        duration: 90,
        image: "/images/spa-women.jpg",
        rating: 4.6,
        reviewCount: 178
      }
    ];
    
    const createdServices = await Service.insertMany(services);
    console.log(`Created ${createdServices.length} services:`);
    createdServices.forEach(service => {
      console.log(`- ${service.name} (ID: ${service._id})`);
    });
    
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('Error seeding services:', error);
    process.exit(1);
  }
};

seedServices();