const mongoose = require("mongoose");
const parametereSchema = new mongoose.Schema(
  {
    identifier: { type: Number, default: 0 },
    parametres: { type: String, required: true },

    limitesDacceptation: [
      {
        min: { type: Number },
        max: { type: Number, min: 1 },
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("parametere", parametereSchema);
