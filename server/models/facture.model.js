const mongoose = require("mongoose");

const counter = require("./counter.model")
const factureSchema = new mongoose.Schema({
  id: {
    type: Number,
    default: 0
  },
  milkQuantity: {
    type: Number,
    default: 0
  },

  ref: {
    type: String,
    unique: true
  },
  endDate: {
    type: Date,
    default: 30
  },
  startDate: {
    type: Date,
    default: 1
  },
  genPrice: {
    type: Number,
    default: 0
  },
  literPrice: {
    type: Number,
    default: 0
  },
  fournisseur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Fournisseur"
  },
}, {
  timestamps: true
});


factureSchema.pre('save', function (next) {
  if (!this.isNew) {
    next();
    return;
  }

  counter('activities', this, next);
});



module.exports = mongoose.model("Facture", factureSchema);