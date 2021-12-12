import mongoose from "mongoose";

export default (db) => {
	const connect = () => {
		mongoose
			.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
			.then(() => {
				console.log("Database connection successful");
			})
			.catch((err) => {
				console.error(`Database connection error: ${err.message}`);
				process.exit(1);
			});
	};
	connect();

	// mongoose.connection.on("disconnected", connect);
};
