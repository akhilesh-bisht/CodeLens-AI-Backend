// src/models/Project.ts

import { Schema, model, Document } from 'mongoose';

// Interface representing the structure of a Project document
interface IProject extends Document {
  userId: string;
  name: string;
  url: string;
  status: 'analyzing' | 'completed' | 'failed';
  files: number;
  lastAnalyzed: Date;
  createdAt: Date;
  updatedAt: Date;
}

// Mongoose schema for the Project model
const projectSchema = new Schema<IProject>({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  url: { type: String, required: true },
  status: { type: String, enum: ['analyzing', 'completed', 'failed'], default: 'analyzing' },
  files: { type: Number, required: true },
  lastAnalyzed: { type: Date, default: null },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Pre-save hook to update the updatedAt field
projectSchema.pre<IProject>('save', function (next) {
  this.updatedAt = new Date();
  next();
});

// Exporting the Project model
const Project = model<IProject>('Project', projectSchema);
export default Project;