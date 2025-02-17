import { Router } from "express";
import { 
    getIndexhtml,
    getCss,
    getData,
    postInsertData,
    deleteData,
    getJs
} from "../controllers/main.controller.js";

const router = Router();

router.get("/", getIndexhtml);

router.get("/styles/style.css", getCss);

router.get("/scripts/index.js", getJs);

router.get("/data", getData);

router.post("/insert", postInsertData);

router.delete("/deleteData/:id", deleteData);

export default router;