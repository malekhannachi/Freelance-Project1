const mongoose = require("mongoose");
const factureSchema = new mongoose.Schema(
  {
    identifier: { type: Number, default: 0 },
    milkQuantity: { type: Number, default: 0 },

    ref: { type: String, unique: true },
    endDate: { type: Date, default: 30 },
    startDate: { type: Date, default: 1 },
    genPrice: { type: Number, default: 0 },
    literPrice: { type: Number, default: 0 },
    fournisseur: { type: mongoose.Schema.Types.ObjectId, ref: "Fournisseur" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Facture", factureSchema);
