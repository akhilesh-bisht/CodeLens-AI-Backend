import { Request, Response, NextFunction } from 'express';

/**
 * Middleware to log incoming requests for monitoring and debugging purposes.
 * Logs the HTTP method, request URL, and timestamp of the request.
 *
 * @param req - The request object
 * @param res - The response object
 * @param next - The next middleware function
 */
const requestLogger = (req: Request, res: Response, next: NextFunction) => {
    const { method, url } = req;
    const timestamp = new Date().toISOString();
    
    console.log(`[${timestamp}] ${method} request to ${url}`);
    
    next(); // Pass control to the next middleware
};

export default requestLogger;