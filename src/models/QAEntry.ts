// src/models/QAEntry.ts

// Import necessary types for defining the QAEntry model
import { Document, model, Schema } from 'mongoose';

// Define the structure of a Q&A entry
interface QAEntry extends Document {
  projectId: string; // ID of the associated project
  userId: string; // ID of the user who asked the question
  question: string; // The question asked by the user
  answer: string; // The answer provided to the question
  confidence: number; // Confidence level of the answer (0 to 1)
  sources: Array<{
    file: string; // File where the answer was found
    line: number; // Line number in the file
    snippet: string; // Code snippet related to the answer
  }>; // Sources of the answer
  timestamp: Date; // Timestamp of when the question was asked
}

// Create a schema for the QAEntry model
const QAEntrySchema = new Schema<QAEntry>({
  projectId: { type: String, required: true },
  userId: { type: String, required: true },
  question: { type: String, required: true },
  answer: { type: String, required: true },
  confidence: { type: Number, required: true },
  sources: [
    {
      file: { type: String, required: true },
      line: { type: Number, required: true },
      snippet: { type: String, required: true },
    },
  ],
  timestamp: { type: Date, default: Date.now },
});

// Export the QAEntry model
const QAEntryModel = model<QAEntry>('QAEntry', QAEntrySchema);
export default QAEntryModel;