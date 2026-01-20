import express from "express";
const router = express.Router();
import { message } from "../controllers/chatbot.message.js";


router.post("/message", message);

export default router;