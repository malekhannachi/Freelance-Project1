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

  let decision = "";
  if (
    temperature > 10 ||
    densite > 1028 ||
    matiereGrasse > 30 ||
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
    antibiotique === "positif"
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
  });
  try {
    const savedAnalyse = await newAnalyse.save();
    return res.status(201).json(savedAnalyse);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.addAnalyse = addAnalyse;
