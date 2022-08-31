const bonReception = require("../models/bonReception");

const addBonReception = async (req, res) => {
  fournisseur = req.body.fournisseur;
  camion = req.body.camion;
  quantite = req.body.quantite;
  const count = await bonReception.find().countDocuments();
  let theRandomNumber = Math.floor(Math.random() * 10) + 1;
  const newBonReception = new bonReception({
    identifier: count * theRandomNumber,
    camion: camion,
    fournisseur: fournisseur,
    quantite: quantite,
  });
  try {
    const savedBonReception = await newBonReception.save();
    return res.status(201).json(savedBonReception);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getBonReception = async (req, res) => {
  const id = req.bonReception._id;
  try {
    const getBonReception = await bonReception
      .findById(id)
      .populate("fournisseur")
      .populate("camion");
    return res.status(200).json(getBonReception);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getBonReceptions = async (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : 999;

  let filter = {};
  if (req.query.code) {
    filter.code = req.query.code;
  }
  try {
    const getBonReception = await bonReception
      .find(filter)
      .sort({ createdAt: -1 })
      .limit(limit)
      .populate("fournisseur")
      .populate("camion");
    return res.status(200).json(getBonReception);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const deleteBonReception = async (req, res) => {
  const id = req.bonReception._id;
  try {
    await bonReception.findByIdAndDelete(id);
    return res.status(200).json({ message: "bon Reception deleted" });
  } catch (err) {
    return res.status(500).json(err);
  }
};

const updateBonReception = async (req, res) => {
  const id = req.bonReception._id;

  try {
    const updateBonReception = await bonReception.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    return res.status(200).json(updateBonReception);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.addBonReception = addBonReception;
module.exports.getBonReception = getBonReception;
module.exports.getBonReceptions = getBonReceptions;
module.exports.deleteBonReception = deleteBonReception;
module.exports.updateBonReception = updateBonReception;
