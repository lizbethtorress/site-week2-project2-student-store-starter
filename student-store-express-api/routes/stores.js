//backend routes & router
const express = require("express");
const router = express.Router();
const storeModel = require("../models/store");
// home route, ping-pong
router.get("/", (req, res) => {
  res.status(200).json({ ping: "pong" });
});
/* fetch all products */
router.get("/store", (req, res) => {
  const products = storeModel.getAllProducts();
  res.json(products);
});
// productId route
router.get("/store/:productId", (req, res) => {
  const { productId } = req.params;
  const product = storeModel.getProductById(productId);
  res.json(product);
});
// router.get("/store", (req, res) => {
//   const store = storeModel.createPurchaseModel();
//   res.json(store);
// });
router.get("*");
module.exports = router;