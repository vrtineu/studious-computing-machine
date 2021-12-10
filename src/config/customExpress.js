import express from "express";

export default () => {
	const app = express();

	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));

	return app;
};
