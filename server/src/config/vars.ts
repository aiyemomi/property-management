import dotenv from "dotenv";

dotenv.config();

export const env = process.env.NODE_ENV;
export const port = process.env.PORT;
export const jwtSecret = process.env.JWT_SECRET;
