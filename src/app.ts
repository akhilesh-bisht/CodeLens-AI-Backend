import express from "express";
import cors from "cors";
import { json } from "body-parser";
import routes from "./routes";
import { connectDatabase } from "./config/database";
import errorHandler from "./middleware/errorHandler";
import requestLogger from "./middleware/requestLogger";
import rateLimiter from "./middleware/rateLimiter";

// Initialize the Express application
const app = express();

// Connect to the database
connectDatabase();

// Middleware setup
app.use(cors()); // Enable CORS for all routes
app.use(json()); // Parse JSON request bodies
app.use(requestLogger); // Log incoming requests
app.use(rateLimiter); // Apply rate limiting

// Define application routes
app.use("/api", routes);

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
