import { Router } from "express";
import { generateQR } from "./qr.controller.js";

const router = Router();

router.post("/generate", generateQR);

export default router;