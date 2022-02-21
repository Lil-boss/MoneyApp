const mongoose = require("mongoose");
const express = require("express");
const app = express();

const moneyData = require("./routes/MoneyData");
const Homepage = require("./routes/Home");

mongoose
  .connect(
    "mongodb+srv://admin:123@cluster0.z7gvl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("SuccessFull........."))
  .catch(() => console.log("Failed........."));

app.use(express.json());

app.use("/", Homepage);
app.use("/api/money", moneyData);

const port = process.env.PORT || 7000;

app.listen(port, () => console.log(`Listing to port ${port}...`));
