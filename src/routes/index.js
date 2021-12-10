import ServicePet from "../model/service.js";

export default (app) => {
	app.get("/services", (req, res) => {
		// ServicePet.list(res);
        res.send("Hello World");
	});
};
