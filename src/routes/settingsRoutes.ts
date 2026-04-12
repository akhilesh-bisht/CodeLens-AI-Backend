import { Router } from 'express';
import { SettingsController } from '../controllers/settingsController';
import { authMiddleware } from '../middleware/authMiddleware';
import { validator } from '../middleware/validator';
import { settingsSchema } from '../utils/validators';

const router = Router();
const settingsController = new SettingsController();

// Route to get user settings
router.get('/', authMiddleware, settingsController.getSettings);

// Route to update user settings
router.put('/', authMiddleware, validator(settingsSchema), settingsController.updateSettings);

export default router;