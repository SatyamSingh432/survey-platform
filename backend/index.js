import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import authRouter from "./routes/auth.js";
import surveyRouter from "./routes/surveyRoutes.js";
import respondentRoutes from "./routes/respondantRoutes.js";
import surveyResponseRoutes from "./routes/responseRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/", authRouter);
app.use("/api/v1", surveyRouter);
app.use("/api/v1/", respondentRoutes);
app.use("/api/v1/surveys", surveyResponseRoutes);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, async () => {
      console.log(`Server listening on PORT ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
