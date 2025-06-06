import Survey from "../models/Survey.js";
import SurveyResponse from "../models/SurveyResponse.js";
import Respondent from "../models/Respondant.js";
import User from "../models/User.js";
export const getPublicSurveys = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findOne({ _id: userId, is_active: true });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found or inactive",
      });
    }

    const surveys = await Survey.find({
      user_id: userId,
      status: "active",
    }).lean();

    const formattedSurveys = surveys.map((survey) => ({
      id: survey._id,
      title: survey.title,
      status: survey.status,
      description: survey.description,
      questions: survey.questions,
    }));

    res.json({
      success: true,
      data: {
        surveys: formattedSurveys,
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
};

export const submitSurveyResponse = async (req, res) => {
  try {
    const { respondent, answers } = req.body;

    let respondentDoc = await Respondent.findOne({ email: respondent?.email });
    if (!respondentDoc) {
      respondentDoc = await Respondent.create({
        ...respondent,
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    const response = await SurveyResponse.create({
      survey_id: req.params.id,
      respondent_id: respondentDoc._id,
      answers,
      completed_at: new Date(),
      ip_address: req.ip,
      user_agent: req.headers["user-agent"],
    });

    await Respondent.findByIdAndUpdate(respondentDoc._id, {
      updated_at: new Date(),
    });

    res.status(201).json({
      success: true,
      message: "Response submitted successfully",
      data: {
        response_id: response._id,
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Submission failed",
      error: err.message,
    });
  }
};

export const getSurveyResponses = async (req, res) => {
  try {
    const surveyId = req.params.id;

    const survey = await Survey.findById(surveyId);
    if (!survey || survey.user_id.toString() !== req.user.id) {
      return res.status(403).json({ success: false, message: "Unauthorized" });
    }

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const [responses, total] = await Promise.all([
      SurveyResponse.find({ survey_id: surveyId })
        .populate("respondent_id")
        .sort({ completed_at: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      SurveyResponse.countDocuments({ survey_id: surveyId }),
    ]);

    const formatted = responses.map((r) => ({
      id: r._id,
      respondent: {
        id: r.respondent_id._id,
        email: r.respondent_id.email,
        name: r.respondent_id.name,
      },
      answers: r.answers,
      completed_at: r.completed_at,
    }));

    res.json({
      success: true,
      data: {
        responses: formatted,
        pagination: {
          current_page: page,
          total_pages: Math.ceil(total / limit),
          total_items: total,
          items_per_page: limit,
        },
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Could not retrieve responses",
      error: err.message,
    });
  }
};
