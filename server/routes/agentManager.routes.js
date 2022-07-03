const { addAgent } = require("../controllers/agentManager.controllers");

const router = require("express").Router();


router.post("/", addAgent);

module.exports = router;
