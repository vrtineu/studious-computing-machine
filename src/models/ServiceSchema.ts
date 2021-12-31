import mongoose, { Schema } from "mongoose";
const autoIncrement = require("mongoose-sequence")(mongoose);

const serviceSchema = new Schema({
	id: {
		type: Number,
		unique: true,
	},
	clientName: {
		type: String,
		required: true,
	},
	petName: {
		type: String,
		required: true,
	},
	serviceType: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		required: true,
	},
	anotation: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
	dateOfCreation: {
		type: Date,
		default: Date.now,
	},
});

serviceSchema.plugin(autoIncrement, { inc_field: "id" });

const Service = mongoose.model("service", serviceSchema);

export default Service;
