const mongoose = require("mongoose");
const bonReceptionSchema = new mongoose.Schema(
  {
    identifier : { type: Number, default: 0 },
    fournisseur: { type: mongoose.Schema.Types.ObjectId, ref: "Fournisseur" },
    camion: { type: mongoose.Schema.Types.ObjectId, ref: "Camion" },

    quantite: { type: Number },
  },
  { timestamps: true }
);
module.exports = mongoose.model("bonReception", bonReceptionSchema);
