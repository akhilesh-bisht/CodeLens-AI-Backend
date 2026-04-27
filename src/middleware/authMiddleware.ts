import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';
import { LoginRequest } from '../types/api';

// Middleware to authenticate users based on JWT tokens
export const authMiddleware = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'No token provided',
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string };
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized access',
            });
        }

        req.user = user; // Attach user information to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Invalid token',
        });
    }
};