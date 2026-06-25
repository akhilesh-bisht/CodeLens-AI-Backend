import mongoose from "mongoose";
import config from "./environment";

export const connectDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(config.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions);
    console.log("Database connected successfully");
  } catch (error: any) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

export default mongoose;
