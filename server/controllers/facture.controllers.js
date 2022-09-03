const Facture = require("../models/facture.model");

const createFac = async (req, res) => {
  milkQuantity = req.body.milkQuantity;
  literPrice = req.body.literPrice;
  const count = await Facture.find().countDocuments();
  let theRandomNumber = Math.floor(Math.random() * 10) + 1;
  const newFacture = new Facture({
    identifier: count * theRandomNumber,
    genPrice: milkQuantity * literPrice,
    milkQuantity: milkQuantity,
    literPrice: literPrice,
    fournisseur: req.body.fournisseur,
    dateFin: req.body.dateFin,
    ref: req.body.ref,
  });
  try {
    const savedFacture = await newFacture.save();
    return res.status(201).json(savedFacture);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getFacture = async (req, res) => {
  const id = req.facture._id;
  try {
    const getFacture = await Facture.findById(id).populate("fournisseur");

    return res.status(200).json(getFacture);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getFactures = async (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : 999;

  let filter = {};
  if (req.query.ref) {
    filter.ref = req.query.ref;
  }
  try {
    const getFacture = await Facture.find(filter)
      .sort({ createdAt: -1 })
      .limit(limit)
      .populate("fournisseur");

    return res.status(200).json(getFacture);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const deleteFacture = async (req, res) => {
  const id = req.facture._id;
  try {
    await Facture.findByIdAndDelete(id);
    return res.status(200).json({ message: "facture deleted" });
  } catch (err) {
    return res.status(500).json(err);
  }
};

const updateFacture = async (req, res) => {
  const id = req.facture._id;

  try {
    const updateFacture = await Facture.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(updateFacture);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.createFac = createFac;
module.exports.getFacture = getFacture;
module.exports.getFactures = getFactures;
module.exports.deleteFacture = deleteFacture;
module.exports.updateFacture = updateFacture;
