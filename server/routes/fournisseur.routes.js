const {
  addFournisseur,
  getFournisseurs,
  getFournisseur,
  deleteFournisseur,
  updateFournisseur,
  getfwithatrub,
} = require("../controllers/fournusseur.controllers");
const Fournisseur = require("../models/fournisseur.Model");
const router = require("express").Router();
router.param("fournisseur", async (req, res, next, id) => {
  try {
    const fournisseur = await Fournisseur.findById(id);

    if (!fournisseur) {
      return res.status(404).json("not found Fournisseur");
    } else {
      req.fournisseur = fournisseur;
      next();
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});
router.post("/add", addFournisseur);
router.get("/all", getFournisseurs);
router.get("/getOne/:fournisseur", getFournisseur);
router.delete("/delete/:fournisseur", deleteFournisseur);
router.put("/update/:fournisseur", updateFournisseur);
router.get("/getfournusseurwithatru/:fournisseur", getfwithatrub);
module.exports = router;
