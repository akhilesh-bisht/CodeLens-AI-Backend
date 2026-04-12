import { Request, Response } from 'express';
import { SettingsService } from '../services/settingsService';

/**
 * SettingsController class handles user settings operations.
 */
export class SettingsController {
    private settingsService: SettingsService;

    constructor() {
        this.settingsService = new SettingsService();
    }

    /**
     * Get user settings.
     * @param req - Express request object
     * @param res - Express response object
     */
    public async getSettings(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.user.id; // Assuming user ID is stored in req.user
            const settings = await this.settingsService.getSettings(userId);
            res.status(200).json({
                success: true,
                settings,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Failed to retrieve settings',
                code: 'SETTINGS_RETRIEVE_ERROR',
                details: error,
            });
        }
    }

    /**
     * Update user settings.
     * @param req - Express request object
     * @param res - Express response object
     */
    public async updateSettings(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.user.id; // Assuming user ID is stored in req.user
            const updatedSettings = await this.settingsService.updateSettings(userId, req.body);
            res.status(200).json({
                success: true,
                settings: updatedSettings,
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: 'Failed to update settings',
                code: 'SETTINGS_UPDATE_ERROR',
                details: error,
            });
        }
    }
}