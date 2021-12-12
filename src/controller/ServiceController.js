import connect from "../database/index.js";
import mongoose from "mongoose";
import Service from "../model/ServiceSchema.js";
import dotenv from "dotenv";

dotenv.config();
const { MONGO_URL } = process.env;
const { connection } = mongoose;

export default class ServiceController {
	async createService(req, res) {
		try {
			connect(MONGO_URL);

			const service = new Service({ ...req.body });
			const result = await service.save();
			connection.close();

			res.status(200).json(result);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}

	async findServices(req, res) {
		try {
			connect(MONGO_URL);

			const service = await Service.find({});
			connection.close();
			
			res.status(200).json(...service);
		} catch (error) {
			return res.status(500).json({
				message: "Internal server error",
				error: error.message,
			});
		}
	}

	async findServiceById(req, res) {
		try {
			connect(MONGO_URL);

			const service = await Service.find({ id: req.params.id });
			connection.close();

			res.status(200).json(...service);
		} catch (error) {
			return res.status(500).json({
				message: "Internal server error",
				error: error.message,
			});
		}
	}
}
