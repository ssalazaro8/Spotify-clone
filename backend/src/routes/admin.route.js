import { Router } from "express";
import { createSong } from "../controllers/admin.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";
import { deleteSong, createAlbum, deleteAlbum, checkAdmin } from "../controllers/admin.controller.js";

const router = Router();

//slightly optimize clean code
router.use(protectRoute, requireAdmin)

router.get("/check", protectRoute, requireAdmin, checkAdmin)

router.post("/songs",protectRoute, requireAdmin, createSong);
router.delete("/songs/:id",protectRoute, requireAdmin, deleteSong); 

router.post("/albums",protectRoute, requireAdmin, createAlbum);
router.delete("/albums/:id",protectRoute, requireAdmin, deleteAlbum); 


export default router;