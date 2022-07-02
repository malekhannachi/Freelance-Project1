const Address = require("../models/address.models");
const User = require("../models/user.models");

const addAgent = async (req, res) => {
  //console.log(req.verifiedUser);
  const newAgent = new User({
    street: req.body.street,
    city: req.body.city,
    country: req.body.country,
    zipCode: req.body.zipCode,
  });
  try {
    const savedAddress = await createAddress.save();

    return res.status(201).json(savedAddress);
  } catch (err) {
    return res.status(500).json(err);
  }
};
const getAgent= async (req, res) => {
  const id = req.params.addressId;
  try {
    const getAddress = await Address.findById(id);
    return res.status(200).json(getAddress);
  } catch (err) {
    return res.status(500).json(err);
  }
};


const getAgents = async (req, res) => {
  try {
    const getAddresses = await Address.find();
    return res.status(200).json(getAddresses);
  } catch (err) {
    return res.status(500).json(err);
  }
};
const updateAgent = async (req, res) => {
  const id = req.verifiedUser.address;
  console.log(id);
  try {
    const updateAddress = await Address.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(updateAddress);
  } catch (err) {
    return res.status(500).json(err);
  }
};
const deleteAgent = async (req, res) => {
  const id = req.params.addressId;
  try {
    const deleteAddress = await Address.findByIdAndDelete(id);
    return res.status(200).json(deleteAddress);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.addAgent = addAgent;

module.exports.createAddress = createAddress;
module.exports.getAddress = getAddress;
module.exports.getAddresses = getAddresses;
module.exports.updateMyAddress = updateMyAddress;
module.exports.deleteAddress = deleteAddress;
