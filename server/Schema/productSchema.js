const mongoose = require("mongoose");

//Product Schema
const producdSchema = new mongoose.Schema({
  id: String,
  title: String,
  imageurl: String,
  dec: String,
  price: Number,
  sizes: [String],
});

module.exports = producdSchema;
