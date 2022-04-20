const productRouter = require("express").Router();
const {
  createProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
} = require("../controllers/products.controller");



productRouter.route("/").get(getAllProducts).post(createProduct);
productRouter
  .route("/:productId")
  .get(getSingleProduct)
  .patch(updateProduct)
  .delete(deleteProduct);


  
module.exports = productRouter;
