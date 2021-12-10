import servicesRouter from "./services.js";
import { Router } from "express";

const router = Router();

router.use("/services", servicesRouter);

export default router;
