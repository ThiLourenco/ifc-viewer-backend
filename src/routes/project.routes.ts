// src/routes/project.routes.ts
import { Router } from "express";
import { projectController } from "../controllers/project.controller";
import { upload } from "../config/multer";

const router = Router();

router.post("/", upload.single("file"), projectController.upload);
router.get("/", projectController.list);
router.get("/:id", projectController.get);
router.delete("/", projectController.deleteAll);

export default router;