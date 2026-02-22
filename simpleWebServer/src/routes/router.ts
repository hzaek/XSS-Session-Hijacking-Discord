import { Router } from "express";
const router = Router();
import dbRouter from "./dbRouter";

router.use(dbRouter)
export default router;