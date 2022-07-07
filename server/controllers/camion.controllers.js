const Camion = require("../models/camion.model");

const addCamion = async (req, res) => {
  const newCamion = new Camion({
    matricule: req.body.matricule,
    typeCamion: req.body.typeCamion,
    fournisseur: req.body.fournisseur,
  });
  try {
    const savedCamion = await newCamion.save();
    return res.status(201).json(savedCamion);
  } catch (err) {
    return res.status(500).json(err);
  }
};
const updateCamion = async (req, res) => {
  const id = req.camion._id;
  try {
    const updateCamion = await Camion.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(updateCamion);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// const getCamion = async (req, res) => {
//   //const slug = req.params.slug;
//   const id = req.camion._id;

//   try {
//     const getCamion = await Camion.findById(id);
//     return res.status(200).json(getCamion);
//   } catch (err) {
//     return res.status(500).json(err);
//   }
// };

const getCamion = async (req, res) => {
  //const slug = req.params.slug;
  const id = req.camion._id;

  try {
    const camion = await Camion.aggregate([
      { $match: { _id: id } },
      {
        $lookup: {
          from: "dateentresorties",
          localField: "_id",
          foreignField: "camion",
          as: "dateEntre",
        },
      },
    ]).sort({ createdAt: -1 });

    return res.status(200).json(camion[0]);
  } catch (err) {
    return res.status(500).json(err);
  }
};
const getCamions = async (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : 999;

  try {
    const getCamion = await Camion.find().sort({ createdAt: -1 }).limit(limit);
    return res.status(200).json(getCamion);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const deleteCamion = async (req, res) => {
  const id = req.camion._id;
  try {
    await Camion.findByIdAndDelete(id);
    return res.status(200).json({ message: "Camion deleted" });
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.addCamion = addCamion;

module.exports.updateCamion = updateCamion;
module.exports.getCamion = getCamion;
module.exports.getCamions = getCamions;
module.exports.deleteCamion = deleteCamion;
