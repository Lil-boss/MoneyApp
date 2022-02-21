const mongoose = require("mongoose");
const Joi = require("joi");

const MoneyData = mongoose.model(
  "MoneyData",
  new mongoose.Schema({
    code: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 100,
    },
    country: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    nidnum: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  })
);

function validatedata(moneydata) {
  const Schema = Joi.object({
    code: Joi.string().required(),
    country: Joi.string().required(),
    amount: Joi.string().required(),
    name: Joi.string().required(),
    nidnum: Joi.string().required(),
    phone: Joi.string().required(),
  });
  return Schema.validate(moneydata);
}

// function validateData(MoneyData) {
//   const schema = Joi.object({ moneyData: joi.string().required() });
// }

exports.validate = validatedata();
exports.moneydata = MoneyData;
