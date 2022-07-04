const {
  addAgent,
  getAgents,
} = require("../controllers/agentManager.controllers");

const router = require("express").Router();

router.post("/", addAgent);
router.get("/get", getAgents);

module.exports = router;
