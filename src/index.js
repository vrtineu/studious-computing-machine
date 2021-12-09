const customExpress = require("./config/customExpress");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

(async () => {
	const { MONGO_URL, PORT } = process.env;

	const options = { useNewUrlParser: true, useUnifiedTopology: true };
	mongoose
		.connect(MONGO_URL, options)
		.then(() => console.log("Connected to MongoDB"))
		.catch((err) => console.log(err));
	mongoose.connection.on(
		"error",
		console.error.bind(console, "MongoDB connection error:")
	);

	const app = customExpress();

	app.listen(PORT, () => {
		console.log(`Server running on port ${PORT}`);
	});
})();
