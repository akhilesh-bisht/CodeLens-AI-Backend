import express from "express";
import cors from "cors";
import routes from "./routes";
import { connectDatabase } from "./config/database";
import config from "./config/environment";
import errorHandler from "./middleware/errorHandler";
import requestLogger from "./middleware/requestLogger";
import rateLimiter from "./middleware/rateLimiter";

// Initialize the Express application
const app = express();

// Connect to the database
connectDatabase();

// Middleware setup
app.use(cors({ origin: config.CORS_ORIGIN })); // Enable CORS for configured origin
app.use(express.json()); // Parse JSON request bodies
app.use(requestLogger); // Log incoming requests
app.use(rateLimiter); // Apply rate limiting

// Define application routes
app.use("/api", routes);

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = config.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
