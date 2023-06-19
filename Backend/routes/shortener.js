import express from "express";
import {
  createUrlShortener,
  redirectUrlShortener,
} from "../controllers/shortener.js";
import verifyKey from "../middleware/verifyKey.js";
const router = express.Router();

router.post("/", verifyKey, createUrlShortener);
router.get("/:requestUrl", redirectUrlShortener);

export default router;
