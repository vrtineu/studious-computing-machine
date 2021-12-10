import connect from "../database/connect.js";
import dotenv from "dotenv";

dotenv.config();
const { MONGO_URL } = process.env;

export default class ServiceController {
	async findServices(req, res) {
		try {
			const db = await connect(MONGO_URL);
			const services = await db.collection("services").find({}).toArray();
			return res.status(200).json(services);
		} catch (error) {
			return res.status(500).json({
				message: "Internal server error",
				error: error.message,
			});
		}
	}
}
