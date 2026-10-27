import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`[Database] MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`[Database Error] Could not connect to MongoDB: ${error.message}`);
    console.warn(`[Database Notice] Server will continue running, but DB queries will fail until MongoDB is connected.`);
  }
};
