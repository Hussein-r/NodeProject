import { Router } from "express";
import { signup, signin } from "../controllers/auth.js";

const router = Router();

router.post("/register", signup);

router.post("/login", signin);

export default router;
