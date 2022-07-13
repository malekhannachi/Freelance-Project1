const {
  addCiterne,
  updateCiterne,
  deleteCiterne,
  getCiternes,
  getCiterne,
} = require("../controllers/citerne.controllers");
const Citerne = require("../models/citerne.model");

const router = require("express").Router();
//param
//param
router.param("citerne", async (req, res, next, id) => {
  try {
    const citerne = await Citerne.findById(id);

    if (!citerne) {
      return res.status(404).json("not found citerne");
    } else {
      req.citerne = citerne;
      next();
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/", getCiternes);
router.get("/getOne/:citerne", getCiterne);
router.post("/add", addCiterne);
router.put("/update/:citerne", updateCiterne);
router.delete("/delete/:citerne", deleteCiterne);

module.exports = router;
