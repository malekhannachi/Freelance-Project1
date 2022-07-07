const mongoose = require("mongoose");
const DateEntreSortieSchema = new mongoose.Schema({
  dateEntre: { type: Date },
 // dateSortie: { type: Date },

  camion: { type: mongoose.Schema.Types.ObjectId, ref: "Camion" },
});
module.exports = mongoose.model("DateEntreSortie", DateEntreSortieSchema);
