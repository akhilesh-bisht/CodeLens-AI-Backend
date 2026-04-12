// src/types/api.ts

// This file defines types for API request and response structures.

// Type for user login request
export interface LoginRequest {
  email: string;
  password: string;
}

// Type for user registration request
export interface SignupRequest {
  email: string;
  password: string;
  name: string;
}

// Type for user response
export interface UserResponse {
  id: string;
  email: string;
  name: string;
}

// Type for authentication response
export interface AuthResponse {
  success: boolean;
  user: UserResponse;
  token: string;
}

// Type for project creation request
export interface CreateProjectRequest {
  url: string;
}

// Type for project response
export interface ProjectResponse {
  id: string;
  name: string;
  url: string;
  status: 'analyzing' | 'completed' | 'failed';
  files: number;
  lastAnalyzed: string;
  createdAt: string;
}

// Type for analysis result
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

// Type for Q&A request
export interface QARequest {
  projectId: string;
  question: string;
  context?: string;
}

// Type for Q&A response
export interface QAResponse {
  id: string;
  question: string;
  answer: string;
  confidence: number;
  sources: Array<{
    file: string;
    line: number;
    snippet: string;
  }>;
  timestamp: string;
}

// Type for user settings response
export interface SettingsResponse {
  theme: 'light' | 'dark';
  notifications: boolean;
  analysisDepth: 'basic' | 'detailed' | 'comprehensive';
  defaultLanguage: string;
}