import axios from 'axios';
import { GitHubRepoAnalysisResult } from '../types/api'; // Importing the type for analysis result

/**
 * GitHubService class to interact with the GitHub API.
 */
export class GitHubService {
    private baseUrl: string;

    constructor() {
        this.baseUrl = 'https://api.github.com'; // Base URL for GitHub API
    }

    /**
     * Fetch repository details from GitHub.
     * @param repoUrl - The URL of the GitHub repository.
     * @returns Promise containing repository details.
     */
    public async getRepoDetails(repoUrl: string): Promise<any> {
        const repoPath = this.extractRepoPath(repoUrl);
        const response = await axios.get(`${this.baseUrl}/repos/${repoPath}`);
        return response.data;
    }

    /**
     * Fetch the contents of a repository.
     * @param repoUrl - The URL of the GitHub repository.
     * @returns Promise containing repository contents.
     */
    public async getRepoContents(repoUrl: string): Promise<any> {
        const repoPath = this.extractRepoPath(repoUrl);
        const response = await axios.get(`${this.baseUrl}/repos/${repoPath}/contents`);
        return response.data;
    }

    /**
     * Extract the repository path from the URL.
     * @param repoUrl - The URL of the GitHub repository.
     * @returns The formatted repository path.
     */
    private extractRepoPath(repoUrl: string): string {
        const urlParts = repoUrl.split('/');
        return `${urlParts[urlParts.length - 2]}/${urlParts[urlParts.length - 1]}`;
    }

    /**
     * Analyze a GitHub repository and return the analysis result.
     * @param repoUrl - The URL of the GitHub repository.
     * @returns Promise containing the analysis result.
     */
    public async analyzeRepo(repoUrl: string): Promise<GitHubRepoAnalysisResult> {
        // Placeholder for analysis logic
        const repoDetails = await this.getRepoDetails(repoUrl);
        const repoContents = await this.getRepoContents(repoUrl);

        // Perform analysis on repoDetails and repoContents
        const analysisResult: GitHubRepoAnalysisResult = {
            summary: `Repository ${repoDetails.name} has ${repoContents.length} files.`,
            languages: [], // Populate with actual language analysis
            files: repoContents,
            dependencies: [], // Populate with actual dependency analysis
            structure: {}, // Populate with actual file structure analysis
        };

        return analysisResult;
    }
}