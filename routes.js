import { Router } from "express";
import teamController from "./app/controllers/TeamController.js"

const router = Router()

router.get("/teams", teamController.index);
router.get("/teams/:id", teamController.show);
router.post("/teams", teamController.store);
router.put("/teams/:id", teamController.update);
router.delete("/teams/:id", teamController.delete);

export default router