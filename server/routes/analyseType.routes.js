const {
  addAnalyse,
  getAnalyse,
  getAnalyses,
  deleteAnalyse,
  updateAnalyse,
} = require("../controllers/analyseType.controllers");
const {
  addParameter,
  getParameter,
  getParameters,
  deleteParameter,
  updateParameter,
} = require("../controllers/parameter.controllers");
const Analyse = require("../models/analyseType.model");
const Parametere = require("../models/parametere.model");

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

//param Parametre
router.param("parameter", async (req, res, next, id) => {
  try {
    const parameter = await Parametere.findById(id);

    if (!parameter) {
      return res.status(404).json("not found parameter");
    } else {
      req.parameter = parameter;
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
router.delete("/delete/:analyse", deleteAnalyse);
router.put("/update/:analyse", updateAnalyse);

//Parametre
router.post("/parameter/add", addParameter);
router.get("/parameter/one/:parameter", getParameter);
router.get("/parameter/all", getParameters);
router.delete("/parameter/delete/:parameter", deleteParameter);
router.put("/parameter/update/:parameter", updateParameter);
module.exports = router;
