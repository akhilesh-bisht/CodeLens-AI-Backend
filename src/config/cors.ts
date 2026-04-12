import { CorsOptions } from 'cors';

// CORS configuration for allowing cross-origin requests
const corsOptions: CorsOptions = {
  origin: process.env.CORS_ORIGIN || '*', // Allow all origins by default or specify an origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

// Export the CORS options for use in the application
export default corsOptions;