import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Define the environment configuration
const environment = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 5000,
  DB_URI: process.env.DB_URI || 'mongodb://localhost:27017/codelens-ai',
  JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || '1h',
  CORS_ORIGIN: process.env.CORS_ORIGIN || '*',
};

// Export the environment configuration
export default environment;