import Respondent from "../models/Respondant.js";
import SurveyResponse from "../models/SurveyResponse.js";

export const listRespondents = async (req, res) => {
  const { page = 1, limit = 10, search = "" } = req.query;
  const query = search
    ? {
        $or: [
          { name: { $regex: search, $options: "i" } },
          { email: { $regex: search, $options: "i" } },
        ],
      }
    : {};

  const total = await Respondent.countDocuments(query);
  const respondents = await Respondent.find(query)
    .skip((page - 1) * limit)
    .limit(parseInt(limit))
    .lean();

  res.json({
    success: true,
    data: {
      respondents,
      pagination: {
        current_page: +page,
        total_pages: Math.ceil(total / limit),
        total_items: total,
        items_per_page: +limit,
      },
    },
  });
};

export const getRespondentDetails = async (req, res) => {
  const { id } = req.params;
  const respondent = await Respondent.findById(id).lean();
  if (!respondent)
    return res
      .status(404)
      .json({ success: false, message: "Respondent not found" });

  const responses = await SurveyResponse.find({ respondent_id: id })
    .populate("survey_id")
    .lean();

  const formattedResponses = responses.map((r) => ({
    id: r._id,
    survey_id: r.survey_id._id,
    survey_title: r.survey_id.title,
    completed_at: r.completed_at,
  }));

  res.json({
    success: true,
    data: {
      respondent: {
        ...respondent,
        responses: formattedResponses,
      },
    },
  });
};
