import { Router } from 'express';
import authRoutes from './authRoutes';
import projectRoutes from './projectRoutes';
import analyzeRoutes from './analyzeRoutes';
import qaRoutes from './qaRoutes';
import settingsRoutes from './settingsRoutes';

// Create a new router instance
const router = Router();

// Define the base routes for the application
router.use('/auth', authRoutes);
router.use('/projects', projectRoutes);
router.use('/analyze', analyzeRoutes);
router.use('/qa', qaRoutes);
router.use('/settings', settingsRoutes);

// Export the router to be used in the main application
export default router;