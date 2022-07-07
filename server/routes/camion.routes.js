const {
  addCamion,
  updateCamion,
  getCamion,
  getCamions,
  deleteCamion,
} = require("../controllers/camion.controllers");
const { entreCamion } = require("../controllers/DateEntreSortie.controllers");
const Camion = require("../models/camion.model");

const router = require("express").Router();

//param
//param camion
router.param("camion", async (req, res, next, id) => {
  try {
    const camion = await Camion.findById(id);

    if (!camion) {
      return res.status(404).json("not found camion");
    } else {
      req.camion = camion;
      next();
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

//camion
router.post("/add", addCamion);
router.put("/update/:camion", updateCamion);
//router.get("/oneCamion/:slug", getCamion);
router.get("/oneCamion/:camion", getCamion);
router.get("/allCamion", getCamions);
router.delete("/delete/:camion", deleteCamion);

//dateEntre

router.post("/entreCamion/:camion", entreCamion);
module.exports = router;
