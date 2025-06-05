import Survey from "../models/Survey.js";

export const createSurvey = async (req, res) => {
  try {
    const { title, description, questions } = req.body;

    if (!title || !questions || !Array.isArray(questions)) {
      return res
        .status(400)
        .json({ success: false, message: "Title and questions are required" });
    }

    const newSurvey = await Survey.create({
      user_id: req.user.id,
      title,
      description,
      questions,
      status: "draft",
    });

    return res.status(201).json({
      success: true,
      message: "Survey created successfully",
      data: {
        survey: {
          id: newSurvey._id,
          user_id: newSurvey.user_id,
          title: newSurvey.title,
          description: newSurvey.description,
          status: newSurvey.status,
          questions: newSurvey.questions,
          created_at: newSurvey.createdAt,
          updated_at: newSurvey.updatedAt,
        },
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};
