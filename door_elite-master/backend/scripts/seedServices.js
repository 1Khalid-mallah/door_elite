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
    console.log('Cleared existing services...');
    
    // Comprehensive services list matching your frontend components
    const services = [
      // Home Cleaning Services
      {
        name: "Complete Home Cleaning",
        description: "Professional deep cleaning for your entire home with eco-friendly products",
        price: 1500,
        serviceType: "cleaning",
        provider: "UrbanClean Pro",
        duration: 180,
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
        rating: 4.5,
        reviewCount: 145,
        available: true
      },
      {
        name: "Kitchen Deep Clean",
        description: "Specialized kitchen cleaning including appliances and cabinets",
        price: 800,
        serviceType: "cleaning",
        provider: "SparkleClean",
        duration: 120,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
        rating: 4.3,
        reviewCount: 98,
        available: true
      },
      {
        name: "Bathroom Sanitization",
        description: "Complete bathroom cleaning and sanitization service",
        price: 600,
        serviceType: "cleaning",
        provider: "Hygiene Experts",
        duration: 90,
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
        rating: 4.6,
        reviewCount: 112,
        available: true
      },

      // Home Painting Services
      {
        name: "Interior Wall Painting",
        description: "Professional interior wall painting with premium paints",
        price: 25,
        serviceType: "painting",
        provider: "ColorWorld",
        duration: 480,
        image: "/images/home-painting.jpg",
        rating: 4.4,
        reviewCount: 87,
        available: true
      },
      {
        name: "Exterior House Painting",
        description: "Complete exterior painting with weather-resistant paints",
        price: 35,
        serviceType: "painting",
        provider: "PaintPro Solutions",
        duration: 720,
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
        rating: 4.2,
        reviewCount: 63,
        available: true
      },
      {
        name: "Wall Panel Installation",
        description: "Modern wall panel installation for accent walls",
        price: 1500,
        serviceType: "painting",
        provider: "PanelMaster",
        duration: 240,
        image: "/images/WallPanelCard.jpg",
        rating: 4.7,
        reviewCount: 94,
        available: true
      },

      // Plumbing Services
      {
        name: "Leak Repair",
        description: "Professional leak detection and repair service",
        price: 800,
        serviceType: "plumbing",
        provider: "QuickFix Plumbing",
        duration: 90,
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
        rating: 4.3,
        reviewCount: 156,
        available: true
      },
      {
        name: "Drain Cleaning",
        description: "Complete drain cleaning and blockage removal",
        price: 600,
        serviceType: "plumbing",
        provider: "DrainClean Pro",
        duration: 120,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
        rating: 4.1,
        reviewCount: 78,
        available: true
      },
      {
        name: "Toilet Installation",
        description: "Professional toilet installation and fitting",
        price: 1200,
        serviceType: "plumbing",
        provider: "PlumbRight",
        duration: 150,
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
        rating: 4.5,
        reviewCount: 67,
        available: true
      },

      // Electrical Services
      {
        name: "Electrical Repair",
        description: "Safe electrical repair and maintenance services",
        price: 1000,
        serviceType: "electrical",
        provider: "ElectroPro",
        duration: 120,
        image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
        rating: 4.7,
        reviewCount: 189,
        available: true
      },
      {
        name: "Fan Installation",
        description: "Professional ceiling fan installation and wiring",
        price: 400,
        serviceType: "electrical",
        provider: "QuickElectrics",
        duration: 60,
        image: "https://images.unsplash.com/photo-1586861203927-8007df40b2dc?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
        rating: 4.4,
        reviewCount: 132,
        available: true
      },
      {
        name: "Light Fixture Installation",
        description: "Modern light fixture installation and setup",
        price: 500,
        serviceType: "electrical",
        provider: "BrightLight Solutions",
        duration: 90,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
        rating: 4.6,
        reviewCount: 104,
        available: true
      },

      // Smart Home Services
      {
        name: "Smart Home Setup",
        description: "Complete smart home device installation and configuration",
        price: 2500,
        serviceType: "tech",
        provider: "SmartTech Pro",
        duration: 240,
        image: "/images/smart-home.jpg",
        rating: 4.8,
        reviewCount: 76,
        available: true
      },
      {
        name: "Security Camera Installation",
        description: "Professional security camera system installation",
        price: 1800,
        serviceType: "tech",
        provider: "SecureVision",
        duration: 180,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
        rating: 4.5,
        reviewCount: 89,
        available: true
      },
      {
        name: "WiFi Network Setup",
        description: "Complete home WiFi network setup and optimization",
        price: 1200,
        serviceType: "tech",
        provider: "NetConnect",
        duration: 120,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
        rating: 4.3,
        reviewCount: 125,
        available: true
      },

      // Appliance Services
      {
        name: "RO Purifier Installation",
        description: "Professional RO water purifier installation and setup",
        price: 800,
        serviceType: "appliance",
        provider: "AquaClean",
        duration: 120,
        image: "/images/ro-purifier.jpg",
        rating: 4.6,
        reviewCount: 143,
        available: true
      },
      {
        name: "AC Service & Repair",
        description: "Complete AC servicing, repair and maintenance",
        price: 1500,
        serviceType: "appliance",
        provider: "CoolAir Services",
        duration: 150,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
        rating: 4.4,
        reviewCount: 167,
        available: true
      },
      {
        name: "Refrigerator Repair",
        description: "Professional refrigerator repair and maintenance",
        price: 1000,
        serviceType: "appliance",
        provider: "FridgeFix Pro",
        duration: 120,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
        rating: 4.2,
        reviewCount: 98,
        available: true
      },

      // Salon Services - Women
      {
        name: "Full Body Spa",
        description: "Relaxing full body spa treatment with aromatherapy",
        price: 3500,
        serviceType: "salon",
        provider: "Tranquil Spa",
        duration: 180,
        image: "/images/spa-women.jpg",
        rating: 4.8,
        reviewCount: 234,
        available: true
      },
      {
        name: "Facial Treatment",
        description: "Professional facial treatment for glowing skin",
        price: 1200,
        serviceType: "salon",
        provider: "GlowSpa",
        duration: 90,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
        rating: 4.7,
        reviewCount: 189,
        available: true
      },
      {
        name: "Waxing Service",
        description: "Professional waxing with roll-on technique",
        price: 800,
        serviceType: "salon",
        provider: "SmoothSkin Studio",
        duration: 60,
        image: "/images/roll-on-waxing.jpg",
        rating: 4.5,
        reviewCount: 156,
        available: true
      },
      {
        name: "Hair Styling",
        description: "Professional hair styling and blowout",
        price: 1000,
        serviceType: "salon",
        provider: "StyleStudio",
        duration: 120,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
        rating: 4.6,
        reviewCount: 203,
        available: true
      },
      {
        name: "Manicure & Pedicure",
        description: "Complete manicure and pedicure service",
        price: 900,
        serviceType: "salon",
        provider: "NailArt Studio",
        duration: 120,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
        rating: 4.4,
        reviewCount: 178,
        available: true
      },

      // Salon Services - Men
      {
        name: "Men's Haircut",
        description: "Professional men's haircut and styling",
        price: 400,
        serviceType: "salon",
        provider: "Gentleman's Cut",
        duration: 45,
        image: "https://images.unsplash.com/photo-1505503693641-1926193e8d57?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
        rating: 4.5,
        reviewCount: 287,
        available: true
      },
      {
        name: "Men's Facial",
        description: "Specialized facial treatment for men",
        price: 1500,
        serviceType: "salon",
        provider: "Men's Grooming Spa",
        duration: 90,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
        rating: 4.3,
        reviewCount: 134,
        available: true
      },
      {
        name: "Massage Therapy",
        description: "Relaxing full body massage for men",
        price: 2000,
        serviceType: "salon",
        provider: "RelaxZen",
        duration: 120,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
        rating: 4.7,
        reviewCount: 165,
        available: true
      },

      // Carpenter Services
      {
        name: "Furniture Assembly",
        description: "Professional furniture assembly service",
        price: 600,
        serviceType: "carpenter",
        provider: "BuildRight",
        duration: 90,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
        rating: 4.2,
        reviewCount: 112,
        available: true
      },
      {
        name: "Custom Shelving",
        description: "Custom bookshelf and shelving installation",
        price: 1200,
        serviceType: "carpenter",
        provider: "CraftWood",
        duration: 240,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
        rating: 4.6,
        reviewCount: 87,
        available: true
      },
      {
        name: "Door Repair",
        description: "Door repair, alignment, and hardware replacement",
        price: 800,
        serviceType: "carpenter",
        provider: "DoorMaster",
        duration: 120,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
        rating: 4.4,
        reviewCount: 95,
        available: true
      },

      // Home Repair Services
      {
        name: "General Home Repair",
        description: "Comprehensive home repair and maintenance",
        price: 1000,
        serviceType: "home-repair",
        provider: "FixItAll",
        duration: 180,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
        rating: 4.3,
        reviewCount: 156,
        available: true
      },
      {
        name: "Tile Installation",
        description: "Professional tile flooring installation",
        price: 50,
        serviceType: "home-repair",
        provider: "TilePro",
        duration: 480,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
        rating: 4.5,
        reviewCount: 98,
        available: true
      },
      {
        name: "Window Repair",
        description: "Window glass repair and frame maintenance",
        price: 600,
        serviceType: "home-repair",
        provider: "WindowFix",
        duration: 90,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
        rating: 4.2,
        reviewCount: 76,
        available: true
      },

      // Beauty Services
      {
        name: "Makeup Artist",
        description: "Professional makeup application for events",
        price: 2000,
        serviceType: "beauty",
        provider: "GlamArt",
        duration: 120,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
        rating: 4.8,
        reviewCount: 143,
        available: true
      },
      {
        name: "Bridal Makeup",
        description: "Specialized bridal makeup and styling",
        price: 5000,
        serviceType: "beauty",
        provider: "Bridal Glam",
        duration: 180,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.0&auto=format&fit=crop&w=800&q=80",
        rating: 4.9,
        reviewCount: 89,
        available: true
      }
    ];
    
    console.log('Inserting services...');
    const createdServices = await Service.insertMany(services);
    console.log(`\n✅ Successfully created ${createdServices.length} services!`);
    
    // Group services by type for better overview
    const serviceTypes = {};
    createdServices.forEach(service => {
      if (!serviceTypes[service.serviceType]) {
        serviceTypes[service.serviceType] = [];
      }
      serviceTypes[service.serviceType].push(service.name);
    });
    
    console.log('\n📋 Services by Category:');
    Object.entries(serviceTypes).forEach(([type, names]) => {
      console.log(`\n🏷️  ${type.charAt(0).toUpperCase() + type.slice(1)} (${names.length} services):`);
      names.forEach(name => console.log(`   • ${name}`));
    });
    
    await mongoose.connection.close();
    console.log('\n🔚 Database connection closed. Seeding completed successfully!');
    process.exit(0);
    
  } catch (error) {
    console.error('❌ Error seeding services:', error);
    process.exit(1);
  }
};

seedServices();