const Address = require("../models/address.models");
const User = require("../models/user.models");
const bcrypt = require("bcryptjs");
const addAgent = async (req, res) => {
  //console.log(req.verifiedUser);

  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(422).json({ message: "Email already exist" });
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
  const salt = await bcrypt.genSalt(16);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const newAgent = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPassword,
    role: req.body.role,
  });
  try {
    const savedAgent = await newAgent.save();

    return res.status(201).json(savedAgent);
  } catch (err) {
    return res.status(500).json(err);
  }
};
const getAgent = async (req, res) => {
  const id = req.params.agentId;
  try {
    const getAgent = await User.findById(id);
    return res.status(200).json(getAgent);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getAgents = async (req, res) => {
  const role = req.query.role;
  try {
    const getAgents = await User.find({ role: role }).sort({ createdAt: -1 });
    return res.status(200).json(getAgents);
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
module.exports.getAgents = getAgents;
