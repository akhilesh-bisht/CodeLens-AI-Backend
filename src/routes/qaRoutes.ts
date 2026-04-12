import { Router } from 'express';
import { QAController } from '../controllers/qaController';
import { authMiddleware } from '../middleware/authMiddleware';
import { validator } from '../middleware/validator';
import { askQuestionSchema, getHistorySchema } from '../utils/validators';

const router = Router();
const qaController = new QAController();

/**
 * @route POST /qa/ask
 * @desc Ask a question about a specific project
 * @access Private
 * @param {string} projectId - The ID of the project
 * @param {string} question - The question to ask
 * @param {string} [context] - Optional context for the question (file path or code snippet)
 */
router.post('/ask', authMiddleware, validator(askQuestionSchema), qaController.askQuestion);

/**
 * @route GET /qa/history/:projectId
 * @desc Get Q&A history for a project
 * @access Private
 * @param {string} projectId - The ID of the project
 * @query {number} [page=1] - The page number for pagination
 * @query {number} [limit=20] - The number of results per page
 */
router.get('/history/:projectId', authMiddleware, validator(getHistorySchema), qaController.getHistory);

export default router;