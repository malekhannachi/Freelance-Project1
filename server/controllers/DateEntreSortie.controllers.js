const Camion = require("../models/camion.model");
const DateEntreSortie = require("../models/DateEntreSortie.model");

const entreCamion = async (req, res) => {
  const id = req.camion._id;
  const newCamion = new DateEntreSortie({
    dateEntre: Date.now(),
    camion: id,
  });

  console.log(newCamion);
  try {
    const savedCamion = await newCamion.save();
    return res.status(201).json(savedCamion);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.entreCamion = entreCamion;
