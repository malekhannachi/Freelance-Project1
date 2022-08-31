const mongoose = require("mongoose");
const parametereSchema = new mongoose.Schema(
  {
    identifier: { type: Number, default: 0 },
    parametres: { type: String, required: true },

    limitesDacceptation: { type: String, enum: ["negatif", "positif"] },
  },
  { timestamps: true }
);
module.exports = mongoose.model("parametere", parametereSchema);
