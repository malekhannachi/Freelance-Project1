const User = require("../models/user.models");
const Address = require("../models/address.models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = require("express").Router();
const verifyToken = require("../middlewares/verifyToken");
const crypto = require("crypto");

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(401).json({ message: "wrong password or email" });
    }

    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordValid) {
      return res.status(401).json({ message: "wrong password or email" });
    }

    const token = jwt.sign(
      /* payload */ {
        _id: user._id,
        email: user.email,
        name: user.firstName,
        lastName: user.lastName,

        address: user.address,
        isAdmin: user.isAdmin,
        role: user.role,
      },
      process.env.TOKEN_KEY,
      { expiresIn: "3 days" }
    );
    //console.log(user._id)

    return res.status(200).json({ token: token });
  } catch (err) {
    return res.status(500).json(err);
  }
});
router.put("/updateInfo", verifyToken, async (req, res) => {
  const currentUser = req.verifiedUser._id;
  try {
    const user = await User.findById(currentUser);
    // const old = req.body.oldPassword;
    // console.log(old);
    const isPasswordValid = await bcrypt.compare(
      req.body.oldPassword,
      user.password
    );
    if (!isPasswordValid) {
      return res.status(401).json({ message: "wrong password " });
    }
    const salt = await bcrypt.genSalt(16);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const updateUser = await User.findByIdAndUpdate(
      currentUser,
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        number: req.body.number,
        password: hashedPassword,
      },
      {
        new: true,
      }
    );

    return res
      .status(200)
      .json({ message: "Update Successfully", updateUser: updateUser });
  } catch (err) {
    return res.status(500).json(err);
  }
});

// router.get("/allCustomer/me", verifyToken, async (req, res) => {
//   try {
//     const customer = await User.find({ role: "customer" });
//     return res.status(200).json(customer);
//   } catch (err) {
//     return res.status(404).json(err);
//   }
// });

router.get("/check", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.verifiedUser._id)
      .populate("address")
      .populate({ path: "profile", select: "avatar birthday " });
    if (!user) {
      return res.status(404).json("not found admin");
    } else {
      return res.status(200).json(user);
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});
module.exports = router;
