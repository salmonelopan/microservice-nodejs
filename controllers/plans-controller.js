const router = require('express').Router();
const asyncWrapper = require('../utilities/async-wrapper').AsyncWrapper;
const PlansService = require('../services/plans-service');
const validator = require('../middleware/validator');

const plansService = new PlansService();
//   api/plans

router.get("/", asyncWrapper(async (req, res) => {
  let userId = 1;
  let plans = await plansService.findAll(userId);
  res.send(plans);
}));

router.get("/:id", asyncWrapper(async (req, res) => {
  let id = req.params.id;
  let plan = await plansService.findOne(id);
  res.send(plan);
}));

router.post("/", [validator("Plan")] , asyncWrapper(async (req, res) => {
  let plan = await plansService.create(req.body);
  res.send(plan);
}));

router.delete("/:id", asyncWrapper(async (req, res) => {
  let id = req.params.id;
  await plansService.deleteOne(id);
  res.sendStatus(200);
}));

module.exports = router;