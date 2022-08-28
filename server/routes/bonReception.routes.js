const {
  addBonReception,
  getBonReception,
  getBonReceptions,
  deleteBonReception,
  updateBonReception,
} = require("../controllers/bonReception.controllers");
const BonsReception = require("../models/bonReception");

const router = require("express").Router();
//param
//param
router.param("bonReception", async (req, res, next, id) => {
  try {
    const bonReception = await BonsReception.findById(id);

    if (!bonReception) {
      return res.status(404).json("not found bonReception");
    } else {
      req.bonReception = bonReception;
      next();
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post("/add", addBonReception);
router.get("/getOne/:bonReception", getBonReception);
router.get("/getAll", getBonReceptions);
router.put("/update/:bonReception", updateBonReception);
router.delete("/delete/:bonReception", deleteBonReception);

module.exports = router;
