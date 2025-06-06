import mongoose from "mongoose";
const SurveyResponseSchema = new mongoose.Schema({
  survey_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Survey",
    required: true,
  },
  respondent_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Respondent",
    required: true,
  },
  answers: mongoose.Schema.Types.Mixed,
  completed_at: { type: Date, default: Date.now },
  ip_address: { type: String },
  user_agent: { type: String },
});

const SurveyResponse = mongoose.model("SurveyResponse", SurveyResponseSchema);
export default SurveyResponse;
