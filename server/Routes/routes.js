const Product = require("../models/productModel");

const express = require("express");

const router = express.Router();

//fetch The Data From Data Base
router.get("/api/products", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

//send The Data to Data Base
router.post("/api/products", async (req, res) => {
  const NewProdcut = new Product(req.body);
  const SaveP = await NewProdcut.save();
  res.send(SaveP);
});

module.exports = router;
