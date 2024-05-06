import express from "express";
import { createUser, getUser } from "../controllers/user.js";

const router = express.Router();

router.get("/", getUser);

router.post("/register", createUser);

export { router as userRoute };
