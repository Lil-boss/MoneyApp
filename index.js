const mongoose = require("mongoose");
const express = require("express");
const app = express();

const moneyData = require("./routes/MoneyData");

mongoose
  .connect("mongodb://localhost/MoneyApp",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  .then(() => console.log("SuccessFull........."))
  .catch(() => console.log("Failed........."));

app.use(express.json());

app.use("/api/money", moneyData);

const port = process.env.PORT || 7000;

app.listen(port, () => console.log(`Listing to port${port}...`));

