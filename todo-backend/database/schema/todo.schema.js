const mongoose = require('mongoose');
const validator = require('validator');

const { Schema } = mongoose;

// * todoSchema created
const todoSchema = new Schema({
	title: {
		type: String,
		required: [true, 'Please provide a title'],
	},
	value: {
		type: String,
		required: [true, 'Please provide a value'],
	},
	date: {
		type: Date,
		default: new Date(),
	},
});

//* Todo model created by using todoSchema
const Todo = mongoose.model('todo', todoSchema);

// * Model exported
module.exports = Todo;
