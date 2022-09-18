const mongoose = require("mongoose");
const counter = require("./counter.model")
const bonReceptionSchema = new mongoose.Schema({
  id: {
    type: Number,
    default: 0
  },
  fournisseur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Fournisseur"
  },
  camion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Camion"
  },

  quantite: {
    type: Number
  },
}, {
  timestamps: true
});

bonReceptionSchema.pre('save', function (next) {
  if (!this.isNew) {
    next();
    return;
  }

  counter('activities', this, next);
});



module.exports = mongoose.model("bonReception", bonReceptionSchema);