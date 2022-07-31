const Analyse = require("../models/analyseType.model");

const addAnalyse = async (req, res) => {
  temperature = req.body.temperature;
  densite = req.body.densite;
  matiereGrasse = req.body.matiereGrasse;
  ESD = req.body.ESD;
  congelation = req.body.congelation;
  pourcentageEau = req.body.pourcentageEau;
  acidite = req.body.acidite;
  PH = req.body.PH;
  alcool = req.body.alcool;
  formol = req.body.formol;
  testAmidon = req.body.testAmidon;
  antibiotique = req.body.antibiotique;

  fournisseur = req.body.fournisseur;
  camion = req.body.camion;
  citerne = req.body.citerne;
  GoutEtOdeur = req.body.GoutEtOdeur;

  let decision = "";
  if (
    temperature < 10 ||
     densite > 1028 ||
     matiereGrasse < 30 ||
     ESD > 100 ||
     congelation < -0.52 ||
     pourcentageEau < 1.5 ||
     pourcentageEau > 5 ||
     acidite < 14 ||
     acidite > 16 ||
     PH < 6.6 ||
     PH > 6.7 ||
     alcool === "positif" ||
     formol === "positif" ||
     testAmidon === "positif" ||
     antibiotique === "positif" ||
     GoutEtOdeur === "non"
  ) {
    decision = "Refuse";
  } else {
    decision = "Accepte";
  }

  const count = await Analyse.find().countDocuments();

  const newAnalyse = new Analyse({
    analyseNumber: count + 1,
    temperature: temperature,
    densite: densite,
    matiereGrasse: matiereGrasse,
    ESD: ESD,
    congelation: congelation,
    pourcentageEau: pourcentageEau,
    acidite: acidite,
    PH: PH,
    alcool: alcool,
    formol: formol,
    testAmidon: testAmidon,
    decision: decision,
    antibiotique: antibiotique,
    fournisseur: fournisseur,
    camion: camion,
    citerne: citerne,
    GoutEtOdeur: GoutEtOdeur,
  });
  try {
    const savedAnalyse = await newAnalyse.save();
    return res.status(201).json(savedAnalyse);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getAnalyse = async (req, res) => {
  const id = req.analyse._id;
  try {
    const getAnalyse = await Analyse.findById(id)
      .populate("fournisseur")
      .populate("camion")
      .populate("citerne");
    return res.status(200).json(getAnalyse);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getAnalyses = async (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : 999;

  let filter = {};
  if (req.query.decision) {
    filter.decision = req.query.decision;
  }
  try {
    const getAnalyses = await Analyse.find(filter)
      .sort({ createdAt: -1 })
      .limit(limit)
      .populate("fournisseur")
      .populate("camion")
      .populate("citerne");
    return res.status(200).json(getAnalyses);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const deleteAnalyse = async (req, res) => {
  const id = req.analyse._id;
  try {
    await Analyse.findByIdAndDelete(id);
    return res.status(200).json({ message: "Analyse deleted" });
  } catch (err) {
    return res.status(500).json(err);
  }
};

const updateAnalyse = async (req, res) => {
  const id = req.analyse._id;

  try {
    const updateAnalyse = await Analyse.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(updateAnalyse);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.addAnalyse = addAnalyse;
module.exports.getAnalyse = getAnalyse;
module.exports.getAnalyses = getAnalyses;
module.exports.deleteAnalyse = deleteAnalyse;
module.exports.updateAnalyse = updateAnalyse;
