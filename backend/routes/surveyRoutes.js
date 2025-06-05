import express from "express";
import { createSurvey } from "../controllers/surveyController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/surveys", verifyToken, createSurvey);

export default router;
