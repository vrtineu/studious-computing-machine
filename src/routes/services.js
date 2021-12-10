// import Service from "../model/service.js";
import { Router } from "express";

const servicesRouter = Router();
// const serviceController = new Service();

servicesRouter.get("/", (req, res) => {
	res.send("hello");
});

export default servicesRouter;
