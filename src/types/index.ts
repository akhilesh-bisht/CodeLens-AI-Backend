// src/types/index.ts

// This file exports common types and interfaces used throughout the application.

// User type definition
export interface User {
    id: string;
    email: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}

// Project type definition
export interface Project {
    id: string;
    userId: string;
    name: string;
    url: string;
    status: "analyzing" | "completed" | "failed";
    files: number;
    lastAnalyzed: Date;
    analysis: AnalysisResult;
    createdAt: Date;
    updatedAt: Date;
}

// AnalysisResult type definition
export interface AnalysisResult {
    summary: string;
    languages: Array<{ name: string; percentage: number }>;
    files: Array<{
        name: string;
        path: string;
        language: string;
        size: number;
        content: string;
    }>;
    dependencies: Array<{ name: string; version: string }>;
    structure: Record<string, string[]>;
}

// QAEntry type definition
export interface QAEntry {
    id: string;
    projectId: string;
    userId: string;
    question: string;
    answer: string;
    confidence: number;
    sources: Array<{
        file: string;
        line: number;
        snippet: string;
    }>;
    timestamp: Date;
}