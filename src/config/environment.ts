import dotenv from 'dotenv';

dotenv.config();

export const config = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: Number(process.env.PORT) || 5000,
  DB_URI: process.env.DB_URI || 'mongodb://localhost:27017/codelens-ai',
  JWT_SECRET: process.env.JWT_SECRET || 'change-me-in-production',
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || '1h',
  CORS_ORIGIN: process.env.CORS_ORIGIN || '*',
};

export default config;
