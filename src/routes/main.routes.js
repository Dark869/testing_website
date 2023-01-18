import {Router} from "express";
import { 
    getIndexhtml,
    getCss
} from "../controllers/main.controller.js";

const router = Router();

router.get("/", getIndexhtml);

router.get("/styles/style.css", getCss);

export default router;