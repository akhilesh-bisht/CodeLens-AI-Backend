import { Request, Response } from 'express';
import { QAService } from '../services/qaService';
import { QAEntry } from '../models/QAEntry';

export class QAController {
    private qaService: QAService;

    constructor() {
        this.qaService = new QAService();
    }

    // Ask a question about a specific project
    public async askQuestion(req: Request, res: Response): Promise<Response> {
        const { projectId, question, context } = req.body;

        try {
            const answer: QAEntry = await this.qaService.askQuestion(projectId, question, context);
            return res.status(200).json({
                success: true,
                answer,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // Get Q&A history for a project
    public async getHistory(req: Request, res: Response): Promise<Response> {
        const { projectId } = req.params;
        const { page = 1, limit = 20 } = req.query;

        try {
            const history = await this.qaService.getHistory(projectId, Number(page), Number(limit));
            return res.status(200).json({
                success: true,
                questions: history.questions,
                pagination: history.pagination,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
}