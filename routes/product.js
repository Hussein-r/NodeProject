import { Router } from "express";
import verifyToken from "../middlewares/verifyToken.js";
import authUser from "../middlewares/authUser.js";
import productController from "../controllers/product.js";

const router = Router();

router
  .route("/")
  .get(productController.getAllProducts)
  .post(verifyToken, authUser, productController.createProduct);
router
  .route("/:id")
  .get(productController.getProduct)
  .patch(verifyToken, authUser, productController.updateProduct)
  .delete(verifyToken, authUser, productController.deleteProduct);

export default router;
