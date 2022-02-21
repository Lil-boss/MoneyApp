const express = require("express");
const router = express.Router();

const { moneydata, validate } = require("../models/MoneyData");

router.get("/", async (req, res) => {
  try {
    const alldata = await moneydata.find().sort("name");
    res.send(alldata);
  } catch (e) {
    console.log("error...!", e);
  }
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let getdata = new moneydata({
    code: req.body.code,
    country: req.body.country,
    amount: req.body.amount,
    name: req.body.name,
    nidnum: req.body.nidnum,
    phone: req.body.phone,
  });
  getdata = await getdata.save();
  res.send(getdata);
});

module.exports = router;
