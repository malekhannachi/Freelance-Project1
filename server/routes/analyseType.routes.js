const { addAnalyse, getAnalyse, getAnalyses, deleteAnalyse, updateAnalyse } = require("../controllers/analyseType.controllers");
const Analyse = require("../models/analyseType.model");

const router = require("express").Router();

//param
//param analyse
router.param("analyse", async (req, res, next, id) => {
  try {
    const analyse = await Analyse.findById(id);

    if (!analyse) {
      return res.status(404).json("not found analyse");
    } else {
      req.analyse = analyse;
      next();
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

//Analyse
router.post("/add", addAnalyse);
router.get("/oneAnalyse/:analyse", getAnalyse);
router.get("/allAnalyse", getAnalyses);
router.delete("/delete/:analyse",deleteAnalyse );
router.put("/update/:analyse", updateAnalyse);

module.exports = router;
