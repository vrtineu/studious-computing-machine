import connect from "../database/connect.js";
import dotenv from "dotenv";

dotenv.config();
const { MONGO_URL } = process.env;
class ServicePet {
	list(res) {
		connect(MONGO_URL);
		const collection = connect.db.collection("services");
		collection.find({}).toArray((err, result) => {
			if (err) {
				res.status(500).json({
					message: "Error getting services",
					error: err,
				});
			} else {
				res.status(200).json(result);
			}
		});
	}
}

export default new ServicePet();
