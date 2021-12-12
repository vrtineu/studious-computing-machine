import { Router } from "express";
import ServiceController from "../controller/ServiceController.js";

const servicesRouter = Router();
const serviceController = new ServiceController();

servicesRouter.post("/", serviceController.createService);
servicesRouter.get("/", serviceController.findServices);
servicesRouter.get("/:id", serviceController.findServiceById);

export default servicesRouter;
