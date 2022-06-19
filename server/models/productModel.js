const mongoose = require("mongoose");
const producdSchema = require("../Schema/productSchema");

const Product = mongoose.model("product", producdSchema);

module.exports = Product;
