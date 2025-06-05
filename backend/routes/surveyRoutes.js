import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import {
  createSurvey,
  getAllSurveys,
  getSurveyById,
  updateSurvey,
} from "../controllers/surveyController.js";
const router = express.Router();

router.post("/surveys", verifyToken, createSurvey);
router.get("/surveys", verifyToken, getAllSurveys);
router.get("/surveys/:id", verifyToken, getSurveyById);
router.put("/surveys/:id", verifyToken, updateSurvey);
export default router;
