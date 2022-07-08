const mongoose = require("mongoose");
const CiterneSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    cin: { type: Number ,required: true, max:99999999 },
    number: { type: Number, default: 0000 },
    email: {
      type: String,
      unique: true,
      index: true,
      lowercase: true,
      required: true,
    },
    isAdmin: { type: Boolean, default: false },
    address: { type: mongoose.Schema.Types.ObjectId, ref: "Address" },
 

  
  },
  { timestamps: true }
);
module.exports = mongoose.model("Citerne", CiterneSchema);
