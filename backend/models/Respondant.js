import mongoose from "mongoose";

const RespondentSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      sparse: true,
    },
    name: {
      type: String,
    },
    metadata: {
      type: mongoose.Schema.Types.Mixed,
    },
    surveys_completed: { type: Number, default: 0 },
    last_response_at: { type: Date },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Respondent = mongoose.model("Respondent", RespondentSchema);
export default Respondent;
