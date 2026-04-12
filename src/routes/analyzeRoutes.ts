import { Router } from 'express';
import { AnalyzeController } from '../controllers/analyzeController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();
const analyzeController = new AnalyzeController();

/**
 * @route POST /analyze
 * @desc Analyze a GitHub repository
 * @access Private
 * @param {string} url - The URL of the GitHub repository to analyze
 * @returns {object} - The analysis result with status
 */
router.post('/', authMiddleware, analyzeController.analyzeRepository);

/**
 * @route GET /analyze/:id/status
 * @desc Get the status of an analysis
 * @access Private
 * @param {string} id - The ID of the analysis
 * @returns {object} - The status of the analysis
 */
router.get('/:id/status', authMiddleware, analyzeController.getAnalysisStatus);

export default router;