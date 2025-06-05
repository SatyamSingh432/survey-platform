import express from "express";
import {
  listRespondents,
  getRespondentDetails,
} from "../controllers/respondantController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/respondents", verifyToken, listRespondents);
router.get("/respondents/:id", verifyToken, getRespondentDetails);

export default router;
