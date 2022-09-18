const mongoose = require("mongoose");
const counter = require("./counter.model")
const parametereSchema = new mongoose.Schema(
  {
    id: { type: Number, default: 0 },
    parametres: { type: String, required: true },

    limitesDacceptation: { type: String},
  },
  { timestamps: true }
);


parametereSchema.pre('save', function (next) {
  if (!this.isNew) {
    next();
    return;
  }

  counter('activities', this, next);
});
module.exports = mongoose.model("parametere", parametereSchema);
