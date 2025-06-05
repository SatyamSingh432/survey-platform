import express from "express";
import { createSurvey } from "../controllers/surveyController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import { getAllSurveys } from "../controllers/surveyController.js";
const router = express.Router();

router.post("/surveys", verifyToken, createSurvey);
router.get("/surveys", verifyToken, getAllSurveys);
export default router;
