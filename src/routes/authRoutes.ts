import { Router } from 'express';
import { AuthController } from '../controllers/authController';
import { validateSignup, validateLogin } from '../middleware/validator';

const router = Router();
const authController = new AuthController();

/**
 * @route POST /auth/login
 * @desc User login
 * @access Public
 */
router.post('/login', validateLogin, authController.login);

/**
 * @route POST /auth/signup
 * @desc User registration
 * @access Public
 */
router.post('/signup', validateSignup, authController.signup);

/**
 * @route POST /auth/logout
 * @desc User logout
 * @access Private
 */
router.post('/logout', authController.logout);

/**
 * @route GET /auth/me
 * @desc Get current user information
 * @access Private
 */
router.get('/me', authController.getCurrentUser);

export default router;