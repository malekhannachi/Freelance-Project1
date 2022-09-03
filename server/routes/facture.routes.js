const {
  createFac,
  getFacture,
  getFactures,
  updateFacture,
  deleteFacture,
} = require("../controllers/facture.controllers");
const Facture = require("../models/facture.model");

const router = require("express").Router();
//param
//param
router.param("facture", async (req, res, next, id) => {
  try {
    const facture = await Facture.findById(id);

    if (!facture) {
      return res.status(404).json("not found facture");
    } else {
      req.facture = facture;
      next();
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post("/add", createFac);
router.get("/getOne/:facture", getFacture);
router.get("/getAll", getFactures);
router.put("/update/:facture", updateFacture);
router.delete("/delete/:facture", deleteFacture);

module.exports = router;
