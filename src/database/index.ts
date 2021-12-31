import mongoose, { ConnectOptions } from "mongoose";

export default (db: string) => {
    const options = { useNewUrlParser: true, useUnifiedTopology: true };
	const connect = () => {
		mongoose
			.connect(db, options as ConnectOptions)
			.then(() => {
				console.log("Database connection successful");
			})
			.catch((err) => {
				console.error(`Database connection error: ${err.message}`);
				process.exit(1);
			});
	};
	connect();
};
