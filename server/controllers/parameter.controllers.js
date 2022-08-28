const Parameter = require("../models/parametere.model");

const addParameter = async (req, res) => {
  const count = await Parameter.find().countDocuments();
  let theRandomNumber = Math.floor(Math.random() * 10) + 1;
  const newParameter = new Parameter({
    identifier: count * theRandomNumber,
    parametres: req.body.parametres,
    limitesDacceptation: req.body.limitesDacceptation,
  });
  try {
    const savedParameter = await newParameter.save();
    return res.status(201).json(savedParameter);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getParameter = async (req, res) => {
  const id = req.parameter._id;
  try {
    const getParameter = await Parameter.findById(id);
    return res.status(200).json(getParameter);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getParameters = async (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : 999;

  let filter = {};
  if (req.query.parametres) {
    filter.parametres = req.query.parametres;
  }
  try {
    const getParameter = await Parameter.find(filter)
      .sort({ createdAt: -1 })
      .limit(limit);
    return res.status(200).json(getParameter);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const deleteParameter = async (req, res) => {
  const id = req.parameter._id;
  try {
    await Parameter.findByIdAndDelete(id);
    return res.status(200).json({ message: "parameter deleted" });
  } catch (err) {
    return res.status(500).json(err);
  }
};

const updateParameter = async (req, res) => {
  const id = req.parameter._id;

  try {
    const updateParameter = await Parameter.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(updateParameter);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.addParameter = addParameter;
module.exports.getParameter = getParameter;
module.exports.getParameters = getParameters;
module.exports.deleteParameter = deleteParameter;
module.exports.updateParameter = updateParameter;
