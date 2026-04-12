import { Sequelize } from "sequelize-typescript";
import User from "../models/User";
import Project from "../models/Project";
import QAEntry from "../models/QAEntry";

const sequelize = new Sequelize({
  database: process.env.DB_NAME || "your_database_name",
  dialect: "postgres",
  username: process.env.DB_USER || "your_username",
  password: process.env.DB_PASSWORD || "your_password",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  logging: false,
});

// ✅ Register models separately (THIS FIXES YOUR ERROR)
sequelize.addModels([User, Project, QAEntry]);

export const connectDatabase = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected successfully");

    await sequelize.sync();
    console.log("✅ Models synced");
  } catch (error: any) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1);
  }
};

export default sequelize;
