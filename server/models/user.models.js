const mongoose = require("mongoose");
const counter = require("./counter.model")
const UserSchema = new mongoose.Schema({
  id: {
    type: Number,

  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String
  },
  number: {
    type: Number,
    default: 0000
  },
  email: {
    type: String,
    unique: true,
    index: true,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile"
  },
  role: {
    type: String,
    enum: ["agentAnalyser", "agentReception", "Fournisseur", "admin", "agentFacturation"],
    // default: "analyticsAgent",
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address"
  },
  googleId: {
    type: String
  },

  // emailToken: { type: String },
  // isVerified: { type: Boolean, default:false},
}, {
  timestamps: true
});



UserSchema.pre('save', function (next) {
  if (!this.isNew) {
    next();
    return;
  }

  counter('activities', this, next);
});
module.exports = mongoose.model("User", UserSchema);