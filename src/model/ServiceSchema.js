import mongoose from 'mongoose';
import { Schema, autoIncrement } from 'mongoose';

const ServiceSchema = new Schema({
	id: {
		type: Number,
		required: true,
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

ServiceSchema.plugin(autoIncrement.plugin, { inc_field: "id" });

const Service = mongoose.model("service", ServiceSchema);

export default Service;
