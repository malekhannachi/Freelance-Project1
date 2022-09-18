const mongoose = require("mongoose");
const counter = require("./counter.model")
const AnalysisTypeSchema = new mongoose.Schema({
  id: {
    type: Number,
    default: 0
  },
  analyseNumber: {
    type: Number,
    default: 0
  },

  temperature: {
    type: Number /*required: true*/
  },

  densite: {
    type: Number
  },

  matiereGrasse: {
    type: Number,
    /*required: true,*/ max: 99999999
  },

  ESD: {
    type: Number,
    max: 101
  },

  congelation: {
    type: Number /*required: true*/
  },

  pourcentageEau: {
    type: Number
  },

  acidite: {
    type: Number
  },

  PH: {
    type: Number
  },

  alcool: {
    type: String,
    enum: ["negatif", "positif"]
  },

  formol: {
    type: String,
    enum: ["negatif", "positif"]
  },

  testAmidon: {
    type: String,
    enum: ["negatif", "positif"]
  },

  antibiotique: {
    type: String,
    enum: ["negatif", "positif"]
  },

  fournisseur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Fournisseur"
  },

  camion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Camion"
  },

  citerne: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Citerne"
  },

  decision: {
    type: String,
    enum: ["Accepte", "Refuse"]
  },
  GoutEtOdeur: {
    type: String,
    enum: ["oui", "non"]
  },
  malade: {
    type: Array,
    default: []
  },
}, {
  timestamps: true
});



AnalysisTypeSchema.pre('save', function (next) {
  if (!this.isNew) {
    next();
    return;
  }

  counter('activities', this, next);
});


module.exports = mongoose.model("AnalysisType", AnalysisTypeSchema);