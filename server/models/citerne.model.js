const mongoose = require("mongoose");

const counter = require("./counter.model")
const CiterneSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      default: 0
    },
    Num_order: { type: String, required: true },

    camion: { type: mongoose.Schema.Types.ObjectId, ref: "Camion" },
  },
  { timestamps: true }
);


CiterneSchema.pre('save', function (next) {
  if (!this.isNew) {
    next();
    return;
  }

  counter('activities', this, next);
});
module.exports = mongoose.model("Citerne", CiterneSchema);
