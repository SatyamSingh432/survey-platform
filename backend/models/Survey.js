import mongoose from "mongoose";

const SurveySchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: ["draft", "active", "completed"],
      required: true,
    },
    questions: {
      type: [Object],
      required: true,
    },
    published_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Survey = mongoose.model("Survey", SurveySchema);
export default Survey;
