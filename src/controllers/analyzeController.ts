import { Request, Response } from 'express';
import { AnalyzeService } from '../services/analyzeService';

/**
 * Controller for handling analysis of GitHub repositories.
 */
export class AnalyzeController {
    private analyzeService: AnalyzeService;

    constructor() {
        this.analyzeService = new AnalyzeService();
    }

    /**
     * Analyze a GitHub repository.
     * @param req - The request object containing the repository URL.
     * @param res - The response object to send the result.
     */
    public async analyzeRepository(req: Request, res: Response): Promise<Response> {
        const { url } = req.body;

        try {
            const analysisResult = await this.analyzeService.analyzeRepository(url);
            return res.status(200).json({
                success: true,
                analysis: analysisResult,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Failed to analyze repository',
                details: error.message,
            });
        }
    }

    /**
     * Get the status of an ongoing analysis.
     * @param req - The request object containing the analysis ID.
     * @param res - The response object to send the result.
     */
    public async getAnalysisStatus(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        try {
            const statusResult = await this.analyzeService.getAnalysisStatus(id);
            return res.status(200).json({
                success: true,
                status: statusResult,
            });
        } catch (error) {
            return res.status(404).json({
                success: false,
                message: 'Analysis not found',
                details: error.message,
            });
        }
    }
}