import express from "express";
import {
  getPublicSurveys,
  submitSurveyResponse,
  getSurveyResponses,
} from "../controllers/responseController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/:id/public", getPublicSurveys);

router.post("/:id/responses", submitSurveyResponse);

router.get("/:id/responses", verifyToken, getSurveyResponses);

export default router;
