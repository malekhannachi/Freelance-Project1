const mongoose = require("mongoose");
const CiterneSchema = new mongoose.Schema(
  {
    Num_order: { type: String, required: true },

    camion: { type: mongoose.Schema.Types.ObjectId, ref: "Camion" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Citerne", CiterneSchema);
