import { Request, Response, NextFunction } from 'express';

// Error handling middleware
const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    // Log the error (could be enhanced with a logging library)
    console.error(err.stack);

    // Determine the status code
    const statusCode = err.status || 500;

    // Send the error response
    res.status(statusCode).json({
        success: false,
        message: err.message || 'Internal Server Error',
        code: err.code || 'INTERNAL_SERVER_ERROR',
        details: err.details || {}
    });
};

export default errorHandler;