const Citerne = require("../models/citerne.model");

const addCiterne = async (req, res) => {
  const newCiterne = new Citerne({
    Num_order: req.body.Num_order,
    camion: req.body.camion,
  });
  try {
    const savedCiterne = await newCiterne.save();
    return res.status(201).json(savedCiterne);
  } catch (err) {
    return res.status(500).json(err);
  }
};


const updateCiterne = async (req, res) => {
  const id = req.citerne._id;
  try {
    const updateCiterne = await Citerne.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(updateCiterne);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const deleteCiterne = async (req, res) => {
  const id = req.citerne._id;
  try {
    await Citerne.findByIdAndDelete(id);
    return res.status(200).json({ message: "Citerne deleted" });
  } catch (err) {
    return res.status(500).json(err);
  }
};


const getCiternes = async (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : 999;

  try {
    const getCiterne = await Citerne.find().sort({ createdAt: -1 }).limit(limit);
    return res.status(200).json(getCiterne);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.addCiterne = addCiterne;
module.exports.updateCiterne = updateCiterne;
module.exports.deleteCiterne = deleteCiterne;
module.exports.getCiternes = getCiternes;
