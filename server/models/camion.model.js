const mongoose = require("mongoose");
const slug = require("slug");
const counter = require("./counter.model")
const CamionSchema = new mongoose.Schema({
  id: {
    type: Number,
    default: 0
  },
  matricule: {
    type: String,
    unique: true,
    index: true,
    lowercase: true,
    required: true,
  },

  typeCamion: {
    type: String
  },

  fournisseur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Fournisseur"
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true
  },
}, {
  timestamps: true
});

CamionSchema.pre("validate", function (next) {
  if (!this.slug) {
    this.slugify();
  }
  next();
});

CamionSchema.methods.slugify = function () {
  this.slug =
    slug(this.matricule) +
    "-" +
    ((Math.random() * Math.pow(36, 6)) | 0).toString(36);
};


CamionSchema.pre('save', function (next) {
  if (!this.isNew) {
    next();
    return;
  }

  counter('activities', this, next);
});
module.exports = mongoose.model("Camion", CamionSchema);