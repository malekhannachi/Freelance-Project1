const {
  addAgent,
  getAgents,
  getAgent,
} = require("../controllers/agentManager.controllers");
const User = require("../models/user.models");

const router = require("express").Router();


router.param("agent", async (req, res, next, id) => {
    try {
      const agent = await User.findById(id);
  console.log(agent.role)
      if (!agent || agent.role==="admin") {
        return res.status(404).json("not found agent");
      } else {
        req.product = product;
        next();
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  });


router.post("/", addAgent);
router.get("/get", getAgents);
router.get("/:agent", getAgent);

module.exports = router;
