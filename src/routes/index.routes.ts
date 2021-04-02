import { Router } from "express";
import { getTimezone } from "../controllers/index.controller";
const router = Router();

router.route("/timezone").post(getTimezone);

export default router;
