const express = require("express");

module.exports = () => {
    const app = express();
    
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));

	return app;
};
