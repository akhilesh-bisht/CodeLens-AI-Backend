import { Request, Response } from 'express';
import { AuthService } from '../services/authService';
import { IUser } from '../models/User';

export class AuthController {
    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    }

    // User login
    public async login(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;

        try {
            const { user, token } = await this.authService.login(email, password);
            return res.status(200).json({
                success: true,
                user,
                token,
            });
        } catch (error) {
            return res.status(401).json({
                success: false,
                message: error.message,
            });
        }
    }

    // User signup
    public async signup(req: Request, res: Response): Promise<Response> {
        const { email, password, name } = req.body;

        try {
            const { user, token } = await this.authService.signup(email, password, name);
            return res.status(201).json({
                success: true,
                user,
                token,
            });
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    }

    // User logout
    public async logout(req: Request, res: Response): Promise<Response> {
        try {
            await this.authService.logout(req.user.id);
            return res.status(200).json({
                success: true,
                message: 'Logged out successfully',
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // Get current user information
    public async getCurrentUser(req: Request, res: Response): Promise<Response> {
        try {
            const user: IUser = await this.authService.getCurrentUser(req.user.id);
            return res.status(200).json({
                success: true,
                user,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
}