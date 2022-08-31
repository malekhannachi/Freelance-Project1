const Fournisseur = require("../models/fournisseur.model");
const Address = require("../models/address.models");
const addFournisseur = async (req, res) => {
  try {
    const user = await Fournisseur.findOne({ cin: req.body.cin });
    if (user) {
      return res.status(422).json({ message: "cin already exist" });
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
  const count = await Fournisseur.find().countDocuments();
  let theRandomNumber = Math.floor(Math.random() * 10) + 1;
  try {
    const newAddress = new Address({
      street: req.body.street,
      city: req.body.city,
      country: req.body.country,
      zipCode: req.body.zipCode,
    });
    const savedAddress = await newAddress.save();

    const newFournisseur = new Fournisseur({
      identifier: count * theRandomNumber,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      number: req.body.number,
      cin: req.body.cin,
      address: savedAddress._id,
    });
    const savedFournisseur = await newFournisseur.save();

    return res.status(201).json(savedFournisseur);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getFournisseurs = async (req, res) => {
  try {
    const getFournisseur = await Fournisseur.find()
      .populate("address")
      .sort({ createdAt: -1 });

    return res.status(200).json(getFournisseur);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getFournisseur = async (req, res) => {
  const id = req.fournisseur._id;
  try {
    const getFournisseur = await Fournisseur.findById(id).populate("address");
    return res.status(200).json(getFournisseur);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const deleteFournisseur = async (req, res) => {
  const id = req.fournisseur._id;
  try {
    await Fournisseur.findByIdAndDelete(id);
    return res.status(200).json({ message: " delete successfully" });
  } catch (err) {
    return res.status(500).json(err);
  }
};

const updateFournisseur = async (req, res) => {
  const id = req.fournisseur._id;

  try {
    const update = await Fournisseur.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(update);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getfwithatrub = async (req, res) => {
  const fournusseurId = req.fournisseur._id;

  try {
    const fournusseur = await Fournisseur.aggregate([
      { $match: { _id: fournusseurId } },
      {
        $lookup: {
          from: "camions",
          localField: "_id",
          foreignField: "fournisseur",
          as: "camions",
          pipeline: [
            {
              $lookup: {
                from: "citernes",
                localField: "_id",
                foreignField: "camion",
                as: "citernes",
              },
            },
          ],
        },
      },
    ]).sort({ createdAt: -1 });
    // await Product.populate(product, { path: "category", select: "title" });
    return res.status(200).json(fournusseur[0]);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.getfwithatrub = getfwithatrub;
module.exports.addFournisseur = addFournisseur;
module.exports.getFournisseurs = getFournisseurs;
module.exports.getFournisseur = getFournisseur;
module.exports.deleteFournisseur = deleteFournisseur;
module.exports.updateFournisseur = updateFournisseur;
