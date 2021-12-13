import { Router } from "express";
import ServiceController from "../controller/ServiceController.js";

const servicesRouter = Router();
const serviceController = new ServiceController();

servicesRouter.post("/", serviceController.createService);
servicesRouter.get("/", serviceController.findServices);
servicesRouter.get("/:id", serviceController.findServiceById);
servicesRouter.put("/:id", serviceController.updateService);
servicesRouter.patch("/:id", serviceController.updateFieldOfService);
servicesRouter.delete("/:id", serviceController.deleteService);

export default servicesRouter;
