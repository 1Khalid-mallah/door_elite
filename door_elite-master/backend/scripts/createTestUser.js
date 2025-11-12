import 'dotenv/config';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

const createTestUser = async () => {
  try {
    console.log('Connecting to database...');
    await connectDB();
    
    // Check if test user already exists
    const existingUser = await mongoose.connection.db.collection('users').findOne({ email: 'test@example.com' });
    if (existingUser) {
      console.log('Test user already exists');
      await mongoose.connection.close();
      process.exit(0);
    }
    
    // Create test user
    const hashedPassword = await bcrypt.hash('password123', 10);
    const testUser = await mongoose.connection.db.collection('users').insertOne({
      name: 'Test User',
      email: 'test@example.com',
      password: hashedPassword,
      phone: '1234567890',
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    });
    
    console.log('Test user created successfully:', {
      id: testUser.insertedId,
      email: 'test@example.com',
      name: 'Test User'
    });
    
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('Error creating test user:', error);
    process.exit(1);
  }
};

createTestUser();