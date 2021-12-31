import connect from "../database/index";
import mongoose from "mongoose";
import { Request, Response } from "express";
import Service from "../models/ServiceSchema";
import dotenv from "dotenv";

dotenv.config();
const MONGO_URL: string = process.env.MONGO_URL!;
const { connection } = mongoose;

export default class ServiceController {
	async createService(req: Request, res: Response) {
		try {
			const date = new Date(req.body.date);
			if (date < new Date()) {
				res.status(400).json({
					message: "Date must be greater than the date of creation",
				});
				return;
			}
				

			const clientName = req.body.clientName;
			if (clientName.length < 5) {
				res.status(400).json({
					message: "Client name must be at least 5 characters long",
				});
				return;
			}
				

			connect(MONGO_URL);

			const service = new Service({ ...req.body });
			const result = await service.save();
			connection.close();

			res.status(200).json(result);
		} catch (error) {
			res
				.status(500)
				.json({ message: "Internal server error", error: error.message });
		}
	}

	async findServices(req: Request, res: Response) {
		try {
			connect(MONGO_URL);

			const service = await Service.find({});
			connection.close();

			res.status(200).json(...service);
		} catch (error) {
			res
				.status(500)
				.json({ message: "Internal server error", error: error.message });
		}
	}

	async findServiceById(req: Request, res: Response) {
		try {
			connect(MONGO_URL);

			const service = await Service.findOne({ id: req.params.id });
			connection.close();

			res.status(200).json(...service);
		} catch (error) {
			res
				.status(500)
				.json({ message: "Internal server error", error: error.message });
		}
	}

	async updateService(req: Request, res: Response) {
		try {
			connect(MONGO_URL);

			const service = await Service.findOneAndUpdate(
				{ id: req.params.id },
				{ ...req.body },
				{ rawResult: true }
			);
			connection.close();

			res.status(200).json(service.value);
		} catch (error) {
			res
				.status(500)
				.json({ message: "Internal server error", error: error.message });
		}
	}

	async updateFieldOfService(req: Request, res: Response) {
		try {
			connect(MONGO_URL);

			const service = await Service.findOneAndUpdate(
				{ id: req.params.id },
				{ ...req.body },
				{ rawResult: true }
			);
			connection.close();

			res.status(200).json(service.value);
		} catch (error) {
			res
				.status(500)
				.json({ message: "Internal server error", error: error.message });
		}
	}

	async deleteService(req: Request, res: Response) {
		try {
			connect(MONGO_URL);

			const service = await Service.findOneAndDelete(
				{ id: req.params.id },
				{ rawResult: true }
			);
			connection.close();

			res.status(200).json(service.value);
		} catch (error) {
			res
				.status(500)
				.json({ message: "Internal server error", error: error.message });
		}
	}
}
