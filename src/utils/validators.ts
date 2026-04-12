// src/utils/validators.ts

import { body, validationResult } from 'express-validator';

// Validation rules for user signup
export const signupValidator = [
    body('email')
        .isEmail()
        .withMessage('Please provide a valid email address.'),
    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long.'),
    body('name')
        .notEmpty()
        .withMessage('Name is required.')
];

// Validation rules for user login
export const loginValidator = [
    body('email')
        .isEmail()
        .withMessage('Please provide a valid email address.'),
    body('password')
        .notEmpty()
        .withMessage('Password is required.')
];

// Validation rules for project creation
export const projectValidator = [
    body('url')
        .isURL()
        .withMessage('Please provide a valid GitHub repository URL.')
];

// Middleware to handle validation results
export const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            message: 'Validation failed',
            errors: errors.array()
        });
    }
    next();
};