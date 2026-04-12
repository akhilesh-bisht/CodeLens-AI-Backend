// src/utils/constants.ts

// This file contains constant values used throughout the application, such as error messages and status codes.

// Error messages
export const ERROR_MESSAGES = {
    USER_NOT_FOUND: "User not found",
    INVALID_CREDENTIALS: "Invalid credentials",
    USER_ALREADY_EXISTS: "User already exists",
    PROJECT_NOT_FOUND: "Project not found",
    ANALYSIS_FAILED: "Analysis failed",
    QA_ENTRY_NOT_FOUND: "Q&A entry not found",
    SETTINGS_UPDATE_FAILED: "Failed to update settings",
};

// HTTP status codes
export const HTTP_STATUS_CODES = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    UNPROCESSABLE_ENTITY: 422,
    INTERNAL_SERVER_ERROR: 500,
};

// Other constants
export const RATE_LIMITS = {
    ANALYSIS_REQUESTS: 5, // per hour
    QA_REQUESTS: 50, // per hour
    GENERAL_API_CALLS: 1000, // per hour
};