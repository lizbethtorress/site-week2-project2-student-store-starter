// setup storage and adapter
const { storage } = require("../data/storage");
class StoreModel {
  // get all products from database
  getAllProducts() {
    return storage.get("products").value();
  }
  // get product by ID from database
  getProductById(id) {
    return storage
      .get("products")
      .find({ id: parseInt(id) })
      .value();
  }
  // create purchase model
  createPurchaseModel() {
    return storage.get("purchases").value();
  }
}
module.exports = new StoreModel();