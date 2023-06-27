import { Router } from "express";
import categoryController from "../controllers/category.js";
import verifyToken from "../middlewares/verifyToken.js";
import authUser from "../middlewares/authUser.js";
const router = Router();

router
  .route("/")
  .get(categoryController.getAllCategories)
  .post(verifyToken, authUser, categoryController.createCategory);
router
  .route("/:id")
  .get(categoryController.getCategory)
  .patch(verifyToken, authUser, categoryController.updateCategory)
  .delete(verifyToken, authUser, categoryController.deleteCategory);

export default router;
