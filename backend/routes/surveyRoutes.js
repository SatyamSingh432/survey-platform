import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import {
  createSurvey,
  getAllSurveys,
  getSurveyById,
  updateSurvey,
  deleteSurvey,
  publishSurvey,
} from "../controllers/surveyController.js";
const router = express.Router();

router.post("/surveys", verifyToken, createSurvey);
router.get("/surveys", verifyToken, getAllSurveys);
router.get("/surveys/:id", verifyToken, getSurveyById);
router.put("/surveys/:id", verifyToken, updateSurvey);
router.delete("/surveys/:id", verifyToken, deleteSurvey);
router.post("/surveys/:id/publish", verifyToken, publishSurvey);
export default router;
