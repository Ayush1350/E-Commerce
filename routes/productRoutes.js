import express from "express";
import {
  createProductController,getProductController,getSingleProductController,productPhotoController,deleteProductController,updateProductController, searchProductController,braintreeTokenController,brainTreePaymentController,productFiltersController
} from "../controllers/productController.js";
import formidable from "express-formidable";

const router = express.Router();


router.post(
  "/create-product",
  formidable(),
  createProductController
);
router.put(
  "/update-product/:pid",
  formidable(),
  updateProductController
);
router.get("/get-product", getProductController);
router.get("/get-product/:slug", getSingleProductController);
router.get("/get-product-photo/:pid", productPhotoController);
router.delete("/get-product-delete/:pid", deleteProductController);
router.get("/search/:keyword", searchProductController);

router.post("/product-filters", productFiltersController);

  router.get("/braintree/token", braintreeTokenController);

  //payments
  router.post("/braintree/payment", brainTreePaymentController);


export default router;