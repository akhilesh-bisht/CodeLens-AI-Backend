import { Schema, model, Document } from 'mongoose';

// Interface representing a User document in MongoDB
export interface IUser extends Document {
  email: string;
  password: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

// Mongoose schema for the User model
const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true, // Automatically manage createdAt and updatedAt fields
});

// User model based on the schema
const User = model<IUser>('User', userSchema);

export default User;