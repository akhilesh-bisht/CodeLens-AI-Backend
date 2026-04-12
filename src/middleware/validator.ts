import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

// Middleware for validating incoming request data
class Validator {
  // Validate user login data
  static validateLogin() {
    return [
      body('email').isEmail().withMessage('Invalid email format'),
      body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    ];
  }

  // Validate user signup data
  static validateSignup() {
    return [
      body('email').isEmail().withMessage('Invalid email format'),
      body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
      body('name').notEmpty().withMessage('Name is required'),
    ];
  }

  // Validate project creation data
  static validateProjectCreation() {
    return [
      body('url').isURL().withMessage('Invalid URL format'),
    ];
  }

  // Validate Q&A request data
  static validateQARequest() {
    return [
      body('projectId').notEmpty().withMessage('Project ID is required'),
      body('question').notEmpty().withMessage('Question cannot be empty'),
    ];
  }

  // Middleware to check for validation errors
  static checkValidationErrors(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array(),
      });
    }
    next();
  }
}

export default Validator;