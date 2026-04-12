import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { User } from '../models/User';
import { config } from '../config/environment';

/**
 * Generates a JWT token for a given user.
 * @param user - The user object for which the token is generated.
 * @returns A signed JWT token.
 */
export const generateToken = (user: User): string => {
    const payload = {
        id: user.id,
        email: user.email,
        name: user.name,
    };
    return jwt.sign(payload, config.JWT_SECRET, { expiresIn: '1h' });
};

/**
 * Middleware to verify the JWT token.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next middleware function.
 */
export const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ success: false, message: 'No token provided' });
    }

    jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ success: false, message: 'Failed to authenticate token' });
        }
        req.user = decoded; // Attach the decoded user information to the request
        next();
    });
};