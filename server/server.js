const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./Routes/routes");

const app = express();

app.use(bodyParser.json());
app.use("/", router);
const conectionString = "mongodb://localhost/react-shopping-cart";

mongoose
  .connect(conectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("done"));

app.listen(5001, () => {
  console.log("done Runiing");
});
