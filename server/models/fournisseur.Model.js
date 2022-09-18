const mongoose = require("mongoose");
const counter = require("./counter.model")
const FournisseurSchema = new mongoose.Schema(
  {
    id: { type: Number, default: 0 },
    firstName: { type: String, required: true },
    lastName: { type: String },
    cin: { type: Number, required: true, max: 99999999 },
    number: { type: Number, default: 0000 },
    email: {
      type: String,
      unique: true,
      index: true,
      lowercase: true,
      required: true,
    },
    //isAdmin: { type: Boolean, default: false },
    address: { type: mongoose.Schema.Types.ObjectId, ref: "Address" },
    milkPrice: { type: Number, default: 0000 },
  },
  { timestamps: true }
);

FournisseurSchema.pre('save', function (next) {
  if (!this.isNew) {
    next();
    return;
  }

  counter('activities', this, next);
});
module.exports = mongoose.model("Fournisseur", FournisseurSchema);
