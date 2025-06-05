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

export const getAllSurveys = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    const userId = req.user.id;
    const status = req.query.status; // get status from query

    // Build query object
    const query = { user_id: userId };
    if (status) {
      query.status = status;
    }

    // Total count for pagination
    const totalItems = await Survey.countDocuments(query);

    // Fetch filtered surveys
    const surveys = await Survey.find(query)
      .sort({ created_at: -1 })
      .skip(skip)
      .limit(limit);

    // Format surveys
    const formattedSurveys = surveys.map((survey) => ({
      id: survey._id,
      title: survey.title,
      description: survey.description,
      status: survey.status,
      questions_count: survey.questions.length,
      responses_count: 0,
      created_at: survey.created_at.toISOString(),
      updated_at: survey.updated_at.toISOString(),
    }));

    // Return response
    res.status(200).json({
      success: true,
      data: {
        surveys: formattedSurveys,
        pagination: {
          current_page: page,
          total_pages: Math.ceil(totalItems / limit),
          total_items: totalItems,
          items_per_page: limit,
        },
      },
    });
  } catch (err) {
    console.error("Error in getAllSurveys:", err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getSurveyById = async (req, res) => {
  try {
    const survey = await Survey.findOne({
      _id: req.params.id,
      user_id: req.user.id,
    });

    if (!survey) {
      return res
        .status(404)
        .json({ success: false, message: "Survey not found" });
    }

    res.status(200).json({ success: true, data: survey });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const updateSurvey = async (req, res) => {
  try {
    const updated = await Survey.findOneAndUpdate(
      { _id: req.params.id, user_id: req.user.id },
      { ...req.body, updated_at: new Date() },
      { new: true }
    );

    if (!updated) {
      return res
        .status(404)
        .json({ success: false, message: "Survey not found or unauthorized" });
    }

    res.status(200).json({
      success: true,
      message: "Survey updated successfully",
      data: updated,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const deleteSurvey = async (req, res) => {
  try {
    const deleted = await Survey.findOneAndDelete({
      _id: req.params.id,
      user_id: req.user.id,
    });

    if (!deleted) {
      return res
        .status(404)
        .json({ success: false, message: "Survey not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Survey deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
