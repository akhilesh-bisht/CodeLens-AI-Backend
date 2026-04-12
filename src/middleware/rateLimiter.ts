import { Request, Response, NextFunction } from 'express';
import rateLimit from 'express-rate-limit';

// Rate limiting middleware to prevent abuse of API endpoints
const rateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: (req: Request) => {
    // Set limits based on the endpoint
    if (req.path.startsWith('/analyze')) {
      return 5; // Limit to 5 requests per hour for analysis requests
    } else if (req.path.startsWith('/qa')) {
      return 50; // Limit to 50 requests per hour for Q&A requests
    }
    return 1000; // Limit to 1000 requests per hour for general API calls
  },
  message: {
    success: false,
    message: 'Too many requests, please try again later.',
    code: 'RATE_LIMIT_EXCEEDED',
  },
});

// Export the rate limiter middleware
export default rateLimiter;