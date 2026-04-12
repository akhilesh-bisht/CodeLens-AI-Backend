import { QAEntry } from '../models/QAEntry';
import { User } from '../models/User';
import { Project } from '../models/Project';

/**
 * QAService class handles the business logic for Q&A functionality.
 */
class QAService {
    /**
     * Ask a question about a specific project.
     * @param userId - The ID of the user asking the question.
     * @param projectId - The ID of the project related to the question.
     * @param question - The question being asked.
     * @param context - Optional context for the question (e.g., file path or code snippet).
     * @returns The created QAEntry object.
     */
    async askQuestion(userId: string, projectId: string, question: string, context?: string): Promise<QAEntry> {
        const qaEntry = new QAEntry({
            userId,
            projectId,
            question,
            context,
            answer: '', // Initially empty, to be filled later
            confidence: 0, // Initial confidence level
            sources: [], // Initial sources
            timestamp: new Date(),
        });

        // Save the QAEntry to the database
        await qaEntry.save();
        return qaEntry;
    }

    /**
     * Retrieve the Q&A history for a specific project.
     * @param projectId - The ID of the project for which to retrieve the history.
     * @param page - The page number for pagination.
     * @param limit - The number of entries per page.
     * @returns An array of QAEntry objects.
     */
    async getHistory(projectId: string, page: number = 1, limit: number = 20): Promise<{ entries: QAEntry[], total: number }> {
        const skip = (page - 1) * limit;
        const entries = await QAEntry.find({ projectId }).skip(skip).limit(limit);
        const total = await QAEntry.countDocuments({ projectId });

        return { entries, total };
    }

    /**
     * Provide an answer to a specific question.
     * @param qaEntryId - The ID of the QAEntry to update.
     * @param answer - The answer to the question.
     * @param confidence - The confidence level of the answer.
     * @param sources - The sources related to the answer.
     * @returns The updated QAEntry object.
     */
    async answerQuestion(qaEntryId: string, answer: string, confidence: number, sources: Array<{ file: string; line: number; snippet: string }>): Promise<QAEntry> {
        const qaEntry = await QAEntry.findById(qaEntryId);
        if (!qaEntry) {
            throw new Error('QA Entry not found');
        }

        qaEntry.answer = answer;
        qaEntry.confidence = confidence;
        qaEntry.sources = sources;
        qaEntry.timestamp = new Date();

        await qaEntry.save();
        return qaEntry;
    }
}

export default new QAService();