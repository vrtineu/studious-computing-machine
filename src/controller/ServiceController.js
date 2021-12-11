import connect from "../database/index.js";
import Service from "../model/ServiceSchema.js";
import dotenv from "dotenv";

dotenv.config();
const { MONGO_URL } = process.env;

export default class ServiceController {
	async createService(req, res) {
		try {
			await connect(MONGO_URL);

			const service = new Service({ ...req.body });

			const result = await service.save();

			res.status(200).json(result);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}

	async findServices(req, res) {
		try {
			await connect(MONGO_URL);
			
			const services = await Service.find({});

			return res.status(200).json(services);
		} catch (error) {
			return res.status(500).json({
				message: "Internal server error",
				error: error.message,
			});
		}
	}
}
